import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

// React is used to handle state using 'setState' and 'render' 
class App extends Component {

  // Initialize component with state 
  // Sets initial data 
  constructor() {
    super(); 
    this.state = { // State of component 
      speed: 10 // Property 
    };
  }

  // Lifecycle method called once right after component is rendered to DOM 
  // Great place for real-time database to asynchronously download data from database 
  componentDidMount() {
    const rootFirebaseRef = firebase.database().ref(); //.child('react');
    const speedRef = rootFirebaseRef.child('speed');

    // Firebase realtime listener
    speedRef.on('value', snap => { 
      // On method allows to synchronize real-time 
      // Attached to reference in database 
      // Everytime data is changed at speed location in firebase db, provide snap callback with updated/new data
      this.setState({ // Re render app with new data 
        speed: snap.val()
      });
      console.log(snap.val());
    });
  }

  render() {
    return (
      <div className="App">
        <h1> {this.state.speed} </h1>
      </div>
    );
  }
}

export default App;
