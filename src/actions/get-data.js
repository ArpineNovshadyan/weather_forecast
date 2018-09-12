import { FETCH_POSTS } from './types';
import NetworkService from './../core/network-service/networkService';
import AppConstants from './../core/settings/constants';
import AppConfigs from './../core/settings/configs';

export const fetchData = (city) => dispatch => {
    dispatch({
         type: FETCH_POSTS,
         loading: true,
         days_list: {}
    })
    NetworkService.makeAPIGetRequest(`${AppConfigs.OPENWEATHERMAP_URL}/data/2.5/forecast/daily?q=${city}&cnt=${AppConstants.OPENWEATHERMAP_DAYS_COUNT}&units=imperial&APPID=${AppConstants.OPENWEATHERMAP_KEY}`)
        .then(response => dispatch({
            type: FETCH_POSTS,
            days_list: response,
            loading: false
        })
        ).catch(err => {
            console.log(err);
            dispatch({
                type: FETCH_POSTS,
                loading: true
           })
        })
}
