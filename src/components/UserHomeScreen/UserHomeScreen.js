/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import ApiContext from '../../contexts/ApiContext';

export default function UserHomeScreen() {
  const [ page, setPage ] = useState(1);
  const [ cuisine, setCuisine ] = useState(null);
  const [ restaurants, setRestaurants ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const { getRestaurants } = useContext(ApiContext)
  
  useEffect( () => {
    const getData = async () => {
      const data = await getRestaurants()
      setRestaurants(data);
      setIsLoading(false);
    }
    getData();
}, [page, cuisine])

  return (
    <section>
      <ul>
        {restaurants.map( restaurant => (
          <li key={restaurant.id}>
            <h3>{restaurant.restaurant_name}</h3>
            <span>{restaurant.street_address} {restaurant.state_address} {restaurant.zipcode}</span>
            <br />
            <span>{restaurant.cuisine_type}</span>
          </li>
        ))
       }
      </ul>
    </section>
  )
}