


import React from 'react';
import './Header.css';
import NavBAr from '../NavBar/NavBar';



const Header = () => {
  

  
  return (
    <header>
      <NavBAr/>
    </header>
  );
};


const styles = {
  header: {

    color: '#fff',
    padding: '1rem',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    minHeight: '50px', 
  },
  h1: {
    margin: 0,
    fontSize: '32px',
  },
};

export default Header


