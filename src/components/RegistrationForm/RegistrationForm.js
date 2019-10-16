import React from 'react';

export default function RegistrationForm() {
  return (
    <div>
      <form>
        <div>
          <h2>Sign Up!</h2>
        </div>
        <div>
          <label htmlFor='register_full_name'>Full Name: </label>
          <input type="text" id='register_full_name' />
        </div>
        <div>
          <label htmlFor='register_user_name'>Username: </label>
          <input type="text" id='register_user_name' />
        </div>
        <div>
          <label htmlFor='register_password'>Password: </label>
          <input type="password" id='register_password' />
        </div>
        <div>
          <label htmlFor='retype_register_password'>Re-enter Password: </label>
          <input type="password" id='retype_register_password' />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}