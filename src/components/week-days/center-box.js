import React, { Component } from 'react';

import './index.css';

import DaysList from './list';
import FullInfo from './full-info';
import DropDown from './drop-down';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className=''>
                < div className='container '>
                    <div className='row col-md-10 jumbotron  '>
                        <div className='col-md-9'>
                            <p className='city'>
                                {this.props.city}
                            </p>
                            <div className='row align-items-end'>
                                <DaysList
                                    days_list={this.props.days_list}
                                    //  loading={this.props.loading}
                                    handleDayClick={this.props.handleDayClick}
                                    city={this.props.city}

                                />
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <DropDown
                                city_list={this.props.city_list}
                                toggleDropDown={this.props.toggleDropDown}
                            />
                        </div>
                        <div className='col-md-12'>
                            <FullInfo
                                //  index={this.props.index}
                                night_temp={this.props.night_temp}
                                morn_temp={this.props.morn_temp}
                                icon={this.props.icon}
                                main={this.props.main}
                                desc={this.props.desc}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}






