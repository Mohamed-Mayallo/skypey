import { createStore } from 'redux';
import reducer from '../reducers/contacts';

let store = createStore(reducer);

export default store;
