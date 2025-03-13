import React from 'react';
import { Quote as QuoteIcon } from "lucide-react";
import QuoteTitle from "../components/quote/QuoteTitle";

export const CompleteQuoteSkeleton = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <div className="md:container mx-auto flex flex-col items-center justify-center w-full">
                <div className="w-full max-w-3xl py-5">
                    {/*Title*/}
                    <QuoteTitle title={"New Quote"}/>

                    <div className="flex-grow px-4 py-6 flex flex-col justify-center items-center w-full">
                        {/* Tag Badge Skeleton */}
                        <div className="flex gap-2 mb-4 justify-center">
                            <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                            <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                        </div>

                        {/* Quote Card Skeleton */}
                        <div className="w-full bg-white rounded-xl shadow-lg p-6 mb-6 relative overflow-hidden">
                            <div className="relative z-10">
                                {/* Top quote icon */}
                                <div className="absolute -top-2 -left-2 text-gray-100 opacity-80">
                                    <QuoteIcon size={38} strokeWidth={1}/>
                                </div>

                                {/* Quote content skeleton lines */}
                                <div className="pt-4 px-2 space-y-3">
                                    <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
                                    <div className="h-5 bg-gray-200 rounded w-11/12 animate-pulse"></div>
                                    <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                                </div>

                                {/* Bottom quote icon */}
                                <div className="absolute -bottom-2 -right-2 text-gray-100 opacity-80 rotate-180">
                                    <QuoteIcon size={38} strokeWidth={1}/>
                                </div>
                            </div>

                            {/* Action Buttons and Author skeleton */}
                            <div className="mt-6 flex justify-between items-center relative z-10">
                                {/* CopyQuoteButton skeleton */}
                                <div className="flex space-x-2">
                                    <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
                                    <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
                                </div>

                                {/* Author skeleton */}
                                <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
                            </div>
                        </div>

                        {/* Quote Button Skeleton */}
                        <div className="h-10 w-40 bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};