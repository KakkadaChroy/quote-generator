import useQuote from "../core/action";
import {useEffect} from "react";
import {QuoteModel} from "../core/model";

const QuoteGenerator = () => {
    const {fetchQuoteGenerator, loading, quoteList} = useQuote();
    console.log(quoteList, '==quoteList=')

    useEffect(() => {
        fetchQuoteGenerator();
    }, []);

    const sampleQuote: QuoteModel = {
        quote: "But I always think that the best way to know God is to love many things.",
        author: "Vincent Van Gogh",
        category: "god"
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <header className="py-4 px-4 flex justify-between items-center bg-[#1c1c22] text-white shadow-md">
                <h1 className="text-xl font-bold">QuoteGem</h1>
                <button>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-grow px-4 py-6 flex flex-col justify-center items-center">
                {/* Category Badge */}
                <div className="bg-gray-200 text-[#1c1c22] px-3 py-1 rounded-full text-sm font-medium mb-4 capitalize">
                    {sampleQuote.category}
                </div>

                {/* Quote Card */}
                <div className="w-full bg-white rounded-xl shadow-lg p-6 mb-6">
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 text-5xl text-gray-200 font-serif">"</div>
                        <p className="text-gray-800 text-lg font-medium pt-2 px-2 italic">
                            {sampleQuote.quote}
                        </p>
                        <div className="absolute -bottom-6 -right-6 text-5xl text-gray-200 font-serif rotate-180">"</div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <p className="text-[#1c1c22] font-semibold">— {sampleQuote.author}</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col w-full space-y-4">
                    <button className="bg-[#1c1c22] hover:bg-black text-white font-medium py-4 rounded-lg shadow-md flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Generate Quote
                    </button>

                    <button className="bg-white border border-[#1c1c22] hover:bg-gray-50 text-[#1c1c22] font-medium py-4 rounded-lg shadow-sm flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Save to Favorites
                    </button>
                </div>
            </main>

            {/* Footer Navigation for Mobile */}
            <footer className="bg-white shadow-lg py-3 px-6 fixed bottom-0 w-full border-t border-gray-200">
                <div className="flex justify-around">
                    <div className="flex flex-col items-center text-[#1c1c22]">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span className="text-xs mt-1">Home</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs mt-1">Favorites</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs mt-1">Settings</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default QuoteGenerator;