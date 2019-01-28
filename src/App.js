import React, { Component } from 'react';
import Toggle from './toggleRPC';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Toggle>
            {({ on, toggle }) => (
              <div>
                {on && <h1>Show me</h1>}
                <button onClick={toggle}>show / hide</button>
              </div>
            )}
          </Toggle>
        </header>
      </div>
    );
  }
}

export default App;
