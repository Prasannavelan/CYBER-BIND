// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import Home from './components/Home';
import Internships from './components/Internships';
import FreelancingServices from './components/FreelancingServices';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // Your global CSS file

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes> {/* Updated from Switch to Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/freelancing-services" element={<FreelancingServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
