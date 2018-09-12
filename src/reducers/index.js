import {combineReducers} from 'redux';
import drawer from './get-data';

export default combineReducers( {
	days_data: drawer
})