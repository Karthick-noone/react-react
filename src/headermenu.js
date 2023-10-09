import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const headerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  };

  const navLinksStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '75px',
    margin: 0,
    padding: '0 20px', // Adjust the padding for smaller screens
    listStyle: 'none',
  };

  const menuIconStyle = {
    display: 'block',
    cursor: 'pointer',
  };

  // Define the linkStyle based on menuOpen
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    display: menuOpen ? 'block' : '', // Show links when menu is open
  };

  return (
    <div style={headerStyle}>
      <div style={navLinksStyle}>
        <div style={menuIconStyle} onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
        </div>
        <Link to="/home" style={linkStyle}>
          <h3>Home</h3>
        </Link>
        <Link to="/about" style={linkStyle}>
          <h3>About Us</h3>
        </Link>
        <Link to="/gallery" style={linkStyle}>
          <h3>Gallery</h3>
        </Link>
        <Link to="/contact" style={linkStyle}>
          <h3>Contact</h3>
        </Link>
        <Link to="/login" style={linkStyle}>
          <h3>Login</h3>
        </Link>
        <Link to="/register" style={linkStyle}>
          <h3>Register</h3>
        </Link>
        <Link to="/viewdata" style={linkStyle}>
          <h3>View Data</h3>
        </Link>
        <Link to="/edit" style={linkStyle}>
          <h3>Edit</h3>
        </Link>
        <Link to="/delete" style={linkStyle}>
          <h3>Delete</h3>
        </Link>
      </div>
    </div>
  );
}

export default HeaderPage;
