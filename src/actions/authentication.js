import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import catchError from './action-creator';

export const registerUser = (user, history) => (dispatch) => {
  axios.post('/api/users/register', user)
    .then((res) => history.push('/login'))
    .catch((err) => {
      dispatch(catchError(GET_ERRORS, err));
    });
};


export const setCurrentUser = decoded => (
  {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
);

export const loginUser = user => (dispatch) => {
  axios.post('/api/users/login', user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch(catchError(GET_ERRORS, err));
    });
};


export const logoutUser = history => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/login');
};
