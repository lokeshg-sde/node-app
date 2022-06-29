import React from 'react'
import logo from './logo.svg'
import Icon from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/d.ico'} alt="logo" />
        <img src={Icon} className="App-logo" alt="logo" />
        <p>
          Node JS App built with <strong>ReactJS</strong> Library as <code>Fron End</code> and{' '}
          <strong>ExpressJS and MongoDB</strong> as
          <code> Back End</code>.
        </p>
        <a className="App-link" href={logo} target="_blank" rel="noopener noreferrer">
          ReactJS
        </a>
      </header>
    </div>
  )
}

export default App
