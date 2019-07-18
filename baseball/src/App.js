import React, { Component } from 'react';
import ButtonForm from './components/ButtonForm.js'
import HUD from './components/HUD.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonForm></ButtonForm>
        <HUD></HUD>
      </div>
    );
  }
}

export default App;