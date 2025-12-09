"use client";

import Image from "next/image";

export default function Showcase() {
    return (
        <section className="relative py-20 lg:py-32 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
                        See LockBloom in{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            Action
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Experience the elegant interface designed for security and simplicity
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[600px] rounded-3xl bg-gradient-to-br from-zinc-100/50 to-zinc-200/50 dark:from-zinc-900/50 dark:to-zinc-800/50 border border-black/10 dark:border-white/10 backdrop-blur-xl overflow-hidden group flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="relative w-full h-full p-4 flex items-center justify-center">
                            <Image
                                src="/screenshots/main.png"
                                alt="LockBloom Main Interface"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-black/10 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Intuitive Interface</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Clean, modern design that makes password management effortless</p>
                        </div>
                        <div className="bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-black/10 dark:border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Biometric Security</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Quick access with fingerprint or face recognition</p>
                        </div>
                        <div className="bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 border border-black/10 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Organized Vault</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Category-based organization for easy password management</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
