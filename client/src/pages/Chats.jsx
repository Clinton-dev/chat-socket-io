import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/UserChat";
import PotentialChats from "../components/PotentialChats";
import Chatbox from "../components/Chatbox";

function Chats() {
  const { user } = useContext(AuthContext);
  const { userChats, updateCurrentChat, chatLoading, currentChat } =
    useContext(ChatContext);

  return (
    <Container>
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <Stack gap={3} direction="horizontal" className="align-items-start">
          <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
            {chatLoading && <p>Loading...</p>}
            {userChats?.map((chat, index) => {
              return (
                <div key={index} onClick={() => updateCurrentChat(chat)}>
                  <UserChat chat={chat} user={user} />
                </div>
              );
            })}
          </Stack>
          <Chatbox />
        </Stack>
      )}
    </Container>
  );
}

export default Chats;
