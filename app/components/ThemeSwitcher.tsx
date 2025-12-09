"use client";

import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[102px] h-[36px] rounded-full bg-zinc-100 dark:bg-white/5 animate-pulse" />;
    }

    const themes = [
        {
            name: "light",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            label: "Light"
        },
        {
            name: "dark",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            ),
            label: "Dark"
        },
        {
            name: "system",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
            label: "System"
        },
    ] as const;

    return (
        <div className="flex items-center p-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-md">
            {themes.map((t) => {
                const isActive = theme === t.name;
                return (
                    <button
                        key={t.name}
                        onClick={() => setTheme(t.name)}
                        className={`
                            relative flex items-center justify-center p-2 rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                            ${isActive
                                ? "text-blue-600 dark:text-blue-400 bg-white dark:bg-white/10 shadow-sm"
                                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-white/5"
                            }
                        `}
                        aria-label={`Switch to ${t.label} theme`}
                        title={t.label}
                    >
                        {t.icon}
                        {isActive && (
                            <span className="sr-only">(Active)</span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
