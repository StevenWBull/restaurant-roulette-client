import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ValidationContext from '../../contexts/ValidationContext';
import { TokenService } from '../../services/token-service';
import './Header.css';

export default function Header() {
  const [ onlineUser, setOnlineUser ] = useContext(ValidationContext);
  const [ animateMenu, setAnimateMenu ] = useState(false)

  const logoutUser = () => {
    TokenService.clearAuthToken();
    setAnimateMenu(false);
    setOnlineUser();
  }

  const animateHamburgerMenu = (ev) => {
    setAnimateMenu(!animateMenu);
  }

  return (
    <div className='headerContainer'>
      <div>
        <Link to='/'className='headerLink'><h2>Restaurant Roulette</h2></Link>
      </div>
      { onlineUser ?
      <div className='user__logout'>
          <div className={ !animateMenu ? 'container' : 'container change'} onClick={animateHamburgerMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          { animateMenu &&
          <div className='dropdownContent'>
            <Link to='/' className='logout_user_link'>
              <span onClick={logoutUser}>Logout</span>
            </Link>
          </div>} 
      </div> : null}
    </div>
  );
}