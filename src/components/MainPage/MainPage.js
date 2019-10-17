import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

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
    <section>
      { register && <Redirect to='/register' />}
      { signIn && <Redirect to='/login' />}
      <div>
        <h1>Welcome to Restaurant Roulette!</h1>
      </div>
      <div>
        <button onClick={handleRegister}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </section>
  )
}