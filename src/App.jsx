import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import store from './store';
import Register from './Register';
import Login from './Login';
import MainComponent from './mainComponent';
import AboutUser from './AboutUser';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser(push('/login')));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={MainComponent} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about-user" component={AboutUser} />
    </Router>
  </Provider>
);
export default App;
