import { useState } from 'react';

export const useForm = (initialValues) => {
  const [ values, setValues ] = useState(initialValues);

  //can return an object or array
  return [ values, e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }];
}