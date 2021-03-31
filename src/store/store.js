import { createStore } from 'redux';
import { clockReducer } from './reducers/clockReducer';

const store = createStore(
    clockReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;