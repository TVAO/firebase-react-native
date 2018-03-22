import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Initialize Firebase // TODO: hide api key in env file 
const config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeA
firebase.initializeApp(config);

// Get a reference to the database service 
const database = firebase.database(); 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
