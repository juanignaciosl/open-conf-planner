import React, {Component} from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {translate} from 'react-i18next';

import EventRegistrationForm from './EventRegistrationForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <EventRegistrationForm/>
        </div>
      </Router>
    );
  }
}

export default translate('translations')(App);

