import React from 'react';
import { useCart } from '../pages/CartContext'; 
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../App.css'; // Ensure this file includes styling for the header and cart button

const Header = () => {
  const { cart } = useCart();  // Access cart from the context

  return (
    <header className="header">
      <div className="cart-button-container">
        <Link to="/view-cart" className="cart-link">
          <button className="view-cart-button">
            View Cart
            <span className="cart-count">{cart.length}</span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
