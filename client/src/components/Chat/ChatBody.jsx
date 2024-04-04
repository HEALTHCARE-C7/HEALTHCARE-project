import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages }) => {
  const navigate = useNavigate();
console.log('body',messages);
  const handleLeaveChat = () => {
    // localStorage.removeItem('token');
    navigate('/');
    window.location.reload();
  };
  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          <div className="message__chats" key={message.id}>
              <p>omar</p>
              <div className="message__recipient">
                <p>{message.content}</p>
              </div>
            </div>
        
          
          
        )}
    {/* <div className="message__chats" key={message.id}>
   { console.log('hello',messages.id)}
              <p className="sender__name">Your</p>
              <div className="message__sender">
                <p>omar</p>
              </div>
            </div>
          ) : ( */}
        <div className="message__status">
          <p></p>
        </div>
      </div>
    </>
  );
};

export default ChatBody