// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './components/GameBoard';
import './assets/styles.css';

const App = () => {
    return (
        <div>
            <h1>Whack-a-Mole Game</h1>
            <GameBoard />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));