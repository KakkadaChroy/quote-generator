import useQuote from "../core/action";
import {useEffect} from "react";
import QuoteButton from "../../../../_quote-generator/helpers/components/quote/Button";
import QuoteCard from "../../../../_quote-generator/helpers/components/quote/Card";
import useFavorites from "../../favorites/core/action";
import CurrentQuoteDisplay from "./CurrentQuoteDisplay";
import QuoteTag from "../../../../_quote-generator/helpers/components/quote/Tag";
import {setCurrentQuote} from "../core/reducer";


const QuoteGenerator = () => {
    const {loadingSaved} = useFavorites();
    const {
        fetchQuoteGenerator,
        dispatch,
        loading,
        quoteList,
        currentQuote,
    } = useQuote();


    useEffect(() => {
        const fetchQuote = async () => {
            await fetchQuoteGenerator();
        }
        fetchQuote();
        // eslint-disable-next-line
    }, []);


    const handleGenerateQuote = async () => {
        if (loading) return;
        if (quoteList.length > 0) {
            dispatch(setCurrentQuote(quoteList[0]));
        }
        await fetchQuoteGenerator();
    }

    return (
        <div className={`w-full bg-gray-100 ${quoteList.length > 1 ? 'h-auto' : 'min-h-screen'}`}>
            <div className="md:container mx-auto flex flex-col items-center justify-center">
                <div className="md:max-w-2xl">
                    {/* Display the current quote */}
                    {quoteList?.length > 0 && (
                        <div className="flex-grow px-4 py-6 flex flex-col justify-center items-center">
                            {/* Tag Badge */}
                            <QuoteTag item={quoteList[0]}/>

                            {/* Quote Card */}
                            <QuoteCard
                                quoteItem={quoteList[0]}
                            />

                            {/* Buttons */}
                            <QuoteButton
                                handleClick={handleGenerateQuote}
                                loading={loading}
                                loadingSaved={loadingSaved}
                            />
                        </div>
                    )}

                    {/* Display previous quotes if available */}
                    {currentQuote && (
                        <div className="pb-20">
                            <CurrentQuoteDisplay
                                currentQuote={currentQuote}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuoteGenerator;