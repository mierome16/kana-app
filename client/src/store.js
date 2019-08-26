import { createStore, combineReducers } from 'redux'

import {reducer as authReducer } from "./reducers/auth.reducers";

import { authreducer } from "./reducers/auth.reducers";


const rootReducer = combineReducers({
  authreducer: authreducer
});

const store = createStore(rootReducer)

export default store




