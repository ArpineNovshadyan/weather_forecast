import { WEEK_DAY_KEY } from './types';



export const handleFullInfo = function (index) {
    //console.log('actionn', index)
    return {
        type: WEEK_DAY_KEY,
        index: index
    }
}