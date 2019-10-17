import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [ clicked, setClicked ] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      <div>
        <h2>Restaurant Roulette</h2>
      </div>
      { !clicked && 
      <div>
        <h4>Welcome!</h4>
        <div>
          <Link to='/register'><span onClick={handleClick}>Sign Up</span></Link>
          <span> | </span>
          <Link to='/login'><span onClick={handleClick}>Sign In</span></Link>
        </div>
      </div>}
      { clicked && 
      <div>
        <Link to='/'>
          <span onClick={handleClick}>Logout</span>
        </Link>
      </div>}
    </>
  );
}