import {QuoteModel} from "../../../app/modules/quote/core/model";

export const sanitizeQuote = (quote: QuoteModel): QuoteModel => {
    // Create a new object without null values
    const sanitized = {} as QuoteModel;

    Object.entries(quote).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            // @ts-ignore - Dynamic key assignment
            sanitized[key] = value;
        }
    });

    return sanitized;
};