import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Load environment variables 
dotenv.config()  

// Initialize firebase 
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID
  };
firebase.initializeApp(config);

// Get a reference to the database service 
const database = firebase.database(); 

// Example
//console.log(database.ref('speed'));


// Firebase Example 
//const dbRef = database.ref().child('data');

// Real time database listener 
// Everytime value updates at data location 'data' => call setState => re-render app 
// Manages state synchronization one place in setState 
// dbRef.on('value', snapchot => {
//     this.setState({
//         data: snapshot.val()
//     });
// });


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
