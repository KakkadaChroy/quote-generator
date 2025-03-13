import {Heart} from "lucide-react";
import React from "react";

const EmptyFavorites = () => {
    return <>
        <div className="flex flex-col items-center justify-center h-64 text-center bg-white rounded-lg shadow-md p-8">
            <Heart className="w-16 h-16 text-gray-300 mb-4"/>
            <h2 className="text-xl font-semibold text-gray-500">No favorites yet</h2>
            <p className="mt-2 text-gray-400">Your favorite quotes will appear here</p>
        </div>
    </>
}

export default EmptyFavorites;