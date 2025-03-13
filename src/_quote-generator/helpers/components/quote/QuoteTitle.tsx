import React from 'react';

interface TitleProps {
    title: string;
}

const QuoteTitle: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="px-4 py-2 mb-4">
            <h1 className="font-semibold text-lg relative inline-block">
                {title}
                <span className="absolute bg-primary h-0.5 w-full bottom-0 left-0 transform transition-opacity duration-300"></span>
            </h1>
        </div>
    );
};

export default QuoteTitle;