import React, { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import '../../CSS/chat.css'
import  io  from "socket.io-client";
// import socketIO from 'socket.io-client';


const socket = io('http://localhost:4000');

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  // const [socket, setSocket] = useState(null);


  socket.on('connect', () => {
    console.log('Connected to server');
});




useEffect(() => {
  if (!socket) return;
 

  socket.on('message', (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
    console.log('data is ready',data);
  });

  return () => socket.off('message');
}, []);


      console.log('done',messages);
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