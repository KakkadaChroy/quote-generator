import useQuote from "../core/action";
import {useEffect} from "react";
import QuoteButton from "../../../../_quote-generator/helpers/components/quote/Button";
import QuoteCard from "../../../../_quote-generator/helpers/components/quote/Card";
import PreviousQuoteDisplay from "./PreviousQuoteDisplay";
import QuoteTag from "../../../../_quote-generator/helpers/components/quote/Tag";
import {setCurrentQuote} from "../core/reducer";
import QuoteTitle from "../../../../_quote-generator/helpers/components/quote/QuoteTitle";
import {CompleteQuoteSkeleton} from "../../../../_quote-generator/helpers/ui/RenderLoadingSkeleton";
import QuoteError from "../../../../_quote-generator/helpers/ui/ErrorHandling";


const QuoteGenerator = () => {
    // custom hook
    const {
        fetchQuoteGenerator,
        dispatch,
        loading,
        quoteList,
        currentQuote,
        error
    } = useQuote();


    // fetching quote
    useEffect(() => {
        if (process.env.NODE_ENV === "test") return; // testing
        const fetchQuote = async () => {
            await fetchQuoteGenerator();
        };
        fetchQuote();
        // eslint-disable-next-line
    }, []);


    // handle quote generator
    const handleGenerateQuote = async () => {
        if (loading) return;
        if (quoteList.length > 0) {
            dispatch(setCurrentQuote(quoteList[0]));
        }
        await fetchQuoteGenerator();
    }


    // render skeleton loading & error handling
    if (error) return <QuoteError error={error} onRetry={handleGenerateQuote}/>;
    if (quoteList.length === 0) return <CompleteQuoteSkeleton/>;


    return (
        <div className={`bg-gray-100 dark:bg-primary ${quoteList.length > 1 ? 'h-auto' : 'min-h-screen'}`}>
            <div className="min-h-[80vh] md:container mx-auto flex flex-col items-center justify-center">
                <div className="w-full max-w-3xl min-w-2xl py-5">
                    {/*Title New Quote*/}
                    <QuoteTitle title={"New Quote"}/>

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
                            />
                        </div>
                    )}

                    {/*Title previous Quote*/}
                    {
                        currentQuote && <QuoteTitle title="Current Quote"/>
                    }

                    {/* Display previous quotes if available */}
                    {currentQuote && (
                        <div className="pb-20">
                            <PreviousQuoteDisplay
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