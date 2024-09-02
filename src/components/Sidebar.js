import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaTools, FaShoppingCart, FaUser, FaStore, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import necessary icons
import '../App.css';

const Sidebar = () => {
  const [isUnfolded, setIsUnfolded] = useState(true); // Initially unfolded
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  const toggleSidebar = () => {
    setIsUnfolded(!isUnfolded);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside 
      style={{ 
        ...styles.sidebar, 
        width: isUnfolded ? '150px' : '30px'
      }}
    >
      <div style={styles.toggleButtonContainer}>
        <button onClick={toggleSidebar} style={styles.toggleButton}>
          {isUnfolded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
      <div style={styles.card}>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" style={styles.logo} />
        {isUnfolded && <h2 style={styles.businessName}>FarmersMart</h2>}
      </div>
      <ul style={styles.list}>
        <li>
          <Link to="/" style={styles.link}>
            <FaTachometerAlt style={styles.icon} />
            {isUnfolded && 'Dashboard'}
          </Link>
        </li>
        <li>
          <button 
            onClick={toggleDropdown} 
            style={styles.dropdownButton}
          >
            <FaShoppingCart style={styles.icon} />
            {isUnfolded && 'Market'}
          </button>
          {isDropdownOpen && isUnfolded && (
            <ul style={styles.dropdownMenu}>
              <li>
                <Link to="/buyer" style={styles.link}>
                  <FaUser style={styles.icon} />
                  {isUnfolded && 'Buyer'}
                </Link>
              </li>
              <li>
                <Link to="/seller" style={styles.link}>
                  <FaStore style={styles.icon} />
                  {isUnfolded && 'Seller'}
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/services" style={styles.link}>
            <FaTools style={styles.icon} />
            {isUnfolded && 'Services'}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    backgroundColor: '#333',
    padding: '20px',
    position: 'fixed',
    height: '100%',
    top: '0',
    left: '0',
    overflow: 'hidden',  // Ensures content doesn't overflow when sidebar is narrow
    transition: 'width 0.3s',  // Smooth transition effect
  },
  toggleButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '125px',
    height: '46px',
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    padding: '10px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  businessName: {
    marginTop: '10px',
    fontSize: '18px',
    color: '#333',
    whiteSpace: 'nowrap',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  link: {
    textDecoration: 'none',
    color: '#ddd',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  dropdownButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '1px',
    textAlign: 'left',
    width: '100%',
    fontSize: '16px',
    color: '#ddd',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  dropdownMenu: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    backgroundColor: '#333',
    borderRadius: '4px',
  },
  icon: {
    marginRight: '5px',
    fontSize: '20px',
  },
};

export default Sidebar;
