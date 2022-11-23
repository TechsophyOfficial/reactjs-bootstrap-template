import { createStore } from 'redux';
import { loadingActionReducer } from './reducer';

export const store = createStore(loadingActionReducer);
