import React from 'react';
import trophy from './img/trophy.svg'
import {render, getByLabelText, getByTestId} from '@testing-library/react'
import Players from './components/Players'
import DarkMode from "./hooks/DarkMode"
import './App.css';

function App() {

  const [darkMode, setDarkMode] = DarkMode(false)

  const toggleDarkMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">


      <header className="App-header"><h1>Women's World Cup Soccer</h1>
       <img src={trophy} className="trophy" alt="trophy" />
 <button data-testid='dark-btn' onClick={toggleDarkMode}>Dark Mode</button>
 </header>
 <div>
 <Players/>
  </div>
  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
