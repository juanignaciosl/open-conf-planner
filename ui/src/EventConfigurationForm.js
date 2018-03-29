import React from 'react';
import {translate} from 'react-i18next';
import Client from "./Client";

class EventConfigurationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: props.event
    }
  }

  render() {
    return (
      <h2>{this.state.event.name}</h2>
    )
  }
}

export default translate('translations')(EventConfigurationForm)
