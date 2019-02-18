import React, { Component } from 'react'
import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <div>
            <h1>User Info</h1>
            <h3>{context.user.name}</h3>
            <h4>{context.user.email}</h4>
            {context.user.isLoggedin &&
              < button onClick={context.logout}>Logout</button>
            }
            {!context.user.isLoggedin &&
              <button onClick={context.login}>Login</button>
            }
          </div>
        )
        }
      </UserContext.Consumer>
    )
  }
}
