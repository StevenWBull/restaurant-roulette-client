import config from '../config'

export const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  saveVisitedObj() {
    const visitedObj = { visited: true };
    window.localStorage.setItem('visitedObj', JSON.stringify(visitedObj));
  },
  hasVisitedObj() {
    const hasVisited = window.localStorage.getItem('visitedObj');
    return !!hasVisited;
  }
}