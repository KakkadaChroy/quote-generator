import React, { useEffect, useState } from 'react';

interface LoadingPageProps {
    minDisplayTime?: number;
    onLoadComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
                                                     minDisplayTime = 2000,
                                                     onLoadComplete
                                                 }) => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Start loading animation
        let startTime = Date.now();
        let progressInterval: NodeJS.Timeout;
        let hidingTimeout: NodeJS.Timeout;

        // Simulate loading progress
        progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min(elapsed / minDisplayTime * 100, 99);
            setLoadingProgress(newProgress);

            if (document.readyState === 'complete' && newProgress > 70) {
                clearInterval(progressInterval);
                setLoadingProgress(100);

                hidingTimeout = setTimeout(() => {
                    setIsVisible(false);
                    if (onLoadComplete) onLoadComplete();
                }, 500);
            }
        }, 100);


        // Listen for window load event
        const handleLoad = () => {
            const elapsed = Date.now() - startTime;
            const remainingTime = Math.max(0, minDisplayTime - elapsed);

            setTimeout(() => {
                clearInterval(progressInterval);
                setLoadingProgress(100);

                hidingTimeout = setTimeout(() => {
                    setIsVisible(false);
                    if (onLoadComplete) onLoadComplete();
                }, 500);
            }, remainingTime);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearInterval(progressInterval);
            clearTimeout(hidingTimeout);
        };
    }, [minDisplayTime, onLoadComplete]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center">
            <div className="w-32 h-32 mb-8 relative">
                {/* Animated quote icon */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-white animate-pulse"
                >
                    <path
                        d="M9.5 8.5H8.5C7.94772 8.5 7.5 8.94772 7.5 9.5V14.5C7.5 15.0523 7.94772 15.5 8.5 15.5H9.5C10.0523 15.5 10.5 15.0523 10.5 14.5V9.5C10.5 8.94772 10.0523 8.5 9.5 8.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.5 8.5H14.5C13.9477 8.5 13.5 8.94772 13.5 9.5V14.5C13.5 15.0523 13.9477 15.5 14.5 15.5H15.5C16.0523 15.5 16.5 15.0523 16.5 14.5V9.5C16.5 8.94772 16.0523 8.5 15.5 8.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.5 5C3.5 3.89543 4.39543 3 5.5 3H18.5C19.6046 3 20.5 3.89543 20.5 5V19C20.5 20.1046 19.6046 21 18.5 21H5.5C4.39543 21 3.5 20.1046 3.5 19V5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <h1 className="text-2xl font-bold text-white mb-6">Quote Generator</h1>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-white bg-opacity-20 rounded-full overflow-hidden mb-4">
                <div
                    className="h-full bg-white transition-all duration-300 ease-out"
                    style={{ width: `${loadingProgress}%` }}
                ></div>
            </div>

            <p className="text-white text-opacity-70 text-sm">
                {loadingProgress < 100 ? 'Loading your quotes...' : 'Ready!'}
            </p>
        </div>
    );
};

export default LoadingPage;