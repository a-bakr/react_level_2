import React from 'react';
import logo from '../assets/images/logo-white.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__log-box'>
        <img src={logo} alt='Logo' className='header__logo' />
      </div>

      <div className='heading'>
        <h1 className='heading__primary'>
          <span className='heading__primary--main'>Outdoors</span>
          <span className='heading__primary--sub'>is where life happens</span>
        </h1>
        <a href='#' className='btn btn--white btn--animate'>
          discver out tours
        </a>
      </div>
    </header>
  );
};

export default Header;
