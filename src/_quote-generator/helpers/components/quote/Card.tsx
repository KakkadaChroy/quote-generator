import {Quote as QuoteIcon} from "lucide-react";
import {QuoteModel} from "../../../../app/modules/quote/core/model";
import useQuote from "../../../../app/modules/quote/core/action";
import {setIsCopyCurrentQuote, setIsCopyQuote} from "../../../../app/modules/quote/core/reducer";
import IsCopyIconChecked from "../../ui/IsCopyIconChecked";


interface CardProps {
    quoteItem: QuoteModel;
}


const QuoteCard = ({quoteItem}: CardProps) => {
    const {isCopyQuote, isCopyCurrentQuote, dispatch} = useQuote();
    const quoteText = `"${quoteItem.content}" — ${quoteItem.author}`;


    const handleCopyQuote = () => {
        navigator.clipboard.writeText(quoteText)
            .then(() => {
                if (quoteItem.length === 0) {
                    dispatch(setIsCopyQuote(quoteText));
                    setTimeout(() => {
                        dispatch(setIsCopyQuote(""));
                    }, 500)
                } else {
                    dispatch(setIsCopyCurrentQuote(quoteText[0]));
                    setTimeout(() => {
                        dispatch(setIsCopyCurrentQuote(""));
                    }, 500)
                }
            })
            .catch(err => {
                console.error('failed to copy', err);
                return err;
            })
    }


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
                <button
                    onClick={handleCopyQuote}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors py-1 px-3 rounded-md hover:bg-gray-100"
                    aria-label="Copy quote"
                >
                    <IsCopyIconChecked
                        quoteItem={quoteItem}
                        isCopyQuote={isCopyQuote}
                        isCopyCurrentQuote={isCopyCurrentQuote}
                    />
                </button>
                <p className="text-[#1c1c22] font-semibold">— {quoteItem.author}</p>
            </div>
        </div>
    </>
}

export default QuoteCard;