import React from 'react';
import { useNavigate } from 'react-router-dom';

interface QuoteErrorProps {
    errorMessage?: string;
}

const ErrorPages: React.FC<QuoteErrorProps> = ({ errorMessage }) => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-primary py-6 px-6">
                    <h1 className="text-white text-2xl font-bold text-center">Oops! Something went wrong</h1>
                </div>

                <div className="p-6">
                    <div className="flex justify-center my-8">
                        <svg className="w-24 h-24 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
                            <path d="M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Quote Generator Error</h2>
                        <p className="text-gray-600">
                            {errorMessage || "We're having trouble loading your quotes. Please try again later."}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <button
                            onClick={handleGoHome}
                            className="flex-1 px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        >
                            Go to Home
                        </button>
                        <button
                            onClick={handleGoBack}
                            className="flex-1 px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:bg-opacity-10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPages;