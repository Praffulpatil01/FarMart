import React from 'react';
import '../App.css'; // Import your CSS file

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Agricultural Services</h1>
        <p>Explore our wide range of services and products designed to support and enhance your farming needs.</p>
      </header>
      <div className="services-container">
        <div className="service-card">
          <img src="/images/fertilizer.jpg" alt="Fertilizers" className="service-image" />
          <h2 className="service-title">High-Quality Fertilizers</h2>
          <p className="service-description">Choose from a variety of fertilizers that enhance soil fertility and crop yield. Our fertilizers are designed for different types of crops and soil conditions.</p>
        </div>
        <div className="service-card">
          <img src="/images/seeds.jpg" alt="Seeds" className="service-image" />
          <h2 className="service-title">Premium Seeds</h2>
          <p className="service-description">We offer a selection of high-quality seeds for various crops, ensuring optimal growth and productivity. Explore our collection to find the perfect seeds for your farm.</p>
        </div>
        <div className="service-card">
          <img src="/images/irrigation.jpg" alt="Irrigation Systems" className="service-image" />
          <h2 className="service-title">Advanced Irrigation Systems</h2>
          <p className="service-description">Our irrigation solutions are designed to provide efficient water management for your crops. Discover systems that help conserve water and increase your farm's productivity.</p>
        </div>
        <div className="service-card">
          <img src="/images/pesticides.jpg" alt="Pesticides" className="service-image" />
          <h2 className="service-title">Effective Pesticides</h2>
          <p className="service-description">Protect your crops from pests and diseases with our range of effective pesticides. We offer safe and efficient solutions to ensure healthy and high-yielding crops.</p>
        </div>
      </div>
      <footer className="services-footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
