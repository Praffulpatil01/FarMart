import React, { useState } from 'react';
import { useCart } from '../pages/CartContext'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import '../App.css'; 

<Link to="/view-cart" className="view-cart-button">
  View Cart
</Link>
const products = [
  { id: 1, name: 'Wheat', image: '/images/wheet.jpg', price: 25.00 },
  { id: 2, name: 'Bajara', image: '/images/Bajra.jpg', price: 30.00 },
  { id: 3, name: 'Soyabean', image: '/images/soybean.jpg', price: 50.00 },
];

const Buyer = () => {
  const {addToCart } = useCart(); 

  const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="quantity-control">
          <button onClick={handleDecrease} className="quantity-button">-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleIncrease} className="quantity-button">+</button>
        </div>
        <button onClick={() => addToCart(product, quantity)} className="add-to-cart-button">
         + Add
        </button>
      </div>
    );
  };

  return (
    <div className="buyer-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Buyer;
