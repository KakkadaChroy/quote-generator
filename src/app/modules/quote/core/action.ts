import {reqQuoteGenerator} from "./request";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/reduxHook";
import {setError, setLoading, setQuoteList} from "./reducer";

const useQuote = () => {
    // selected init state from reducer
    const {
        quoteList,
        currentQuote,
        isCopyQuote,
        isCopyCurrentQuote,
        error,
        loading
    } = useAppSelector(state => state.quote);
    const dispatch = useAppDispatch();


    // fetch quote generator
    const fetchQuoteGenerator = async () => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        return await reqQuoteGenerator()
            .then((res) => {
                dispatch(setQuoteList(res));
                dispatch(setLoading(false));
            })
            .catch(err => {
                dispatch(setLoading(false));
                const errorMessage =
                    err.response?.data?.message ||
                    err.message ||
                    "Something went wrong!";

                dispatch(setError(errorMessage));
                return errorMessage;
            })
    }


    return {
        quoteList,
        currentQuote,
        isCopyQuote,
        isCopyCurrentQuote,

        loading,
        error,
        dispatch,

        fetchQuoteGenerator,
    }
}

export default useQuote;