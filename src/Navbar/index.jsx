import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import logo from '../image/Logo.png';
import './style.scss';

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
                    <img src={user.avatar} alt={user.name} title={user.name}
                        style={{ width: '25px', marginRight: '5px'}} />
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

        return(
    <header>
     <div className="header_logo">
      <img src={logo} alt="header_logo1" />
     </div>
      <nav>
      <div id="navig" className="navigation">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Ingredients">Ingredients</a>
        <a href="#Menu">Menu</a>
        <a href="#Book">Book</a>
        <a href="#Rewiews">Rewiews</a>
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

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
