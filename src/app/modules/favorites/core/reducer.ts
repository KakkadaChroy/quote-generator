import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {QuoteModel} from "../../quote/core/model";
import {set} from "idb-keyval";


// define model
interface FavoriteReducerModel {
    favoriteSaved: QuoteModel[];
    loadingSaved: boolean;
}

// init state
const initialState: FavoriteReducerModel = {
    favoriteSaved: [],
    loadingSaved: false,
}

// redux slice
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<QuoteModel>) => {
            if (!state.favoriteSaved.some(q => q._id === action.payload._id)) {
                state.favoriteSaved.push(action.payload);
                set("favorites", state.favoriteSaved); // Save to IndexedDB
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoriteSaved = state.favoriteSaved.filter(q => q._id !== action.payload);
            set("favorites", state.favoriteSaved); // Update IndexedDB
        },
        setSavedFavorites: (state, action: PayloadAction<QuoteModel[]>) => {
            state.favoriteSaved = action.payload;
        },
        setSavedLoading: (state, action: PayloadAction<boolean>) => {
            state.loadingSaved = action.payload;
        },
    }
})


export const {
    addFavorite,
    removeFavorite,
    setSavedFavorites,
    setSavedLoading
} = favoritesSlice.actions;
export default favoritesSlice.reducer;