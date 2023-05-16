import React from 'react';
import "./assets/styles/style.scss";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/Home';
import Services from './pages/ServicesPage/Services';
import Work from './pages/WorkPage/Work';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/work' element={<Work />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
