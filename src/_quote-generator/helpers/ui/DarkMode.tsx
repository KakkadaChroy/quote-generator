import React, {useEffect, useState} from 'react';
import {Sun, Moon} from 'lucide-react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    // handle dark mode
    const toggleDarkMode = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    // get theme from localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, [isDark])


    return (
        <button
            onClick={toggleDarkMode}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                {/* Sun icon */}
                <Sun
                    size={24}
                    className={`absolute inset-0 transition-transform duration-500 ${
                        isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                    } text-amber-500`}
                />

                {/* Moon icon */}
                <Moon
                    size={24}
                    className={`absolute inset-0 transition-transform duration-500 ${
                        isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                    } text-white`}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;