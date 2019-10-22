import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './MainPage.css';

export default function MainPage() {
  const [ register, setRegister ] = useState(false);
  const [ signIn, setSignIn ] = useState(false);

  const handleRegister = () => {
    setRegister(true);
  }

  const handleSignIn = () => {
    setSignIn(true);
  }

  return (
    <section className='landingPage'>
      { register && <Redirect to='/register' />}
      { signIn && <Redirect to='/login' />}
      <div className='landingPageHeader'>
        <div>
          <h1>Welcome!</h1>
        </div>
        <div>
          <button className='landingPageButton' onClick={handleRegister}>Sign Up</button>
          <button className='landingPageButton' onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
      <div className='landingPageDescriptions'>
        <div className='descBox'>
          <h3>What makes RR special?</h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        </div>
        <div className='descBox'>
          <h3>Why choose RR?</h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        </div>
        <div className='descBox'>
          <h3>Save your restaurants!</h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        </div>
      </div>
    </section>
  )
}