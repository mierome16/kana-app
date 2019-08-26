import { createStore, combineReducers } from 'redux'
import { authreducer } from "./reducers/auth.reducers";

const rootReducer = combineReducers({
  authreducer: authreducer
});

const store = createStore(rootReducer)

export default store




