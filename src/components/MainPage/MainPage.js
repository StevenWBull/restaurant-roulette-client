import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { TokenService } from '../../services/token-service';
import './MainPage.css';

export default function MainPage() {
  const [ register, setRegister ] = useState(false);
  const [ signIn, setSignIn ] = useState(false);
  const [ userVisited, setUserVisited ] = useState(false);

  useEffect(() => {
    setUserVisited(TokenService.hasVisitedObj());
  }, [userVisited])

  const handleRegister = () => {
    setRegister(true);
  }

  const handleSignIn = () => {
    setSignIn(true);
  }

  const modalWindow = () => {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <h2 className='modal-header-title'>Welcome to Restaurant Roullette!</h2>
          </div>
          <div className="modal-body">
            <p>Hello! Restaurant Roullette was created to simplify the saving of favorite restaurants and to give people the power to randomly generate a restaurant out of that list!</p>
            <br />
            <p>Just think, no more:</p>
            <p>"Where do you want to eat, honey?" </p>
            <p>"I don't know, where do you want to eat?"</p>
            <br />
            <p>With just the click of a button, you will be able to answer that question with ease!</p>
            <br/>
            <p>To get started, either click out of this window to create an account and get started, or click the demo button to be logged into a community account to try out the app first!</p>
            <br /> 
            <p>If you have any questions or suggestions, please feel free to navigate to the bottom of the page and get in contact with me.</p>
            <br />
            <p>Thank you and happy eating!</p>
          </div>
          <div className='modal-footer'>
            <button>Demo</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className='landingPage'>
      { register && <Redirect to='/register' />}
      { signIn && <Redirect to='/login' />}
      { !userVisited && modalWindow()}
      <div className='landingPageHeader'>
        <div className='welcomeBox'>
          <div>
            <h1>Welcome!</h1>
          </div>
          <div>
            <button className='landingPageButton' onClick={handleRegister}>Sign Up</button>
            <button className='landingPageButton' onClick={handleSignIn}>Sign In</button>
          </div>
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