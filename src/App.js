import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Social from './components/Socials';
import Footer from './components/Footer';
import Project from './pages/Project'
import About from './pages/About';
import { AppDiv } from './AppStyles';
import { Main } from './AppStyles';
// import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <AppDiv className='App-wrapper'>
      <Header className='header' />
      <Social />
      <Main>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Project />} />
        </Routes>
      </Main>
      <NavBar className='nav' />
      <Footer />
    </AppDiv>
  );
}

export default App;
