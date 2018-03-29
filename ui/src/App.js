import React, {Component} from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Register your event!</h1>
        </div>
      </Router>
    );
  }
}
export default App;
