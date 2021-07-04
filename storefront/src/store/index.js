import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import categories from './categories';

let reducers=combineReducers({categories:categories});

let store =()=>{
    return createStore(reducers,composeWithDevTools());
}

export default store();