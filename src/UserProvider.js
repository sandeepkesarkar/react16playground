import React, { Component } from 'react'
import { UserContext } from './UserContext';

export default class UserProvider extends Component {
  state = {
    id: '111111',
    name: 'sandeep',
    email: 'sandeep@sandeep.com',
    isLoggedin: true
  }

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: '',
      isLoggedin: false
    });
  };

  login = () => {
    this.setState({
      id: '111111',
      name: 'sandeep',
      email: 'sandeep@sandeep.com',
      isLoggedin: true
    })
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout,
          login: this.login
        }}
      >
        {this.props.children}
      </UserContext.Provider >
    );
  };
}
