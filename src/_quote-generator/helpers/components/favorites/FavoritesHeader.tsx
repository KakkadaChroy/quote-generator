import {Heart} from "lucide-react";
import React from "react";

const FavoritesHeader = () => {
    return <>
        <div className="mb-8 text-center">
            <div className="relative inline-block">
                <h1 className="md:text-3xl text-xl font-bold mb-2 flex items-center">
                    <Heart className="text-red-500 fill-red-500 mr-2" size={24}/>
                    Favorite Quotes
                </h1>
                <span
                    className="absolute bg-red-500 h-1 md:w-32 w-20 bottom-0 left-0 origin-left scale-x-100 transition-transform"></span>
            </div>
            <p className="text-gray-600 mt-4 text-sm">Your personal collection of inspiring quotes.</p>
        </div>
    </>
}

export default FavoritesHeader;