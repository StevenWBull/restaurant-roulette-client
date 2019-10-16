import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

export default function LoginForm() {
  const [ values, handleChange ] = useForm({ user_name: '', password: '' });
  
  console.log(values.user_name, values.password)
  return (
    <div>
      <form action='submit'>
        <div>
          <h2>Please Sign In</h2>
        </div>
        <div>
          <label htmlFor='login_user_name'>Username: </label>
          <input 
            type="text" 
            id='login_user_name' 
            name='user_name'
            value={values.user_name}
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
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}