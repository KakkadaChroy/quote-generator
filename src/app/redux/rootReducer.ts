import {combineReducers} from "@reduxjs/toolkit";


// init module
import quoteReducer from '../modules/quote/core/reducer';
import favoritesReducer from '../modules/favorites/core/reducer';


const rootReducer = combineReducers({
    quote: quoteReducer,
    favorites: favoritesReducer,
})


export default rootReducer;