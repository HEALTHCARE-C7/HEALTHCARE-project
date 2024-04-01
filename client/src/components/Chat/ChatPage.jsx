import React, { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import '../../CSS/chat.css'
const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket.on('message', (data) => setMessages([...messages, data]));
      }, [socket, messages]);
      console.log(messages);
      console.log(socket);
  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
      <ChatBody messages={messages}  />
        <ChatFooter socket={socket}/>
      </div>
    </div>
  );
};

export default ChatPage;