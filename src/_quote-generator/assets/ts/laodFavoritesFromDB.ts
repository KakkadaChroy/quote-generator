import { get } from "idb-keyval";
import {setSavedFavorites} from "../../../app/modules/favorites/core/reducer";
import {AppDispatch} from "../../../app/redux/store";

// load favorites from idb-keyval library
export const loadFavoritesFromDB = async (dispatch: AppDispatch) => {
    const storedFavorites = (await get("favorites")) || [];
    dispatch(setSavedFavorites(storedFavorites));
};
