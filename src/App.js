import React, { Component } from 'react';
import Topnavigation from './Top_navigation.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-lg-12">
          <header className="App-header">
          <Topnavigation />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
