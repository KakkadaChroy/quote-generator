import {combineReducers} from "@reduxjs/toolkit";

// init module
import quoteReducer from '../modules/quote/core/reducer';

const rootReducer = combineReducers({
    quote: quoteReducer,
})


export default rootReducer;