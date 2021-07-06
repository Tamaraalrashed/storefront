import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const reducers=combineReducers({categoriesReducer,productsReducer,cartReducer});

const store =()=>{
    return createStore(reducers,composedEnhancer);
}

export default store();