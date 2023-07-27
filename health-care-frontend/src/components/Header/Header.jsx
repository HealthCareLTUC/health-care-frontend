
import React from 'react';
import './Header.css';





const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <h1 style={styles.h1}>Health Care</h1>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#C4DFDF',
    color: '#fff',
    padding: '1rem',
    textAlign: 'left',
    fontSize: '1px', 
    height: '80px',
    position: 'relative',
  },
  nav: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    height: '100px', 
    width: '100%', 
  },
  h1: {
    margin: 0,
    fontSize: '32px',
    position: 'absolute',
    top: '50%',
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
  },
};

export default Header;