import React from 'react';
import logo from '../assets/chewbacca_wookie_icon.svg';

const Header = () => {
  return (
    <div className="hero bg-base-200 border-base-400 border-b-2">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Wookieleaks</h1>
          <img className="mx-auto" src={logo} alt="chewbacca" />
          <p className="py-6">Check out some info about your favorite Star Wars characters from the Star Wars API!</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
