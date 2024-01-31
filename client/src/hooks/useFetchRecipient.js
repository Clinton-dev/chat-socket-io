import { useEffect, useState } from "react";
import { getRequest, baseUrl } from "../services/UsersSerivce";

export const useFetchRecipient = (chat, user) => {
  const [recipient, setRecipient] = useState(null);
  const [error, setError] = useState(false);

  const recipientId = chat.members.find((id) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;

      const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

      if (response.error) {
        return setError(response);
      }

      setRecipient(response);
    };

    getUser();
  }, [recipientId]);

  return { recipient, error };
};
