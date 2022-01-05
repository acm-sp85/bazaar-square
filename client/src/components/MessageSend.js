import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function MessageSend(props) {
  const [message_content, setMessage_content] = useState("");
  const [receiver_id, setReceiver_id] = useState(
    props.props.history.location.state
  );
  const [user_id, setUser_id] = useState(props.currentUser.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message_content);
    console.log("current user id: " + user_id);
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message_content,
        user_id: receiver_id,
        sender_id: user_id,
      }),
    };

    fetch("/messages", config);
  };
  return (
    <div className="centered">
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="text-area"
          placeholder="Type message..."
          value={message_content}
          onChange={(e) => setMessage_content(e.target.value)}
        />
        <Button type="submit">SEND</Button>
      </form>
    </div>
  );
}
