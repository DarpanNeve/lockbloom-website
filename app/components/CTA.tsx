"use client";

import { APP_URL } from "../lib/constants";

export default function CTA() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tight">
                    Ready to Secure Your <span className="text-blue-600 dark:text-blue-500">Digital Life?</span>
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
                    Join users who trust LockBloom to keep their passwords safe.
                    Download now and experience true security.
                </p>
                <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg text-white transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                    aria-label="Download LockBloom now on Google Play"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <span>Get LockBloom</span>
                </a>
                <div className="mt-6 text-sm text-zinc-500 dark:text-zinc-500 font-medium">
                    Available on Android & iOS • No Credit Card Required
                </div>
            </div>
        </section>
    );
}
