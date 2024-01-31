import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { useFetchRecipient } from "../hooks/useFetchRecipient";

function Chatbox() {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { recipient } = useFetchRecipient(currentChat, user);

  console.log("chat details", currentChat);
  
  if (!recipient)
    return (
      <p style={{ textAlign: "center", width: "100%" }}>
        No conversation selected yet!
      </p>
    );

  if (isMessagesLoading)
    return <p style={{ textAlign: "center", width: "100%" }}>Loading Chat..</p>;
  return <div>Chatbox</div>;
}

export default Chatbox;
