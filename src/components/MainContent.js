import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Services from './pages/Services';
import Buyer from './pages/Buyer'; 

const MainContent = () => {
  return (
    <main style={styles.main}>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>
  );
};

const styles = {
  main: {
    padding: '20px',
  },
};

export default MainContent;
