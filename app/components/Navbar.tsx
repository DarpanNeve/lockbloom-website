"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import { APP_URL } from "../lib/constants";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/logo.svg"
                            alt="LockBloom Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        LockBloom
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    <Link
                        href={APP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white text-sm transition-colors duration-200 shadow-sm"
                        aria-label="Download LockBloom from Google Play Store"
                    >
                        Download
                    </Link>
                </div>
            </div>
        </nav>
    );
}
