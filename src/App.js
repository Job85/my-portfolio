import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import ProjectPage from './pages/ProjectPage'
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
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
