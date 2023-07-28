
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
    display: 'flex',
    alignItems: 'center',
    minHeight: '50px', // Use minHeight instead of height to allow the header to grow with content
  },
  h1: {
    margin: 0,
    fontSize: '32px',
  },
};

export default Header;