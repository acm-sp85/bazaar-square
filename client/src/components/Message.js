import React from "react";
import "../styles/Message.css";

function Message(message) {
  return (
    <div className="message">
      <h3 className="sender">{message.message.sender}</h3>
      <p>{message.message.message_content}</p>
    </div>
  );
}

export default Message;
