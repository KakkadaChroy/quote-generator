import {Quote as QuoteIcon} from "lucide-react";
import {QuoteModel} from "../../../../app/modules/quote/core/model";
import useQuote from "../../../../app/modules/quote/core/action";
import {setIsCopyCurrentQuote} from "../../../../app/modules/quote/core/reducer";
import CopyCurrentQuoteButton from "./CopyCurrentQuoteButton";
import useFavorites from "../../../../app/modules/favorites/core/action";


// define props
interface CardProps {
    quoteItem: QuoteModel;
}


const QuoteCurrentCard = ({quoteItem}: CardProps) => {
    // custom hook
    const { favoriteSaved } = useFavorites();
    const {isCopyCurrentQuote, dispatch, currentQuote} = useQuote();


    // custom hook
    const quoteText = `"${quoteItem.content}" — ${quoteItem.author}`;
    const isFavorite = favoriteSaved.some(q => q._id === quoteItem._id);


    // handle function copy quote
    const handleCopyCurrentQuote = () => {
        navigator.clipboard.writeText(quoteText)
            .then(() => {
                if (currentQuote) {
                    dispatch(setIsCopyCurrentQuote(quoteText));
                    setTimeout(() => {
                        dispatch(setIsCopyCurrentQuote(""));
                    }, 1000);
                }
            })
            .catch(err => {
                console.error('Failed to copy', err);
            });
    };


    return <>
        <div className="w-full bg-white rounded-xl shadow-lg p-6 mb-6 relative overflow-hidden">
            <div className="relative z-10">
                <div className="absolute -top-2 -left-2 text-7xl text-gray-100 opacity-80">
                    <QuoteIcon size={38} strokeWidth={1}/>
                </div>
                <p className="text-gray-800 text-lg font-medium pt-4 px-2 italic">
                    {quoteItem.content}
                </p>
                <div
                    className="absolute -bottom-2 -right-2 text-7xl text-gray-100 opacity-80 rotate-180">
                    <QuoteIcon size={38} strokeWidth={1}/>
                </div>
            </div>

            {/*Copy Quote Button*/}
            <div className="mt-6 flex justify-between items-center relative z-10">
                <CopyCurrentQuoteButton
                    quoteItem={quoteItem}
                    handleCopyQuote={handleCopyCurrentQuote}
                    isCopyCurrentQuote={isCopyCurrentQuote}
                    isFavorite={isFavorite}
                />
                <p className="text-sm text-[#1c1c22] font-semibold">— {quoteItem.author}</p>
            </div>
        </div>
    </>
}

export default QuoteCurrentCard;