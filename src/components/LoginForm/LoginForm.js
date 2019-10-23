import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import ApiContext from '../../contexts/ApiContext';
import './LoginForm.css';
import ValidationContext from '../../contexts/ValidationContext';

export default function LoginForm() {
  const [ error, setError ] = useState(null);
  const [ onlineUser, setOnlineUser ] = useContext(ValidationContext);
  const { postLogin } = useContext(ApiContext);
  const initialState = { user_name: '', password: '' };

  const login = async () => {
    try {
      await postLogin({ ...values })
      setOnlineUser();
    } catch (error) {
      setError(error.error);
    }
  };

  const [ values, handleChange, handleSubmit ] = useForm(initialState, login);

  return (
    <div className='loginContainer'>
      {onlineUser ? <Redirect to='/home' /> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Please Sign In</h2>
        </div>
        <div>
          <input 
            placeholder='Username'
            type="text"
            id='login_user_name' 
            name='user_name'
            value={values.user_name || ''}
            onChange={handleChange} />
        </div>
        <div>
          <input
            placeholder='Password'
            type="password" 
            id='login_password' 
            name='password' 
            value={values.password} 
            onChange={handleChange} />
        </div>
        { error && <span>{error}</span>}
        <div>
          <button type='submit' className='loginButton'>Login</button>
        </div>
        <div>
          <p className='userRedirect'>Don't have an account? <Link to='/register'>Sign up</Link></p>
        </div>
      </form>
    </div>
  )
}