/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../contexts/ApiContext';
import './UserHomeScreen.css';
import { useForm } from '../../hooks/useForm';

export default function UserHomeScreen() {
  const [ error, setError ] = useState(null);
  const [ cuisine, setCuisine ] = useState(null);
  const [ restaurants, setRestaurants ] = useState([]);
  const [ generateRandom, setGenerateRandom ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ deleteRest, setDeleteRest ] = useState(false);
  const [ editMode, setEditMode ] = useState(-1);
  const { getRestaurants, deleteRestaurants, getRandomRestaurants, editRestaurants } = useContext(ApiContext);
  
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
  }, [cuisine, deleteRest, generateRandom, editMode]);

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
  }, [generateRandom, deleteRest]);

  const handleDelete = ev => {
    deleteRestaurants(ev.target.value);
    setGenerateRandom(false);
    setDeleteRest(true);
  }

  const handleRandomGenerate = () => {
    setGenerateRandom(!!generateRandom);
    setGenerateRandom(!generateRandom);
  }

  const handleReRandomGenerate = () => {
    let count = Math.random() * 20;
    count++;
    setGenerateRandom(count);
  }

  const handleEdit = (ev) => {
    setEditMode(Number(ev.target.value));
  }

  const cancelEditMode = () => {
    setEditMode(-1);
  }

  const updateRestaurant = async () => {
    try {
      await editRestaurants(editMode, { ...values });
      setEditMode(-1);
    } catch(error) {
      setError(error.error);
    }
  }

  const initialState = { restaurant_name: '', street_address: '', city_address: '', zipcode: '', cuisine_type: '' };
  const [ values, handleChange, handleSubmit ] = useForm(initialState, updateRestaurant);

  const renderPageView = () => {
    return (
      <ul>
          {restaurants.map( restaurant => (
            editMode !== restaurant.id
              ?
              <li key={restaurant.id}>
                <h3 className='restaurantName'>{restaurant.restaurant_name}</h3>
                <span>{restaurant.street_address} 
                <br />
                {restaurant.state_address} {restaurant.zipcode}</span>
                <br />
                <span>{restaurant.cuisine_type}</span>
                <br />
                <div className='restuarantControlButtons'>
                  <button value={restaurant.id} onClick={handleEdit}>Edit</button>
                  <button value={restaurant.id} onClick={handleDelete}>Delete</button>
                </div>              
              </li>
              :
              <div className='editRestaurantContainer'>
                <form onSubmit={handleSubmit} key={restaurant.id}>
                  <div>
                    <input 
                      type="text" 
                      id='add_restaurant_name'
                      name='restaurant_name'
                      defaultValue={restaurant.restaurant_name}
                      onChange={handleChange} />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      id='add_restaurant_street_address'
                      name='street_address'
                      defaultValue={restaurant.street_address}
                      onChange={handleChange} />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      id='add_restaurant_state_address'
                      name='state_address'
                      defaultValue={restaurant.state_address}
                      onChange={handleChange} />
                  </div>
                  <div>
                    <input 
                      type="integer" 
                      id='add_restaurant_zipcode'
                      name='zipcode'
                      defaultValue={restaurant.zipcode}
                      onChange={handleChange} />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      id='add_restaurant_cuisine_type'
                      name='cuisine_type'
                      defaultValue={restaurant.cuisine_type}
                      onChange={handleChange} />
                  </div>
                  {error && <span>{error}</span>}
                  <div className='restuarantControlButtons'>
                    <button type='submit'>Submit</button>
                    <button onClick={cancelEditMode}>Cancel</button>
                  </div>
                </form>
              </div>
          ))
        }
        </ul>
    )
  }

  return (
    <>
      <section className='userHomeScreenButtons'>
        { !generateRandom && <Link to='/addrestaurant'>
          <button className='mainButtons'>Add Restaurant</button>
        </Link>}
        <button onClick={handleRandomGenerate} className='mainButtons'>{ !generateRandom ? 'Where am I eating?' : 'Thanks so much!' }</button>
        { generateRandom && <button onClick={handleReRandomGenerate} className='mainButtons'>Hmm. Not there.</button>}
      </section>
      <section className='userHomeScreenContainer'>
        {renderPageView()}
      </section>
    </>
  )
}