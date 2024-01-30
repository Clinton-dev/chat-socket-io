import { useState, createContext, useEffect } from "react";
import { getRequest, postRequest, baseUrl } from "../services/UsersSerivce";

export const ChatContext = createContext();

export const ChatProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState([]);

  const [chatErrors, setChatErrors] = useState(null);
  const [chatLoading, setChatLoading] = useState(false);

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
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
