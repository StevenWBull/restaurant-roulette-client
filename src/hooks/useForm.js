import { useState } from 'react';

export const useForm = (initialState, callback) => {
  const [ values, setValues ] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    callback();
  }

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
 
  return [ 
    values, 
    handleChange, 
    handleSubmit ];
}