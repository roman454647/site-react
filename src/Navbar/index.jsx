import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import logo from '../image/Logo.png';
import './style.scss';
import navbarElement from './navbarList';

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }
  render() {
        const {isAuthenticated, user} = this.props.auth;

        const authLinks = (
            <Fragment>
              <a href=""  onClick={this.onLogout.bind(this)}>
                 <img className='avatar' src={user.avatar} alt={user.name} title={user.name} />
                 Logout
              </a>
              <Link to='/about-user'>
                 {user.name}
              </Link>
            </Fragment>
        )

        const guestLinks = (
           <Fragment>
              <Link className="nav-link" to="/login">Sign in</Link>
              <Link className="nav-link" to="/register">Sign Up</Link>
          </Fragment>
      )

      const navbarElements =  navbarElement.map(element =>
        <a href ={element.page_name}>{element.name}</a>
  );

    return (
  <header>
      <div className="header-logo">
       <img src={logo} alt="header-logo" />
      </div>
      <nav>
       <div id="navig" className="navigation">
           {navbarElements}
           {isAuthenticated ? authLinks : guestLinks}
         </div>
       </nav>
   </header>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
