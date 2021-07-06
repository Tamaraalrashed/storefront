import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

let reducers=combineReducers({categoriesReducer,productsReducer,cartReducer});

let store =()=>{
    return createStore(reducers,composeWithDevTools());
}

export default store();