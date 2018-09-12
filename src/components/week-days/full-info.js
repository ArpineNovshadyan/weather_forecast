import React, { Component } from 'react';

import AppStrings from './../../core/settings/strings';
import AppConfigs from './../../core/settings/configs';

export default class FullInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='container-fluid border_full'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <span className='col-md-3 night_temp_text'>
                {AppStrings.NIGHT_TEMP}  - - - - - - - - -
              </span>
              <p className='col-md-4 night_temp_value'>
                {this.props.night_temp}
              </p>
            </div>
            <div className='row'>
              <span className='col-md-3 morninga_temp_text'>
                {AppStrings.MORNING_TEMP} - - - - - - -
              </span>
              <p className='col-md-4 morninga_temp_value'>
                {this.props.morn_temp}
              </p>
            </div>
            <div className='row'>
              <span className='col-md-3 morninga_temp_text'>
                {AppStrings.MAIN} - - - - - - -
              </span>
              <p className='col-md-4 morninga_temp_value'>
                {this.props.main}
              </p>
            </div>
            <div className='row'>
              <span className='col-md-3 morninga_temp_text'>
                {AppStrings.DESCRIPTION} - - - - - - -
              </span>
              <p className='col-md-4 morninga_temp_value'>
                {this.props.desc}
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <img alt='imgg' className=' ml-auto full_weather_icon' src={`${AppConfigs.OPENWEATHERMAP_URL}/img/w/${this.props.icon}.png`} />
          </div>
        </div>
      </div>

    );
  }
}





