import React, { useEffect, useState } from 'react';
import Firebase from '../service/firebase';
import './Chat.css';

const Chat = () => {

  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);

  const firestore = new Firebase();

  useEffect(() => {
    firestore.getMessages((messages) => {
      setMessages(messages);
    });
  }, [])

  const sendMessage = (e) => {

    if (value === '') {
      return
    }

    if (e.key === 'Enter' || e.target.classList.contains('chat__button')) {
      firestore.sendMessage({ text: value })
      setValue('')
    }
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <h3 className='chat__title'>Chat-firebase</h3>
      </div>
      <div className='chat__main'>
        {messages.length === 0 ? <h3 className='chat__preloader'>Loading...</h3> : Object.entries(messages).reverse().map(([key, { text }]) =>
          <div key={key} className='chat__message-container'>
            <p className='chat__message-text'>{text}</p>
          </div>
        )}
      </div>
      <div className='chat__footer'>
        <input className='chat__input' onKeyPress={sendMessage} value={value} onChange={e => setValue(e.target.value)} type='text' minLength='1' maxLength='200' placeholder='Write message...' />
        <button type='submit' onClick={sendMessage} className='chat__button'>Send</button>
      </div>
    </div>
  )
};

export default Chat;
