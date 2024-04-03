import axios from 'axios';
import React, {  useState } from 'react';
// import ChatBody from './ChatBody';

const ChatFooter = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  // const [refrech,setRefrech]=useState(false);
const [messageInput, setMessageInput]=useState('')
// const addMsg=(body)=>{
// axios.post('http://localhost:5000/api/message',body)
// .then(()=>setRefrech(!refrech))
// .catch((error)=>console.log(error))
// }
// useEffect(()=>{

// },[refrech])
const sendMessage = (e) => {
  e.preventDefault();
  const newMessage = {
    content: messages,
    currentChatReceiverId:1
  };

  setMessages(prevMessages => [...prevMessages, newMessage]);
  axios.post('http://localhost:5000/api/message', newMessage)
  .then(response => {
    console.log('Message saved successfully:', response.data);
    setMessages(response.data.content)
    setMessageInput('');
  })
  .catch(error => {
    console.error('Error saving message:', error);
  });
  if (socket) {
    socket.emit('message', messages);
  }
};
// console.log('msg input',messageInput);
  // const handleSendMessage = (e) => {
  //   e.preventDefault();
  //     socket.emit('message', {
  //       text: messages,
  //     });
  //   setMessages('');
  // };


  // console.log('messg',messages);
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
      <div>
     
      </div>
    </div>
  );
};

export default ChatFooter;