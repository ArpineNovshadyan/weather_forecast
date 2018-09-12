
import { FETCH_POSTS, WEEK_DAY_KEY } from './../actions/types';


const initialState = {
    days_list: {},
    loading: true,
    index: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                days_list: action.days_list,
                loading: action.loading
            }
        case WEEK_DAY_KEY:
            return {
                ...state,
                index: action.index,
            }
        default:
            return state;
    }
}