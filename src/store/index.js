import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/index';
import { loadState } from './../local-storage/index';
 
const initialState = loadState()

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState,
    compose(
    applyMiddleware(...middleware),
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store ;