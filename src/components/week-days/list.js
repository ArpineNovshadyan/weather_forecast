import React, { Component } from 'react';
import './index.css';

import SingleDay from './single-day';

export default class List extends Component {
  
  render() {
    return (
      this.props.days_list.list.map((item, index) => {
        let date = new Date(item.dt * 1000);
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let datee = days[date.getDay()];
        return (
          <div key={'mykey' + index} className='col-md-3  '>
            <p className='week'>
              {datee}
            </p>
            <SingleDay
              days_list={this.props.days_list}
              min_temp={item.temp.min}
              max_temp={item.temp.max}
              icon={item.weather[0].icon}
              date={date}
              index={index}
              handleDayClick={this.props.handleDayClick}
            />
          </div>
        )
      })
    );
  }
}






