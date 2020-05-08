import { createStore, combineReducers } from 'redux';
import reducerTodos from './reducers';

const reducers = combineReducers({
  reducerTodos,
});

const store = createStore(reducers);

export default store;
