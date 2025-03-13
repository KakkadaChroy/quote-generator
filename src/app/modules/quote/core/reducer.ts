import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {QuoteModel} from "./model";

// define model
interface QuoteReducerModel {
    quoteList: QuoteModel[];
    currentQuote: QuoteModel | null;
    isCopyQuote: string | null;
    isCopyCurrentQuote: string | null;
    loading: boolean;
    pageLoading: boolean;
    error: string | null;
}

// init state
const initialState: QuoteReducerModel = {
    quoteList: [],
    currentQuote: null,
    isCopyQuote: '',
    isCopyCurrentQuote: '',
    loading: false,
    pageLoading: false,
    error: '',
}

// redux slice
const quoteSlice = createSlice({
    name: "quote",
    initialState: initialState,
    reducers: {
        setQuoteList: (state, action: PayloadAction<QuoteModel[]>)=> {
            state.quoteList = action.payload;
        },
        setCurrentQuote: (state, action: PayloadAction<QuoteModel>) => {
            state.currentQuote = action.payload;
        },
        setIsCopyQuote: (state, action: PayloadAction<string>) => {
          state.isCopyQuote = action.payload;
        },
        setIsCopyCurrentQuote: (state, action: PayloadAction<string>) => {
          state.isCopyCurrentQuote = action.payload;
        },

        setLoading: (state, action: PayloadAction<boolean>)=> {
            state.loading = action.payload;
        },
        setPageLoading: (state, action: PayloadAction<boolean>) => {
            state.pageLoading = action.payload;
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
    setCurrentQuote,
    setIsCopyQuote,
    setIsCopyCurrentQuote,
    setPageLoading
} = quoteSlice.actions;
export default quoteSlice.reducer;