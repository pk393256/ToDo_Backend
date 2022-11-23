import { legacy_createStore as createStore } from 'redux';
import { tokenReducer,authReducer } from './reducer';
import { combineReducers } from 'redux';
let reducer = combineReducers({
    authReducer,
    tokenReducer
})
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;