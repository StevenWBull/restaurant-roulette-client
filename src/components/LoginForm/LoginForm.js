import React from 'react';
import { useForm } from '../../hooks/useForm';

export default function LoginForm() {
  const [ values, handleChange ] = useForm({ user_name: '', password: '' })

  return (
    <div>
      <form>
        <div>
          <h2>Please Sign In</h2>
        </div>
        <div>
          <label htmlFor='login_user_name'>Username: </label>
          <input type="text" id='login_user_name' />
        </div>
        <div>
          <label htmlFor='login_password'>Password: </label>
          <input type="password" id='login_password' />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}