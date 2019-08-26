import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from "./reducers/form.reducer";

const rootReducer = combineReducers({
  orderForm: formReducer
});

const store = createStore(rootReducer)

export default store




