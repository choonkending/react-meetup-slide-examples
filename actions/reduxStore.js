import { createStore } from 'redux';
import rootReducer from '../reducers';

let store = createStore(rootReducer);

// do stuff with store