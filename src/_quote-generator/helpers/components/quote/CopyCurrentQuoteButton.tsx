import {Check, Copy, Heart} from "lucide-react";
import {addFavorite, removeFavorite} from "../../../../app/modules/favorites/core/reducer";
import useFavorites from "../../../../app/modules/favorites/core/action";
import {QuoteModel} from "../../../../app/modules/quote/core/model";


interface CopyCurrentQuoteProps {
    handleCopyQuote: () => void;
    isCopyCurrentQuote: string | null;
    isFavorite: boolean;
    quoteItem: QuoteModel;
}


const CopyCurrentQuoteButton = ({quoteItem, handleCopyQuote, isCopyCurrentQuote, isFavorite}: CopyCurrentQuoteProps) => {
    const {dispatch} = useFavorites();

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(quoteItem._id as string));
        } else {
            dispatch(addFavorite(quoteItem));
        }
    };


    return <>
        <div className="flex">
            {/* Copy Quote Button */}
            <button
                onClick={handleCopyQuote}
                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors py-1 px-3 rounded-md hover:bg-gray-100"
                aria-label="Copy quote"
            >
                {isCopyCurrentQuote ? (
                    <>
                        <Check size={16}/>
                        <span className="text-sm font-medium">Copied!</span>
                    </>
                ) : (
                    <>
                        <Copy size={16}/>
                        <span className="text-sm font-medium">Copy</span>
                    </>
                )}
            </button>

            {/* Add to Favorites Button */}
            <button
                onClick={handleToggleFavorite}
                className={`flex items-center gap-1 py-1 px-1 rounded-md transition-colors ${
                    isFavorite
                        ? "text-red-500 hover:text-red-600 hover:bg-red-50"
                        : "text-gray-600 hover:text-red-500 hover:bg-gray-100"
                }`}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
                <Heart size={16} fill={isFavorite ? "currentColor" : "none"}/>
                <span className="text-sm font-medium">
                    {isFavorite ? "Favorited" : "Favorite"}
                </span>
            </button>
        </div>
    </>
}

export default CopyCurrentQuoteButton;