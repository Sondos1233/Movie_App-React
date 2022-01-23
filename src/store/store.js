import { createStore } from 'redux';
import favoritesReducer from './action/reducer/fav_reduce';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(favoritesReducer, composeWithDevTools());

export default store;