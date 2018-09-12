import React, { Component } from 'react';

import AppConfigs from './../../core/settings/configs';

export default class SingleDay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div onClick={this.props.handleDayClick.bind(this, this.props.index)} className='row pointer border'>
        <p className='temp'>
          {this.props.min_temp} - {this.props.max_temp}
        </p>
        <img alt = 'img' className='ml-auto weather_icon' src={`${AppConfigs.OPENWEATHERMAP_URL}/img/w/${this.props.icon}.png`} />
      </div>
    );
  }
}





