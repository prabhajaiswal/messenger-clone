/*import React , {useEffect, useState} from 'react';
import Message from './message.jpg';
import './Signin.css';
import google from './google.jpg';
import { useDatatlayerValue } from '../auth/Datalayer';
import { actionTypes } from '../auth/Reducer';
import { supabase } from '../services/firebase';

function Signin() {

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    .then((result) =>{
      dispatchEvent({
        type: actionTypes.SET_USER,
        user:result.user,
      });
    })
    .catch((error) => alert(error.message));
  }
  
  
async function signUpWithEmailPassword(email, password) {
  try {
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error('Error signing up:', error.message);
      return;
    }

    console.log('Successfully signed up:', user);
    // Handle successful sign-up, e.g., redirect the user to another page
  } catch (error) { console.error('Error signing up:', error.message);
}
}

async function signInWithEmailPassword(email, password) {
try {
  const { user, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error signing in:', error.message);
    return;
  }

  console.log('Successfully signed in:', user);
  // Handle successful sign-in, e.g., redirect the user to another page
} catch (error) {
  console.error('Error signing in:', error.message);
}
}




function handleInput(event) {
// Handle input changes and store the values in the component state or variables
}

function handleSubmit() {
// Get the values from the input fields (e.g., using state or variables)
const email = 'user@example.com'; // Replace with the actual email value
const password = 'password123'; // Replace with the actual password value
}


  return (
    <div className='signin'>
      
<div className="sign">
  <div className="first">
  <img src={Message} alt="no image" className='image1'/>
      <h1 className='tag'>Welcome to Messenger</h1>
      <div className="container">
      <img src={google} alt='no image'className='image'/>
      <button type="button" className="btn btn-light" onClick={signInWithGoogle}> Sign in with Google</button>
      </div>
     
  </div>

      <div className="header">
      
      <input placeholder="name"  name="name" type="name" className="input-hold"
       onClick={event => handleInput(event)}/>
      <input placeholder="email"  name="email" type="email" className="input-hold"
       onClick={event => handleInput(event)}/>
        
     <input placeholder="password"  name="password" type="password" className="input-hold" onClick={event => handleInput(event)}
     />
   
     <button onClick={signInWithEmailPassword}  className="btn btn-light">Submit</button>
   </div>
     </div>
     </div>
  )
}
/*
export default Signin;

/*   options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
          hd: 'domain.com', // google will also allow OAuth logins to be restricted to a specified domain using the 'hd' parameter
        },   */