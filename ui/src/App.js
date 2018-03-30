import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {translate} from 'react-i18next';

import EventRegistrationForm from './EventRegistrationForm';
import EventConfigurationForm from './EventConfigurationForm'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={EventRegistrationForm} />
          <Route path='/events/:id/admin' component={EventConfigurationForm} />
        </div>
      </Router>
    );
  }
}

export default translate('translations')(App);

