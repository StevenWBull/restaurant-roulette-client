import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import ApiContext from '../../contexts/ApiContext';
import './LoginForm.css';

export default function LoginForm() {
  const [ error, setError ] = useState(null);
  const [ loggedIn, setLoggedIn ] = useState(false);
  const { postLogin } = useContext(ApiContext);
  const initialState = { user_name: '', password: '' };

  const login = async () => {
    try {
      console.log({ ...values })
      await postLogin({ ...values })
      setLoggedIn(!loggedIn);
    } catch (error) {
      setError(error);
      console.log(error)
    }
  };

  const [ values, handleChange, handleSubmit ] = useForm(initialState, login);

  console.log(values.user_name, values.password)
  return (
    <div>
      {loggedIn ? <Redirect to='/home' /> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Please Sign In</h2>
        </div>
        <div>
          <label htmlFor='login_user_name'>Username: </label>
          <input 
            type="text"
            id='login_user_name' 
            name='user_name'
            value={values.user_name || ''}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='login_password'>Password: </label>
          <input 
            type="password" 
            id='login_password' 
            name='password' 
            value={values.password} 
            onChange={handleChange} />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}