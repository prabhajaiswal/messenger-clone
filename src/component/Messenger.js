import React, { useEffect, useState } from 'react';
import { Avatar, Button, FormControl, Input, InputLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import db from '../services/firebase';
import Message from './Message';
import FlipMove from 'react-flip-move';
import './Message.css'
function Messenger() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
const [username,setUsername]   = useState('');
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessages(snapshot.docs.map((doc) =>({id: doc.id ,message :doc.data()}) ));

    });

    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(()=>{
    
     setUsername(prompt('hi'));

  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    addDoc(collection(db, 'messages'), {
      username:username,
      message: input,
    });
    setInput('');
  };

  return (
    <div className="chat">
     <FlipMove>
     {messages.map((message, index) => (
     <Message key={index} username={message.username} message={message.message} />

      ))}

     </FlipMove>
      

       <form onSubmit={sendMessage}   className='app_form'>
        <InputLabel>Enter a message</InputLabel>
        <Input value={input} onChange={(event) => setInput(event.target.value)} />
        <Button type="submit" color="primary">
          <SendIcon />
        </Button>
      </form>
    </div>
  );
}

export default Messenger;


// setMessages(snapshot.docs.map((doc) => doc.data().message));