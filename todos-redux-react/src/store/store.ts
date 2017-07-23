import {createStore, combineReducers} from 'redux'
import todoReducers from '../reducers/TodoReducer'

const rootReducer = combineReducers({
  todoReducers
});

export default createStore(rootReducer, {})
