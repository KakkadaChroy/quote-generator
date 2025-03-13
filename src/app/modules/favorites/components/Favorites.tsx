import React from 'react';
import { Heart, X, Share2 } from 'lucide-react';
import useFavorites from "../core/action";

const Favorites = () => {
    const {favoriteSaved} = useFavorites();

    console.log(favoriteSaved, '==v=')

    // Static data for demonstration
    const favorites = [
        {
            _id: "oPdH3snIjkes",
            content: "Never, never, never give up.",
            author: "Winston Churchill",
            tags: ["Famous Quotes"],
            authorSlug: "winston-churchill",
            length: 28,
            dateAdded: "2024-06-26",
            dateModified: "2024-06-26"
        },
        {
            _id: "a8jd93nHsk2",
            content: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            tags: ["Inspirational", "Work"],
            authorSlug: "steve-jobs",
            length: 53,
            dateAdded: "2024-06-20",
            dateModified: "2024-06-20"
        },
        {
            _id: "p2kL9mzX4rT",
            content: "Life is what happens when you're busy making other plans.",
            author: "John Lennon",
            tags: ["Life", "Wisdom"],
            authorSlug: "john-lennon",
            length: 58,
            dateAdded: "2024-06-15",
            dateModified: "2024-06-15"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Main Content */}
            <main className="p-4 max-w-md mx-auto">
                {/* Empty state */}
                {favorites.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                        <Heart className="w-16 h-16 text-gray-300 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-500">No favorites yet</h2>
                        <p className="mt-2 text-gray-400">Your favorite quotes will appear here</p>
                    </div>
                )}

                {/* Favorites List */}
                <div className="space-y-4 mt-2">
                    {favorites.map((quote) => (
                        <div
                            key={quote._id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex gap-2">
                                        {quote.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                                            >
                                            {tag}
                                          </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="text-gray-400 hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-100">
                                            <Share2 size={18} />
                                        </button>
                                        <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100">
                                            <X size={18} />
                                        </button>
                                    </div>
                                </div>

                                <blockquote className="italic text-lg mb-3">"{quote.content}"</blockquote>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-primary">{quote.author}</p>
                                        <p className="text-xs text-gray-500">Added on {new Date(quote.dateAdded).toLocaleDateString()}</p>
                                    </div>
                                    <Heart className="text-red-500 fill-red-500 w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Favorites;