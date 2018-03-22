import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Load environment variables 
dotenv.config()  

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.REACT_APP_FIREBASE_DATABASE_ID}.firebaseio.com`,
    storageBucket: "",
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_ID}`
  };
console.log(config)
firebase.initializeApp(config);

// Get a reference to the database service 
const database = firebase.database(); 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
