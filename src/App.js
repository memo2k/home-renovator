import React, { useEffect } from 'react';
import "./assets/styles/style.scss";
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/Home';
import Services from './pages/ServicesPage/Services';
import Work from './pages/WorkPage/Work';
import About from './pages/AboutPage/About';
import Contact from './pages/ContactPage/Contact';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
