import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Services from './pages/services';
import Buyer from './pages/Buyer';
import { CartProvider } from './pages/CartContext';
import Header from './pages/Header';
import ViewCart from './pages/ViewCart';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Header />
          <div style={{ display: 'flex', flex: 1 }}>
            <Sidebar />
            <main style={{ marginLeft: '250px', padding: '20px', flex: 1 }}>
              <Routes>
                <Route path="/services" element={<Services />} />
                <Route path="/Buyer" element={<Buyer />} />
                <Route path="/view-cart" element={<ViewCart />} /> {/* Add the ViewCart route */}
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
