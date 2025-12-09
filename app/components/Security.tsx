"use client";

import { REPO_URL } from "../lib/constants";

const securityFeatures = [
    {
        title: "256-bit Encryption Keys",
        description: "Industry-leading encryption strength",
    },
    {
        title: "PBKDF2 Key Derivation",
        description: "100,000 iterations for maximum security",
    },
    {
        title: "Platform Secure Storage",
        description: "Android Keystore & iOS Keychain integration",
    },
    {
        title: "Memory Protection",
        description: "Sensitive data cleared from memory",
    },
    {
        title: "Auto-Lock Timer",
        description: "Configurable timeout for automatic locking",
    },
    {
        title: "Secure Clipboard",
        description: "Auto-clear clipboard after copying passwords",
    },
];

export default function Security() {
    return (
        <section className="relative py-20 lg:py-32 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                            Military-Grade
                        </span>{" "}
                        Security
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        The same encryption technology trusted by governments and financial institutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {securityFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold mb-1 text-zinc-900 dark:text-white">{feature.title}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-br from-orange-500/5 to-red-500/5 dark:from-orange-500/10 dark:to-red-500/10 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/20">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Open Source & Auditable</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                Complete transparency with publicly available source code. Security experts
                                and developers can audit every line of code to verify our security
                                practices. No hidden backdoors, no secrets - just pure, verifiable security.
                            </p>
                            <a
                                href={REPO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 font-semibold transition-colors"
                                aria-label="Audit LockBloom source code on GitHub"
                            >
                                <span>Audit the Code</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                        <div className="text-8xl">🔍</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
