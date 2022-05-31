import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'
// import Home from './pages/Home';
import Header from './components/Header';
import Project from './pages/Project'
import About from './pages/About';
import Footer from './components/Footer';
// import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<About />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/projects' element={<Project />} />
      </Routes>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
