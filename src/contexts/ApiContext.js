import React from 'react';

export default React.createContext({
  user_name: [],
  full_name: [],
  password: [],
  restaurants: [],
  addUser: () => {},
  deleteUser: () => {},
  addRestaurant: () => {},
  deleteRestaurant: () => {}
})