import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Project from './pages/Project'
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
