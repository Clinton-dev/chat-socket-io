import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

function Chats() {
  const { userChats, chatErrors, chatLoading } = useContext(ChatContext);

  console.log({ userChats });
  console.log({ chatErrors });
  console.log({ chatLoading });
  return <div>Chats</div>;
}

export default Chats;
