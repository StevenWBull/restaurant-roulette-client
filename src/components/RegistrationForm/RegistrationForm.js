import React, { useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import ApiContext from '../../contexts/ApiContext';
import './RegistrationForm.css';
import ValidationContext from '../../contexts/ValidationContext';

export default function RegistrationForm() {
  const [ error, setError ] = useState(null);
  const { postUser, postLogin } = useContext(ApiContext);
  const [ onlineUser, setOnlineUser ] = useContext(ValidationContext);
  const initialState = { full_name: '', user_name: '', password: '', retypePassword: '' };

  const register = async () => {
    try {
      if ( values.password !== values.retypePassword) {
        setError('Passwords don\'t match');
        return;
      }
      console.log({ ...values })
      await postUser({ ...values })

      //destructure initial values object to only send password and user_name for login
      const { full_name, retypePassword, ...loginValues } = { ...values};
      console.log(loginValues);
      await postLogin(loginValues);
      setOnlineUser();
    } catch (error) {
      setError(error.error)
    }
  };

  const [ values, handleChange, handleSubmit ] = useForm(initialState, register);

  console.log(values.full_name, values.user_name, values.password, values.retypePassword )
  return (
    <div className='registrationContainer'>
      { onlineUser && <Redirect to='/home' />}
      <form onSubmit={handleSubmit} className='registerForm'>
        <div>
          <h2>Sign Up!</h2>
        </div>
        <div>
          <input 
            placeholder="Full Name"
            type="text" 
            id='register_full_name'
            name='full_name'
            value={values.full_name}
            onChange={handleChange} />
        </div>
        <div>
          <input 
            placeholder='Username'
            type="text" 
            id='register_user_name'
            name='user_name'
            value={values.user_name}
            onChange={handleChange} />
        </div>
        <div>
          <input 
            placeholder="Password"
            type="password" 
            id='register_password'
            name='password'
            value={values.password}
            onChange={handleChange} />
        </div>
        <div>
          <input 
            placeholder="Confirm Password"
            type="password" 
            id='retype_register_password'
            name='retypePassword'
            value={values.retypePassword}
            onChange={handleChange} />
        </div>
        {error && <span>{error}</span>}
        <div>
          <button type='submit'>Sign-Up!</button>
        </div>
        <div>
          <p className='userRedirect'>Already have an account? <Link to='/login'>Sign in</Link>.</p>
        </div>
      </form>
    </div>
  )
}