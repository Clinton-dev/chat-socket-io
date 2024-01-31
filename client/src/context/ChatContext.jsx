import { useState, createContext, useEffect, useCallback } from "react";
import { getRequest, postRequest, baseUrl } from "../services/UsersSerivce";

export const ChatContext = createContext();

export const ChatProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState([]);

  const [chatErrors, setChatErrors] = useState(null);
  const [chatLoading, setChatLoading] = useState(false);

  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState(null);

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getRequest(`${baseUrl}/users`);

      if (response?.error) {
        return console.log("fetch user error", response);
      }

      const filteredFriends = response.filter((friend) => {
        let isChatCreated = false;

        if (friend._id === user?._id) return false;

        if (userChats) {
          isChatCreated = userChats?.some((chat) => {
            return (
              chat.members[0] === friend._id || chat.members[1] === friend._id
            );
          });
        }

        return !isChatCreated;
      });

      setFriends(filteredFriends);
    };
    fetchUsers();
  }, [user, userChats]);

  useEffect(() => {
    const fetchUserChats = async () => {
      if (user?._id) {
        setChatLoading(true);
        setChatErrors(null);
        const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

        setChatLoading(false);

        if (response?.error) {
          setChatErrors(response);
        }

        setUserChats(response);
      }
    };

    fetchUserChats();
  }, [user]);

  //TODO: Check why this is not reflecting in the db
  const createChat = useCallback(async (firstId, secondId) => {
    // create chat using api endpoint
    const response = await postRequest(
      `${baseUrl}/chats`,
      JSON.stringify({ firstId, secondId })
    );

    console.log("Chat creation response", response);

    if (response.error) {
      return console.log("Chat creation error", response);
    }

    setUserChats((prevState) => [...prevState, response]);
    // append the response which is a chat to list of users chats
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsMessagesLoading(true);
      setMessagesError(null);
      const response = await getRequest(
        `${baseUrl}/messages/${currentChat?._id}`
      );

      setIsMessagesLoading(false);

      if (response?.error) {
        setMessagesError(response);
      }

      setMessages(response);
    };

    fetchMessages();
  }, [currentChat]);

  const updateCurrentChat = useCallback((chat) => {
    setCurrentChat(chat);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        userChats,
        chatErrors,
        chatLoading,
        setUserChats,
        setChatErrors,
        setChatLoading,
        friends,
        createChat,
        updateCurrentChat,
        currentChat,
        messages,
        isMessagesLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
