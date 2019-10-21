import config from '../config';
import { TokenService } from './token-service';

export const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then( res => {
      return (!res.ok) 
        ? res.json().then( e => Promise.reject(e))
        : res.json().then(res => TokenService.saveAuthToken(res.authToken));
    })
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then( res => {
      return (!res.ok)
        ? res.json().then( e => Promise.reject(e))
        : res.json();
    })
  },
  getRestaurants() {
    return fetch(`${config.API_ENDPOINT}/restaurants`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then( res => {
      return (!res.ok)
        ? res.json().then( e => Promise.reject(e))
        : res.json();
    })
  },
  getRandomRestaurants() {
    return fetch(`${config.API_ENDPOINT}/random-restaurants`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then( res => {
      return (!res.ok)
        ? res.json().then( e => Promise.reject(e))
        : res.json();
    })
  },
  addRestaurants(restaurant) {
    return fetch(`${config.API_ENDPOINT}/restaurants`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(restaurant)
    })
    .then( res => {
      return (!res.ok)
        ? res.json().then( e => Promise.reject(e))
        : res.json();
    })
  },
  editRestaurants(restaurantId, updatedRestaurantData) {
    return fetch(`${config.API_ENDPOINT}/restaurants/${restaurantId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedRestaurantData)
    })
    .catch(error => Promise.reject(error));
  },
  deleteRestaurants(restaurantId) {
    return fetch(`${config.API_ENDPOINT}/restaurants/${restaurantId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .catch(error => Promise.reject(error));
  }
}
