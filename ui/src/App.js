import React, {Component} from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {translate} from 'react-i18next';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;
    return (
      <Router>
        <div className="App">
          <h1>{t('WhatsTheNameOfYourEvent?')}</h1>
        </div>
      </Router>
    );
  }
}

export default translate('translations')(App);

