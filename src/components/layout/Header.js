import React from 'react';
import{ Link } from 'react-router-dom';

  function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDo List</h1>
      <Link style={LinkStyle} to="/"> Home</Link> | <Link style={LinkStyle} to ="/about">About</Link>
    </header>
  )
}

export default Header

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const LinkStyle = {
  color: '#fff',
  textDecoration: 'none'
}