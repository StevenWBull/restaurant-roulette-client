/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../contexts/ApiContext';

export default function UserHomeScreen() {
  const [ page, setPage ] = useState(1);
  const [ cuisine, setCuisine ] = useState(null);
  const [ restaurants, setRestaurants ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ deleteRest, setDeleteRest ] = useState(false);
  const { getRestaurants, deleteRestaurants } = useContext(ApiContext);
  
  useEffect( () => {
    const getData = async () => {
      const data = await getRestaurants()
      setRestaurants(data);
      setIsLoading(false);
    }
    getData();
  }, [page, cuisine, deleteRest]);

  const handleDelete = ev => {
    deleteRestaurants(ev.target.value);
    setDeleteRest(true);
  }

  return (
    <>
      <section>
        <Link to='/addrestaurant'>
          <button>Add Restaurant</button>
        </Link>
        <button>Where am I eating?</button>
      </section>
      <section>
        <ul>
          {restaurants.map( restaurant => (
            <li key={restaurant.id}>
              <h3>{restaurant.restaurant_name}</h3>
              <span>{restaurant.street_address} {restaurant.state_address} {restaurant.zipcode}</span>
              <br />
              <span>{restaurant.cuisine_type}</span>
              <br />
              <button onClick={handleDelete} value={restaurant.id}>Delete</button>
            </li>
          ))
        }
        </ul>
      </section>
    </>
  )
}