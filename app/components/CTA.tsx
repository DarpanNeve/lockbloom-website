"use client";

import { APP_URL } from "../lib/constants";

export default function CTA() {
    return (
        <section className="relative py-20 lg:py-32">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none" />
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-zinc-900 dark:text-white">
                    Ready to Secure Your{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                        Digital Life?
                    </span>
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                    Join users who trust LockBloom to keep their passwords safe.
                    Download now and experience true security.
                </p>
                <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full font-bold text-xl text-white transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70"
                    aria-label="Download LockBloom now - Free on Google Play"
                >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <span>Get LockBloom Free</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
                </a>
                <div className="mt-6 text-sm text-zinc-500">
                    Available on Android & iOS • 100% Free • No Credit Card Required
                </div>
            </div>
        </section>
    );
}
