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
  addRestaurants() {
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
  deleteRestaurants() {
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
  }
}
