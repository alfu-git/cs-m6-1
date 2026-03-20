import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className='nav-bg'>
      <section className='container'>
        <div className='nav-bar'>

          <div className='nav-left'>
            <h1>WordPlate</h1>
          </div>

          <div className='nav-middle'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Specials</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className='nav-right'>
            <p>
              <a className='sign-in' href="#">Sign In </a>
              <span>/</span>
              <a href="#">Register</a>
            </p>
          </div>
          
        </div>
      </section>
    </header>
  );
};

export default Navbar;