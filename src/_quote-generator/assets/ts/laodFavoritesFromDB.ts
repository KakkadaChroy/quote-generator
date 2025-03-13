import { get } from "idb-keyval";
import {setSavedFavorites} from "../../../app/modules/favorites/core/reducer";
import {AppDispatch} from "../../../app/redux/store";

// load favorites from idb-keyval library
export const loadFavoritesFromDB = async (dispatch: AppDispatch) => {
    try {
        const storedFavorites = (await get("favorites")) || [];

        // Ensure valid array format
        if (!Array.isArray(storedFavorites)) {
            return dispatch(setSavedFavorites([]));
        }

        // Filter out bad entries
        dispatch(setSavedFavorites(storedFavorites.filter(q => q && q._id)));
    } catch (error) {
        console.error("Error loading favorites:", error);
    }
};


