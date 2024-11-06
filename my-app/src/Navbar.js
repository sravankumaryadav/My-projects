import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/dashboard'><li>Dashboard</li></Link>
        <Link to='/postjob'><li>PostJob</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;


