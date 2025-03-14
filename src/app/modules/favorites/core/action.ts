import {useAppDispatch, useAppSelector} from "../../../redux/hooks/reduxHook";


const useFavorites = () => {
    // selected init state from reducer
    const {favoriteSaved} = useAppSelector(state => state.favorites);
    const dispatch = useAppDispatch();


    return {
        dispatch,
        favoriteSaved,
    }
}


export default useFavorites;