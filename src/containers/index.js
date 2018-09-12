import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './../components/week-days/index.css';
import { fetchData } from './../actions/get-data';
import { handleFullInfo } from './../actions/handle-full-info';
import CenterBox from './../components/week-days/center-box';

class Main extends Component {
    constructor(props) {
        super(props);
        this.city_list = ['London', 'Paris', 'Armenia', 'Germany']
    }

    componentDidMount() {

        if (!this.props.days_list.hasOwnProperty('list')) {
            var carrent_city = 'Paris'
        }
        else {
            carrent_city = this.props.days_list.city.name
        }
        this.props.fetchData(carrent_city);
    }
    handleDayClick = (index) => {
        this.index = index;
        this.props.handleFullInfo(index);
    }
    toggleDropDown = (index) => {
        this.props.fetchData(this.city_list[index])
    }
    render() {
        if (this.props.days_list.hasOwnProperty('list')) {
            let full_data = this.props.days_list.list[this.props.index];
            var night_temp = full_data.temp.night;
            var morn_temp = full_data.temp.morn;
            var icon = full_data.weather[0].icon;
            var main = full_data.weather[0].main;
            var desc = full_data.weather[0].description;
            var city = this.props.days_list.city.name
        }
        return (
            <div className='back'>
                {
                    this.props.loading ?
                        <div className='svg_position'>
                            <svg className="spinner "
                                width="65px"
                                height="65px"
                                viewBox="0 0 66 66"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle
                                    className="circle "
                                    fill="none"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    cx="33"
                                    cy="33"
                                    r="30">
                                </circle>
                            </svg>
                        </div> :
                        <CenterBox
                            days_list={this.props.days_list}
                            handleDayClick={this.handleDayClick}
                            toggleDropDown={this.toggleDropDown}
                            index={this.props.index}
                            night_temp={night_temp}
                            morn_temp={morn_temp}
                            city_list={this.city_list}
                            icon={icon}
                            main={main}
                            desc={desc}
                            city={city}
                        />
                }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    days_list: state.days_data.days_list,
    loading: state.days_data.loading,
    index: state.days_data.index,
    state: state
})
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchData: (city) => dispatch(fetchData(city)),
        handleFullInfo: (index) => dispatch(handleFullInfo(index)),
    })
}

Main.propTypes = {
    days_list: PropTypes.object,
    loading: PropTypes.bool,
    index: PropTypes.number
}
Main.defaultProps = {
    days_list: {},
    loading: true,
    index: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);




