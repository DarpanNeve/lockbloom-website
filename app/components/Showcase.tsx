"use client";

import Image from "next/image";

export default function Showcase() {
    return (
        <section className="py-24 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight">
                        Experience <span className="text-blue-600 dark:text-blue-500">True Simplicity</span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        A password manager that feels invisible. Powerful security wrapped in an elegant interface.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Container */}
                    <div className="relative h-[600px] rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex items-center justify-center p-8">
                        <div className="relative w-full h-full">
                            <Image
                                src="/screenshots/screenshot.png"
                                alt="LockBloom Interface"
                                fill
                                className="object-contain drop-shadow-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 text-lg font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Intuitive Design</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    No complex menus or confusing settings. Everything you need is right where you expect it to be.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 text-lg font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Seamless Biometrics</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    Authenticate instantly with Face ID or Fingerprint. Quick access without compromising security.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 text-lg font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Smart Organization</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    Automatically categorize your logistical life. Passwords, notes, and cards are sorted for easy retrieval.
                                </p>
                            </div>
                        </div>
                        
                        <div className="pt-4">
                             <div className="inline-block px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300">
                                Available on Android & iOS
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
