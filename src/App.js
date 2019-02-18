import React, { Component, Fragment } from 'react';
//import { useTransition, animated } from 'react-spring';

import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import './App.css';
import User from './User';
import UserProvider from './UserProvider';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <span>Header...</span>
          </header>
          <User />          
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Popup</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still in modal...</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}


/*
<section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={() => setShow(!show)}>Popup</button>
                  <Header />
                </Fragment>
              )}
            </Toggle>
          </section>

const [show, setShow] = useState(true);

function Header() {  
  const transitions = useTransition(show, null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });

  return transitions.map(({props}) =>
    <animated.div style={props}>Show me.....</animated.div>
  );
};*/

export default App;
