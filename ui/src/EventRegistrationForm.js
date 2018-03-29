import React from 'react';
import {translate} from 'react-i18next';
import Client from "./Client"

class EventRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      eventName: null,
      message: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      eventName: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {t} = this.props;
    this.setState({
      message: t('Loading...')
    });
    Client.postEvent(
      {name: this.state.eventName},
      event => {
        this.setState({
          message: t('Created') + ': ' + event.id
        })
      }
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
        <div>{this.state.eventName}</div>
        <div>{this.state.message}</div>
      </form>
    );
  }
}

export default translate('translations')(EventRegistrationForm);
