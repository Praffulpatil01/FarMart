import React from 'react';
import { useCart } from '../pages/CartContext'; 
import '../App.css'; // Ensure this file includes styling for the table

const ViewCart = () => {
  const { cart,removeFromCart  } = useCart(); // Access cart from the context

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };
  return (
    <div className="view-cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price.toFixed(2)}</td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                <button 
                    onClick={() => handleRemove(item.id)} 
                    className="remove-button">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>    
              <td colSpan="4" className="total-label">Grand Total</td>
              <td className="total-amount">
                ₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewCart;

