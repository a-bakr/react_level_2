import React from 'react';
import logo from '../assets/images/logo-white.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='log-box'>
        <img src={logo} alt='Logo' height='35px' />
      </div>

      <div className='heading'>
        <h1 className='primary'>
          <span className='main'>Outdoors</span>
          <span className='sub'>is where life happens</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
