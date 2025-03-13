import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {QuoteModel} from "../../quote/core/model";
import {set} from "idb-keyval";


// define model
interface FavoriteReducerModel {
    favoriteSaved: QuoteModel[];
    loadingSaved: boolean;
    isFavorite: boolean;
}


// init state
const initialState: FavoriteReducerModel = {
    favoriteSaved: [],
    loadingSaved: false,
    isFavorite: false,
}


// redux slice
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<QuoteModel>) => {
            if (!action.payload || !action.payload._id) return;

            if (!state.favoriteSaved.some(q => q._id === action.payload._id)) {
                state.favoriteSaved.push(action.payload);
                set("favorites", JSON.parse(JSON.stringify(state.favoriteSaved)))
                    .catch(err => console.error("IndexedDB save error:", err));
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoriteSaved = state.favoriteSaved.filter(q => q._id !== action.payload);
            set("favorites", JSON.parse(JSON.stringify(state.favoriteSaved)))
                .catch(err => console.error("IndexedDB update error:", err));
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
    setSavedLoading,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;