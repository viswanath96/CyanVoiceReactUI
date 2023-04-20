import {combineReducers} from 'redux';
import ApplicationReducer from './ApplicationReducer';

const rootReducer = combineReducers({
    application:ApplicationReducer,
})

export default rootReducer