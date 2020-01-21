import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recording from "./containers/Recording";
import Microphone from "./containers/Microphone";

function App() {
  return (
    <div className="App">
     <Recording/>
     <Microphone/>
    </div>
  );
}

export default App;
