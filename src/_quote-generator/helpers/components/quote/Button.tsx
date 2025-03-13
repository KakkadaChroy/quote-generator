import {RefreshCw} from "lucide-react";
import LoadingSpinner from "../../ui/LoadingSpinner";


interface ButtonProps {
    loading: boolean;
    handleClick: () => void;
}


const QuoteButton = ({loading, handleClick}: ButtonProps) => {
    return <>
        {/* Buttons */}
        <div className="flex flex-col w-full space-y-4">
            <button
                onClick={handleClick}
                disabled={loading}
                className={`bg-[#1c1c22] dark:bg-gray-100  hover:bg-black text-white dark:text-primary font-medium py-4 rounded-lg shadow-md flex items-center justify-center transition-all duration-200 ${!loading && 'hover:scale-105'} ${loading && 'opacity-70 cursor-not-allowed'}`}
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
        </div>
    </>
}


export default QuoteButton;