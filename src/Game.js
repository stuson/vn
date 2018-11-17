import React, { Component } from 'react';
import './Game.css';
import './MainScreen.js'
import MainScreen from './MainScreen.js';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <MainScreen bgSrc='bg1.png' />
      </div>
    );
  }
}

export default Game;
