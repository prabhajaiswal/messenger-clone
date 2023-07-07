import React  , {forwardRef} from 'react'
import{Card,CardContent,Typography}  from '@material-ui/core'
import './Message.css'
const  Message = forwardRef(({ message, username },ref) => {
    const isUser = username === message?.username; // Add a check for the 'username' property
  
    return (
      <div ref={ref} className={`message ${isUser && 'message_user'}`}>
        <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
          <CardContent>
            <Typography
              color={isUser ? 'textPrimary' : 'initial'}
              variant="h5"
              component="h2"
            >
              {isUser && `${message?.username} :`} {message?.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
)
  export default Message


/*
  import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === (message?.username || ''); // Add a check for the 'username' property

  // Add a check to ensure 'message' is a valid string
  const messageContent = typeof message?.message === 'string' ? message.message : '';

  return (
    <div ref={ref} className={`message ${isUser && 'message_user'}`}>
      <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
        <CardContent>
          <Typography
            color={isUser ? 'textPrimary' : 'initial'}
            variant="h5"
            component="h2"
          >
            {message?.username || ''}: {messageContent}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

*/