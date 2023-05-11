import React from 'react';
import "./assets/styles/style.scss";
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
