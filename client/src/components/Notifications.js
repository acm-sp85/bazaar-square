import React from 'react';
import Message from './Message';

function Notifications(props) {
  const messages = props.currentUser.received_messages;
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>NOTIFICATIONS</h1>

      {messages.length == 0 ? (
        <h3 style={{ textAlign: 'center' }}>You have no messages yet</h3>
      ) : (
        <></>
      )}
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default Notifications;
