import React from 'react';
import QuoteTitle from "../components/quote/QuoteTitle";

interface ErrorProps {
    error: string | null;
    onRetry: ()=> void;
}

const QuoteError = ({ error, onRetry }: ErrorProps) => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="md:container mx-auto flex flex-col items-center justify-center pt-10">
                <div className="w-full max-w-3xl min-w-2xl py-5">
                    <QuoteTitle title="Oops! Something went wrong" />

                    <div className="mt-6 bg-white rounded-lg shadow-md p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Failed to load quotes</h3>

                        <p className="text-gray-600 mb-6">
                            {error || "We couldn't load your quotes at this time. Please try again later."}
                        </p>

                        <button
                            onClick={onRetry}
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteError;