import React, { useContext, useState } from 'react';
import ApiContext from '../../contexts/ApiContext';
import { useForm } from '../../hooks/useForm';
import './AddRestaurant.css';

export default function AddRestaurant() {
  const { addRestaurants } = useContext(ApiContext);
  const [ error, setError ] = useState(null);
  const initialState = { restaurant_name: '', street_address: '', city_address: '', zipcode: '', cuisine_type: '' };

  const goBack = () => {
    window.history.back()
  };

  const addNewRestaurant = async () => {
    try {
      await addRestaurants({ ...values });
      goBack();
    } catch(error) {
      setError(error.error);
    }
  };

  const [ values, handleChange, handleSubmit ] = useForm(initialState, addNewRestaurant);

  return (
    <div className='addRestaurantContainer'>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>New Restaurant</h2>
        </div>
        <div>
          <input
            placeholder='Restaurant Name'
            type="text" 
            id='add_restaurant_name'
            name='restaurant_name'
            value={values.restaurant_name}
            onChange={handleChange}
            required />
        </div>
        <div>
          <input 
            placeholder='Address'
            type="text" 
            id='add_restaurant_street_address'
            name='street_address'
            value={values.street_address}
            onChange={handleChange}
            required />
        </div>
        <div>
          <input 
            placeholder='City, State'
            type="text" 
            id='add_restaurant_state_address'
            name='state_address'
            value={values.state_address}
            onChange={handleChange}
            required />
        </div>
        <div>
          <input 
            placeholder='Zipcode'
            type="integer" 
            id='add_restaurant_zipcode'
            name='zipcode'
            value={values.zipcode}
            onChange={handleChange}
            required />
        </div>
        <div>
          <input 
            placeholder='Cuisine Type ie. American, Italian'
            type="text" 
            id='add_restaurant_cuisine_type'
            name='cuisine_type'
            value={values.cuisine_type}
            onChange={handleChange}
            required />
        </div>
        {error && <span>{error}</span>}
        <div>
          <button type='submit'>Submit</button>
          <button onClick={goBack}>Cancel</button>
        </div>
      </form>
    </div>
  )
};