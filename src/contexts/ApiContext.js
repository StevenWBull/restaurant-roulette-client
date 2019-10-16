import React from 'react';

export default React.createContext({
  user: [],
  restaurants: [],
  addUser: () => {},
  deleteUser: () => {},
  addRestaurant: () => {},
  editRestaurant: () => {},
  deleteRestaurant: () => {}
})