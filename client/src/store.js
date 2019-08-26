import { createStore, combineReducers } from 'redux'
import {reducer as authReducer } from "./reducers/auth.reducers";

const rootReducer = combineReducers({
  authReducer : authReducer
});

const store = createStore(rootReducer)

export default store




