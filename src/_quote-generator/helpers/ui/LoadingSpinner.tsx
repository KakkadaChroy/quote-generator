import React from 'react';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'white' | 'gray';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
                                                           size = 'medium',
                                                           color = 'primary'
                                                       }) => {
    // Size classes mapping
    const sizeClasses = {
        small: 'w-4 h-4 border-2',
        medium: 'w-8 h-8 border-3',
        large: 'w-12 h-12 border-4'
    };

    // Color classes mapping
    const colorClasses = {
        primary: 'border-t-[#1c1c22]',
        white: 'border-t-white',
        gray: 'border-t-gray-500'
    };

    return (
        <div className="flex items-center justify-center">
            <div
                className={`${sizeClasses[size]} ${colorClasses[color]} border-gray-200 border-solid rounded-full animate-spin`}
            ></div>
        </div>
    );
};

export default LoadingSpinner;