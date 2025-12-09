"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { APP_URL } from "../lib/constants";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/50 backdrop-blur-xl border-b border-black/10 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/50">
                        🔐
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                        LockBloom
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <ThemeSwitcher />
                    <Link
                        href={APP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50"
                        aria-label="Download LockBloom from Google Play Store"
                    >
                        Download Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}
