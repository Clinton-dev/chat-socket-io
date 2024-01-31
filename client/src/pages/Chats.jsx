import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/UserChat";

function Chats() {
  const { user } = useContext(AuthContext);
  const { userChats, chatErrors, chatLoading } = useContext(ChatContext);

  return (
    <Container>
      {userChats?.length < 1 ? null : (
        <Stack gap={3} direction="horizontal" className="align-items-start">
          <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
            {chatLoading && <p>Loading...</p>}
            {userChats?.map((chat, index) => {
              return <UserChat key={index} chat={chat} user={user} />;
            })}
          </Stack>
          <p>chatBox</p>
        </Stack>
      )}
    </Container>
  );
}

export default Chats;
