import React from 'react';
import './reset.css';
import './App.css';
import { thisExpression } from '@babel/types';

class App extends React.Component {
  constructor() {
    super()

    this.dropdown = React.createRef()
  }

  render() {
    return (
      <div> 
        <nav>
          <div id="image-container"></div>
          <i id="hamburder-icon" className="fas fa-bars"/>
          <div id="button-container">
          <div className="button">Home</div>
          <div className="button">About</div>
          <div className="button">Services</div>
          <div className="button">Contact</div>
          </div>
        </nav>
        <div id="stuff">The Rest of the Stuff</div>
      </div>
    );

  }
}

export default App;
