import React from 'react';
import './App.css';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home ,AboutUs ,Pricing,Login } from './pages/index';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
