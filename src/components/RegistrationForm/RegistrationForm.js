import React, { useContext, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import ApiContext from '../../contexts/ApiContext';
import './RegistrationForm.css';

export default function RegistrationForm() {
  const { postUser } = useContext(ApiContext);
  const initialState = { full_name: '', user_name: '', password: '', retypePassword: '' };

  const register = () => {
    console.log({ ...values })
    postUser({ ...values })
  };
  const [ values, handleChange, handleSubmit ] = useForm(initialState, register);

  console.log(values.full_name, values.user_name, values.password, values.retypePassword )
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Sign Up!</h2>
        </div>
        <div>
          <label htmlFor='register_full_name'>Full Name: </label>
          <input 
            type="text" 
            id='register_full_name'
            name='full_name'
            value={values.full_name}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='register_user_name'>Username: </label>
          <input 
            type="text" 
            id='register_user_name'
            name='user_name'
            value={values.user_name}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='register_password'>Password: </label>
          <input 
            type="password" 
            id='register_password'
            name='password'
            value={values.password}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='retype_register_password'>Re-enter Password: </label>
          <input 
            type="password" 
            id='retype_register_password'
            name='retypePassword'
            value={values.retypePassword}
            onChange={handleChange} />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}