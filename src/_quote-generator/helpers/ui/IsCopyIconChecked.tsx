import {Check, Copy} from "lucide-react";
import {QuoteModel} from "../../../app/modules/quote/core/model";


interface IconProps {
    isCopyQuote: string | null;
    isCopyCurrentQuote: string | null;
    quoteItem: QuoteModel;
}


const IsCopyIconChecked = ({isCopyQuote, isCopyCurrentQuote, quoteItem}: IconProps) => {
    const isEmptyQuote = quoteItem.length;

    console.log(quoteItem, '===quoteItem=')

    console.log(isEmptyQuote, '==isEmptyQuote=s')

    // Determine if we should show the "Copied!" state
    const showCopied = isEmptyQuote ? isCopyCurrentQuote : isCopyQuote;

    return (
        <div className="flex items-center gap-2">


            {
                isEmptyQuote ? (
                    <>
                        {
                            isCopyCurrentQuote ? (
                                <>
                                    <Check size={16}/>
                                    <span className="text-sm font-medium">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={16}/>
                                    <span className="text-sm font-medium">Copy quote</span>
                                </>
                            )
                        }
                    </>
                ) : (
                    <>
                        {
                            isCopyQuote ? (
                                <>
                                    <Check size={16}/>
                                    <span className="text-sm font-medium">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={16}/>
                                    <span className="text-sm font-medium">Copy quote wdaaaa</span>
                                </>
                            )
                        }
                    </>
                )
            }
        </div>
    );
};


export default IsCopyIconChecked;