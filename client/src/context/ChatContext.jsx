import { useState, createContext, useEffect } from "react";
import { getRequest, postRequest, baseUrl } from "../services/UsersSerivce";

export const ChatContext = createContext();

export const ChatProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState([]);

  const [chatErrors, setChatErrors] = useState(null);
  const [chatLoading, setChatLoading] = useState(false);

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
  }, [user?._id, userChats]);

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
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
