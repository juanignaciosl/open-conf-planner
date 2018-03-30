import React from 'react';
import {translate} from 'react-i18next';
// import Client from "./Client";

class EventConfigurationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: props.location.state ? props.location.state.event : null
    }
  }

  render() {
    const {t} = this.props;
    if(this.state.event) {
      return (
        <h2>{this.state.event.name}</h2>
      )
    } else {
      return (
        <span>{t('Loading...')}</span>
      )
    }

  }
}

export default translate('translations')(EventConfigurationForm)
