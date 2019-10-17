import React from 'react';

export default React.createContext({
  postLogin: () => {},
  postUser: () => {},
  deleteUser: () => {},
  getRestaurants: () => {},
  addRestaurants: () => {},
  deleteRestaurants: () => {}
})