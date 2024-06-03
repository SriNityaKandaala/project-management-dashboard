// src/actions/authActions.js
import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', error });
  }
};

export const register = (user) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/register', user);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', error });
  }
};

export const logout = () => {
  return { type: 'LOGOUT' };
};
