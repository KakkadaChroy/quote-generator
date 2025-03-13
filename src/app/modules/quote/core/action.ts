import {reqQuoteGenerator} from "./request";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/reduxHook";
import {setError, setLoading, setPageLoading, setQuoteList} from "./reducer";

const useQuote = () => {
    // selected init state from reducer
    const {
        quoteList,
        currentQuote,
        isCopyQuote,
        isCopyCurrentQuote,
        error,
        loading,
        pageLoading
    } = useAppSelector(state => state.quote);
    const dispatch = useAppDispatch();


    // fetch quote generator
    const fetchQuoteGenerator = async () => {
        dispatch(setPageLoading(true));
        dispatch(setLoading(true));
        dispatch(setError(null));
        return await reqQuoteGenerator()
            .then((res) => {
                dispatch(setQuoteList(res));
                dispatch(setLoading(false));
                dispatch(setPageLoading(false));
            })
            .catch(err => {
                dispatch(setLoading(false));
                dispatch(setPageLoading(false));
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
        pageLoading,

        fetchQuoteGenerator,
    }
}

export default useQuote;