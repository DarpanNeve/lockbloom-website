"use client";

import { APP_URL, AUTHOR_URL, REPO_URL, EMAIL, BUY_COFFEE } from "../lib/constants";

export default function Footer() {
    return (
        <footer className="border-t border-black/10 dark:border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-8 h-8">
                                <img
                                    src="/logo.svg"
                                    alt="LockBloom Logo"
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                                LockBloom
                            </span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
                            A privacy-focused password manager with military-grade encryption.
                            Keep your digital life secure with zero-knowledge architecture.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-zinc-900 dark:text-white">Quick Links</h4>
                        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                            <li>
                                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                                    Download App
                                </a>
                            </li>
                            <li>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                                    Source Code
                                </a>
                            </li>
                            <li>
                                <a href={`${REPO_URL}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                                    Contribute
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-zinc-900 dark:text-white">Developer</h4>
                        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                            <li>
                                <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                    </svg>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${EMAIL}`} className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href={BUY_COFFEE} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
                                    ☕ Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 dark:text-zinc-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} LockBloom. Made with ❤️ by Darpan Neve</p>
                    <div className="flex gap-6">
                        <a href={`${REPO_URL}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                            MIT License
                        </a>
                        <a href={`mailto:${EMAIL}`} className="hover:text-black dark:hover:text-white transition-colors">
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
