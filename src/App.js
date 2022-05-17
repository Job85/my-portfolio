import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import ProjectPage from './pages/ProjectPage'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
