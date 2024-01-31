import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

function PotentialChats() {
  const { user } = useContext(AuthContext);
  const { friends, createChat } = useContext(ChatContext);
  return (
    <div>
      <div className="all-users">
        {friends?.map((friend, index) => {
          return (
            <div
              className="single-user"
              key={index}
              onClick={() => createChat(friends._id, user._id)}
            >
              {friend.name}
              <span className="user-online"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PotentialChats;
