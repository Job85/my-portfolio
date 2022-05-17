import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
