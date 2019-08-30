import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';



class AboutUser extends Component{
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }
  render() {
        const { user} = this.props.auth;
  return(
      <div>
          <h1>HI, Here some information about you</h1>
          <h1>It is your name</h1>
           {user.name}
          <h1>It is your id</h1>
           {user.id}
          <div>
          <a href=""  onClick={this.onLogout.bind(this)}>Logout</a>
          </div>
      </div>

        )
    }
}
AboutUser.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(AboutUser));
