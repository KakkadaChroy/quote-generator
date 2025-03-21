import {Quote as QuoteIcon} from "lucide-react";
import {QuoteModel} from "../../../../app/modules/quote/core/model";
import useQuote from "../../../../app/modules/quote/core/action";
import {setIsCopyQuote} from "../../../../app/modules/quote/core/reducer";
import CopyQuoteButton from "./CopyQuoteButton";
import useFavorites from "../../../../app/modules/favorites/core/action";


// define props
interface CardProps {
    quoteItem: QuoteModel;
}


const QuoteCard = ({quoteItem}: CardProps) => {
    // custom hook
    const {isCopyQuote, dispatch} = useQuote();
    const { favoriteSaved } = useFavorites();

    // custom hook
    const quoteText = `"${quoteItem.content}" — ${quoteItem.author}`;
    const isFavorite = favoriteSaved.some(q => q._id === quoteItem._id);


    // handle function copy quote
    const handleCopyQuote = () => {
        navigator.clipboard.writeText(quoteText)
            .then(() => {
                dispatch(setIsCopyQuote(quoteText));
                setTimeout(() => {
                    dispatch(setIsCopyQuote(""));
                }, 1000);
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

            {/* Action Buttons and Author */}
            <div className="mt-6 flex justify-between items-center relative z-10">
                <CopyQuoteButton
                    isFavorite={isFavorite}
                    isCopyQuote={isCopyQuote}
                    handleCopyQuote={handleCopyQuote}
                    quoteItem={quoteItem}
                />
                <p className="text-sm text-[#1c1c22] font-semibold">— {quoteItem.author}</p>
            </div>
        </div>
    </>
}

export default QuoteCard;