import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Datalayer } from './auth/Datalayer';
import  { initialstate , reducer , actionTypes }  from './auth/Reducer';
document.cookie = "cookieName=cookieValue; SameSite=strict";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Datalayer initialstate={initialstate} reducer={reducer}>
    <App />
    </Datalayer>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();