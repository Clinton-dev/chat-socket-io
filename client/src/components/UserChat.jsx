import React from "react";
import { useFetchRecipient } from "../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap";

import avatar from "../assets/avatar.svg";

function UserChat({ chat, user }) {
  const { recipient } = useFetchRecipient(chat, user);
  console.log("recipient:", recipient);
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="user-card align-items-center p-2 justify-content-between"
      role="button"
    >
      <div className="d-flex">
        <div className="me-2">
          <img src={avatar} alt="user avatar" className="avatar-image" />
        </div>
        <div className="text-content">
          <div className="name">{recipient?.name}</div>
          <div className="text">text message</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div className="date">31/01/2024</div>
        <div className="this-user-notifications">3</div>
        <span className="user-online"></span>
      </div>
    </Stack>
  );
}

export default UserChat;
