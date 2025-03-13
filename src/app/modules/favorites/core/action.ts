import {useAppDispatch, useAppSelector} from "../../../redux/hooks/reduxHook";
import {QuoteModel} from "../../quote/core/model";
import {addFavorite, setSavedLoading} from "./reducer";

const useFavorites = () => {
    const {loadingSaved, favoriteSaved} = useAppSelector(state => state.favorites);
    const dispatch = useAppDispatch();

    const handleSaveFavorite = (quote: QuoteModel) => {
        // Check if already loading
        if (loadingSaved) return;

        // Set loading state
        dispatch(setSavedLoading(true));

        // Simulate async operation (you can remove this in production)
        setTimeout(() => {
            // Add to favorites
            dispatch(addFavorite(quote));

            // Reset loading state
            dispatch(setSavedLoading(false));
        }, 500); // Small delay for UI feedback
    };

    // Check if a quote is already saved to favorites
    const isQuoteSaved = (quoteId: string): boolean => {
        return favoriteSaved.some(quote => quote._id === quoteId);
    };

    return {
        handleSaveFavorite,
        isQuoteSaved,
        favoriteSaved,
        loadingSaved,
    }
}

export default useFavorites;