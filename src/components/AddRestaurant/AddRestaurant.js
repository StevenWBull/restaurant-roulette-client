import React, { useContext, useState } from 'react';
import ApiContext from '../../contexts/ApiContext';
import { useForm } from '../../hooks/useForm';

export default function AddRestaurant() {
  const { addRestaurants } = useContext(ApiContext);
  const [ error, setError ] = useState(null);
  const initialState = { restaurant_name: '', street_address: '', city_address: '', zipcode: '', cuisine_type: '' };

  const goBack = () => {
    window.history.back()
  };

  const addNewRestaurant = async () => {
    try {
      console.log({ ...values });
      await addRestaurants({ ...values });
      goBack();
    } catch(error) {
      setError(error.error);
    }
  };

  const [ values, handleChange, handleSubmit ] = useForm(initialState, addNewRestaurant);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Add New Restaurant</h2>
        </div>
        <div>
          <label htmlFor='add_restaurant_name'>Restaurant Name: </label>
          <input 
            type="text" 
            id='add_restaurant_name'
            name='restaurant_name'
            value={values.restaurant_name}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='add_restaurant_street_address'>Street Address: </label>
          <input 
            type="text" 
            id='add_restaurant_street_address'
            name='street_address'
            value={values.street_address}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='add_restaurant_state_address'>City/State: </label>
          <input 
            type="text" 
            id='add_restaurant_state_address'
            name='state_address'
            value={values.state_address}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='add_restaurant_zipcode'>Zipcode: </label>
          <input 
            type="integer" 
            id='add_restaurant_zipcode'
            name='zipcode'
            value={values.zipcode}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='add_restaurant_cuisine_type'>Cuisine Type: </label>
          <input 
            type="text" 
            id='add_restaurant_cuisine_type'
            name='cuisine_type'
            value={values.cuisine_type}
            onChange={handleChange} />
        </div>
        {error && <span>{error}</span>}
        <div>
          <button type='submit'>Submit</button>
          <button onClick={goBack}>Go Back</button>
        </div>
      </form>
    </div>
  )
};