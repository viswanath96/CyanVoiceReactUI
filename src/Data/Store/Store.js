import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {ApplicationReducer} from '../Reducer/ApplicationReducer';

export const store = createStore(
    ApplicationReducer,
    compose(
        applyMiddleware(thunk)
    )
)

//console.log('Initial State: ', store.getState())