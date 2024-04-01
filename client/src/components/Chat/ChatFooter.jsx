import React, { useState } from 'react';
import ChatBody from './ChatBody';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    // if (message.trim() && localStorage.getItem('token')) {
      socket.emit('message', {
        text: message,
        // name: localStorage.getItem('token'),
       
      });
    // }
    setMessage('');
  };
  console.log(message);
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
      <div>
        {/* <ChatBody /> */}
      </div>
    </div>
  );
};

export default ChatFooter;