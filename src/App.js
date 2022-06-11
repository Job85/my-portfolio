import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Project from './pages/Project'
import About from './pages/About';
import { AppDiv } from './AppStyles';
import { Main } from './AppStyles';
// import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <AppDiv>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Project />} />
        </Routes>
      </Main>
      <NavBar />
      <footer>
        <Footer />
      </footer>
    </AppDiv>
  );
}

export default App;
