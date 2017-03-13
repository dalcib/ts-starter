import * as React from 'react';
<<<<<<< HEAD
//import './../assets/App.css';

const logo = "require('./../public/logo.svg')";
=======
//require('../assets/App.css');

const logo = "require('../public/logo.svg')";
>>>>>>> 5a510f68fb6a681ee46b54a44b04f96c9f9290b3

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
