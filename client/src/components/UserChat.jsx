import React from "react";
import { useFetchRecipient } from "../hooks/useFetchRecipient";

function UserChat({ chat, user, key }) {
  const { recipient } = useFetchRecipient(chat, user);
  console.log({ recipient });
  return (<div key={key}>UserChat</div>);
}

export default UserChat;
