import React from 'react';
import {QuoteModel} from "../core/model";
import QuoteTag from "../../../../_quote-generator/helpers/components/quote/Tag";
import QuoteCurrentCard from "../../../../_quote-generator/helpers/components/quote/CurrntQuoteCard";


interface CardProps {
    currentQuote: QuoteModel | QuoteModel[];
}


const CurrentQuoteDisplay = ({currentQuote}:CardProps) => {
    const quotesToDisplay = Array.isArray(currentQuote) ? currentQuote : [currentQuote];

    if (!currentQuote || currentQuote.length === 0) return null;
    if (quotesToDisplay.length === 0) return null;

    return (
        <div className="flex flex-col bg-gray-100 dark:bg-primary">
            {
                quotesToDisplay.map((item, index) => (
                    <div key={index} className="flex-grow px-4 py-6 flex flex-col justify-center items-center">
                        {/* Tag Badge */}
                        <QuoteTag item={item}/>

                        {/* Quote Card */}
                        <QuoteCurrentCard quoteItem={item}/>
                    </div>
                ))
            }
        </div>
    );
};

export default CurrentQuoteDisplay;