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
        <section className="relative overflow-hidden pt-32 pb-20 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Left Column: Text Content */}
                    <div
                        className={`text-center lg:text-left transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-zinc-900 dark:text-white">
                            Your Passwords,
                            <br />
                            <span className="text-blue-600 dark:text-blue-500">
                                Securely Locked.
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                            Military-grade encryption meets elegant design. Keep your credentials safe
                            with <strong className="font-semibold text-zinc-900 dark:text-zinc-50">zero-knowledge</strong>{" "}
                            architecture and <strong className="font-semibold text-zinc-900 dark:text-zinc-50">100% offline</strong>{" "}
                            storage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <a
                                href={APP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg text-white transition-all duration-200 flex items-center gap-3 shadow-sm hover:shadow-md"
                                aria-label="Download LockBloom - Free on Google Play"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <span>Get App</span>
                            </a>
                            <a
                                href={REPO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg font-semibold text-lg text-zinc-900 dark:text-white transition-colors duration-200 flex items-center gap-3"
                                aria-label="View LockBloom source code on GitHub"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                </svg>
                                <span>GitHub</span>
                            </a>
                        </div>
                        <div className="mt-10 flex justify-center lg:justify-start gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>100% Free</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span>Open Source</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span>No Ads</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Screenshot */}
                    <div
                        className={`hidden lg:block relative transform transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                            }`}
                    >
                        <div className="relative w-full h-[400px] flex items-center justify-center">
                           {/* Device Frame / Glow effect (subtle) */}
                           <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
                            <Image
                                src="/screenshots/screenshot.png"
                                alt="LockBloom App Interface"
                                width={250}
                                height={500}
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-zinc-100 dark:border-zinc-900 pt-12">
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                        <div className="space-y-1">
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">100+</div>
                            <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Downloads</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">4.8★</div>
                            <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Rating</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">0ms</div>
                            <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Latency</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">100%</div>
                            <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Offline</div>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    );
}
