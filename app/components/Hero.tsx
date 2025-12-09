"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { APP_URL, REPO_URL } from "../lib/constants";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative overflow-hidden pt-30 pb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column: Text Content */}
                    <div
                        className={`text-center lg:text-left transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-zinc-900 dark:text-white">
                            Your Passwords,
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                                Securely Locked
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Military-grade encryption meets elegant design. Keep your credentials safe
                            with <strong className="text-zinc-900 dark:text-white">zero-knowledge</strong>{" "}
                            architecture and <strong className="text-zinc-900 dark:text-white">100% offline</strong>{" "}
                            storage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <a
                                href={APP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-bold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 flex items-center gap-3 overflow-hidden"
                                aria-label="Download LockBloom - Free on Google Play"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <span>Download Free</span>
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
                            </a>
                            <a
                                href={REPO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border-2 border-zinc-200 dark:border-white/20 hover:border-zinc-400 dark:hover:border-white/40 rounded-full font-bold text-lg text-zinc-900 dark:text-white transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
                                aria-label="View LockBloom source code on GitHub"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                </svg>
                                <span>View on GitHub</span>
                            </a>
                        </div>
                        <div className="mt-8 flex justify-center lg:justify-start gap-8 text-sm text-zinc-600 dark:text-zinc-500">
                            <div className="flex items-center gap-2">
                                <span className="text-green-500">●</span>
                                <span>100% Free</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-500">●</span>
                                <span>Open Source</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-500">●</span>
                                <span>No Ads</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Screenshot */}
                    <div
                        className={`relative hidden lg:block h-[600px] transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none rounded-full" />
                        <div className="relative h-full w-full flex items-center justify-center p-8">
                            <div className="relative w-full h-[500px] lg:h-[600px] xl:h-[700px]">
                                <Image
                                    src="/screenshots/main.png"
                                    alt="LockBloom App Interface"
                                    fill
                                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 blur-3xl opacity-20 pointer-events-none" />
                    <div className="relative bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 p-8 transform hover:scale-[1.02] transition-transform duration-500">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                                    100+
                                </div>
                                <div className="text-zinc-600 dark:text-zinc-400 mt-2">Downloads</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                    4.8★
                                </div>
                                <div className="text-zinc-600 dark:text-zinc-400 mt-2">Rating</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                                    0ms
                                </div>
                                <div className="text-zinc-600 dark:text-zinc-400 mt-2">Server Lag</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                                    100%
                                </div>
                                <div className="text-zinc-600 dark:text-zinc-400 mt-2">Offline</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
