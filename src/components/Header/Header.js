import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ValidationContext from '../../contexts/ValidationContext';
import { TokenService } from '../../services/token-service';
import './Header.css';

export default function Header() {
  const [ onlineUser, setOnlineUser ] = useContext(ValidationContext);

  const logoutUser = () => {
    TokenService.clearAuthToken();
    setOnlineUser();
  }

  return (
    <div className='headerContainer'>
      <div>
        <Link to='/'className='headerLink'><h2>Restaurant Roulette</h2></Link>
      </div>
      { onlineUser ?
      <div className='user__logout'>
        <Link to='/'>
          <span onClick={logoutUser}>Logout</span>
        </Link>
      </div> : null}
    </div>
  );
}