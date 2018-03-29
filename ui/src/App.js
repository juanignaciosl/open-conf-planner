import React, {Component} from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {translate} from 'react-i18next';

import EventRegistrationForm from './EventRegistrationForm';

import './App.css';

class App extends Component {
  render() {
    const {t} = this.props;
    return (
      <Router>
        <div className="App">
          <h1>{t('WhatsTheNameOfYourEvent?')}</h1>
          <EventRegistrationForm/>
        </div>
      </Router>
    );
  }
}

export default translate('translations')(App);

