import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import AboutMe from '../About';



function AppRoutes() {
  return (
  
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
      </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
