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
    console.log(onlineUser);
  }

  return (
    <div className='headerContainer'>
      <div>
        <h2>Restaurant Roulette</h2>
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