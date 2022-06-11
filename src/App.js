import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Project from './pages/Project'
import About from './pages/About';
// import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
