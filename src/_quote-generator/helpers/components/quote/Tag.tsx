import {Quote as QuoteIcon} from "lucide-react";
import {QuoteModel} from "../../../../app/modules/quote/core/model";

interface TagProps {
    item: QuoteModel;
}

const QuoteTag = ({item}: TagProps) => {
    return (
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {item?.tags?.map((tag, index) => (
                <div key={index}
                     className="bg-gray-200 text-[#1c1c22] px-3 py-1 rounded-full text-sm font-medium capitalize flex items-center">
                    <QuoteIcon size={16} className="mr-1"/>
                    {tag}
                </div>
            ))}
        </div>
    )
}

export default QuoteTag;