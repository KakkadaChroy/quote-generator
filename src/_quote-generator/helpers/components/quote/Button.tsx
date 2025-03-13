import {Heart, RefreshCw} from "lucide-react";
import LoadingSpinner from "../../ui/LoadingSpinner";


interface ButtonProps {
    loading: boolean;
    loadingSaved: boolean;
    handleClick: () => void;
}


const QuoteButton = ({loading, loadingSaved, handleClick}: ButtonProps) => {
    return <>
        {/* Buttons */}
        <div className="flex flex-col w-full space-y-4">
            <button
                onClick={handleClick}
                disabled={loading}
                className={`bg-[#1c1c22] hover:bg-black text-white font-medium py-4 rounded-lg shadow-md flex items-center justify-center transition-all duration-200 ${!loading && 'hover:scale-105'} ${loading && 'opacity-70 cursor-not-allowed'}`}
            >
                {loading ? (
                    <LoadingSpinner size="small" color="white"/>
                ) : (
                    <>
                        <RefreshCw size={20} className="mr-2"/>
                        Generate Quote
                    </>
                )}
            </button>

            <button
                disabled={loadingSaved}
                className={`bg-white border border-[#1c1c22] hover:bg-gray-50 text-[#1c1c22] font-medium py-4 rounded-lg shadow-sm flex items-center justify-center transition-all duration-200 ${!loading && 'hover:scale-105'} ${loading && 'opacity-70 cursor-not-allowed'}`}
            >
                <Heart size={20} className="mr-2"/>
                Save to Favorites
            </button>
        </div>
    </>
}


export default QuoteButton;