import React, {useState} from 'react';
import {Heart, X, Quote as QuoteIcon, Copy} from 'lucide-react';
import useFavorites from "../core/action";
import {useAppDispatch} from "../../../redux/hooks/reduxHook";
import {removeFavorite} from "../core/reducer";
import FavoritesHeader from "../../../../_quote-generator/helpers/components/favorites/FavoritesHeader";
import EmptyFavorites from "../../../../_quote-generator/helpers/components/favorites/EmptyFavorites";
import ShareQuoteDialog from "../../../../_quote-generator/helpers/ui/ShareQuoteAlertDialog";

const Favorites = () => {
    // custom hook
    const {favoriteSaved} = useFavorites();
    const dispatch = useAppDispatch();


    // State for dialog
    const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);


    // handle removed favorite
    const handleRemoveFavorite = (id: string) => {
        dispatch(removeFavorite(id));
    };


    // handleCopySaved Favorite
    const handleShareQuote = (content: string, author: string) => {
        const quoteText = `"${content}" — ${author}`;
        navigator.clipboard.writeText(quoteText)
            .then(() => {
                // Show dialog instead of alert
                setIsShareDialogOpen(true);
            })
            .catch(err => {
                console.error('Failed to copy', err);
            });
    };


    return (
        <div className="min-h-auto bg-gray-50 dark:bg-primary dark:text-white text-gray-900 pt-8 pb-28">
            <div className="md:container px-4 mx-auto flex flex-col items-center justify-center">
                <div className="max-w-3xl">
                    {/* Header */}
                    <FavoritesHeader/>

                    {/* Main Content */}
                    <main className="max-w-4xl mx-auto">
                        {/* Empty state */}
                        {(!favoriteSaved || favoriteSaved.length === 0) && <EmptyFavorites/>}

                        {/* Favorites List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                            {favoriteSaved && favoriteSaved.map((quote) => (
                                <div
                                    key={quote._id}
                                    className="bg-white dark:text-primary rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100"
                                >
                                    <div className="p-6 relative">
                                        <div className="absolute -top-2 -left-2 text-gray-100 opacity-80">
                                            <QuoteIcon size={32} strokeWidth={1}/>
                                        </div>

                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-2 flex-wrap">
                                                {quote.tags && quote.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                                                    >
                                                    {tag}
                                                </span>
                                                ))}
                                            </div>
                                            <div className="flex space-x-2">
                                                <button
                                                    className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-100"
                                                    onClick={() => handleShareQuote(quote.content || '', quote.author || '')}
                                                    aria-label="Share quote"
                                                >
                                                    <Copy size={18}/>
                                                </button>
                                                <button
                                                    className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100"
                                                    onClick={() => handleRemoveFavorite(quote._id || '')}
                                                    aria-label="Remove from favorites"
                                                >
                                                    <X size={18}/>
                                                </button>
                                            </div>
                                        </div>

                                        <blockquote className="italic text-lg mb-4 px-2 pt-2">"{quote.content}"
                                        </blockquote>

                                        <div className="flex justify-between items-center mt-6">
                                            <div>
                                                <p className="font-medium text-gray-800">{quote.author}</p>
                                                {quote.dateAdded && (
                                                    <p className="text-xs text-gray-500">Added
                                                        on {new Date(quote.dateAdded).toLocaleDateString()}</p>
                                                )}
                                            </div>
                                            <Heart className="text-red-500 fill-red-500 w-5 h-5"/>
                                        </div>

                                        <div
                                            className="absolute -bottom-2 -right-2 text-gray-100 opacity-80 rotate-180">
                                            <QuoteIcon size={32} strokeWidth={1}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>

            {/* Share Quote Dialog */}
            <ShareQuoteDialog
                isOpen={isShareDialogOpen}
                onClose={() => setIsShareDialogOpen(false)}
            />
        </div>
    );
};

export default Favorites;