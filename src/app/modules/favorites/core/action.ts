import {useAppDispatch, useAppSelector} from "../../../redux/hooks/reduxHook";


const useFavorites = () => {
    const {loadingSaved, favoriteSaved} = useAppSelector(state => state.favorites);
    const dispatch = useAppDispatch();


    return {
        dispatch,
        favoriteSaved,
        loadingSaved,
    }
}


export default useFavorites;