import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { TokenService } from '../../services/token-service';
import ApiContext from '../../contexts/ApiContext';
import ValidationContext from '../../contexts/ValidationContext';
import config from '../../config';
import './MainPage.css';

export default function MainPage() {
  const [ register, setRegister ] = useState(false);
  const [ signIn, setSignIn ] = useState(false);
  const [ demoLogin, setDemoLogin ] = useState(false);
  const [ userVisited, setUserVisited ] = useState(false);
  const [ onlineUser, setOnlineUser ] = useContext(ValidationContext);
  const { postLogin } = useContext(ApiContext);

  useEffect(() => {
    setUserVisited(TokenService.hasVisitedObj());
  }, [userVisited])

  const handleRegister = () => {
    setRegister(true);
  }

  const handleSignIn = () => {
    setSignIn(true);
  }

  const handleDemoLogin = async () => {
    await postLogin(config.DEMO_LOGIN);
    setOnlineUser();
    setDemoLogin(true);
  }

  const closeModal = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  const modalWindow = () => {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={closeModal}>&times;</span>
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
            <p> -- Steven Bull</p>
          </div>
          <div className='modal-footer'>
            <button className='landingPageButton' onClick={handleDemoLogin}>Demo</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className='landingPage'>
      { demoLogin && <Redirect to='/home' />}
      { register && <Redirect to='/register' />}
      { signIn && <Redirect to='/login' />}
      { !userVisited && modalWindow()}
      <div className='landingPageHeader'>
        <div className='welcomeBox'>
          <div>
            <h1>Welcome!</h1>
          </div>
          { !onlineUser && 
          <div>
            <button className='landingPageButton' onClick={handleRegister}>Sign Up</button>
            <button className='landingPageButton' onClick={handleSignIn}>Sign In</button>
          </div>}
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