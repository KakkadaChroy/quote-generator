import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {QuoteModel} from "./model";

// slice model
interface QuoteReducerModel {
    quoteList: QuoteModel[];
    loading: boolean;
    error: string | null;
}

// init state
const initialState: QuoteReducerModel = {
    quoteList: [],
    loading: false,
    error: '',
}

// init slice
const quoteSlice = createSlice({
    name: "quote",
    initialState: initialState,
    reducers: {
        setQuoteList: (state, action: PayloadAction<QuoteModel[]>)=> {
            state.quoteList = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>)=> {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>)=> {
            state.error = action.payload;
        },
    }
})


export const {
    setQuoteList,
    setLoading,
    setError,
} = quoteSlice.actions;
export default quoteSlice.reducer;