import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ValidationContext from '../../contexts/ValidationContext';

export default function Header() {
  const { isUserOnline } = useContext(ValidationContext);

  const handleLogout = () => {

  }

  return (
    <>
      <div>
        <h2>Restaurant Roulette</h2>
      </div>
      { isUserOnline &&
      <div className='user__logout'>
        <h4>Welcome!</h4>
        <Link to='/'>
          <span onClick={handleLogout}>Logout</span>
        </Link>
      </div>}
    </>
  );
}