/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../contexts/ApiContext';
import './UserHomeScreen.css';

export default function UserHomeScreen() {
  const [ cuisine, setCuisine ] = useState(null);
  const [ restaurants, setRestaurants ] = useState([]);
  const [ generateRandom, setGenerateRandom ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ deleteRest, setDeleteRest ] = useState(false);
  const { getRestaurants, deleteRestaurants, getRandomRestaurants } = useContext(ApiContext);
  
  useEffect( () => {
    if (!generateRandom) {
      const getData = async () => {
      const data = await getRestaurants()
      setRestaurants(data);
      setIsLoading(false);
      }
      getData();
    }
    return;
  }, [cuisine, deleteRest, generateRandom]);

  useEffect( () => {
    if (generateRandom) {
      const getRandomRestaurant = async () => {
        const randomData = await getRandomRestaurants();
        setRestaurants(randomData);
        setIsLoading(false);
      }
      getRandomRestaurant();
    }
    return;
  }, [generateRandom]);

  const handleDelete = ev => {
    deleteRestaurants(ev.target.value);
    setDeleteRest(true);
  }

  const handleRandomGenerate = () => {
    setGenerateRandom(!generateRandom)
  }

  return (
    <>
      <section>
        { !generateRandom && <Link to='/addrestaurant'>
          <button>Add Restaurant</button>
        </Link>}
        <button onClick={handleRandomGenerate}>{ !generateRandom ? 'Where am I eating?' : 'Thanks so much!' }</button>
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