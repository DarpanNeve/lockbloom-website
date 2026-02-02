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
        <section className="py-24 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight">
                        <span className="text-blue-600 dark:text-blue-500">Military-Grade</span> Security
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        The same encryption technology trusted by governments and financial institutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {securityFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-colors duration-200"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-blue-600 dark:bg-blue-500 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">{feature.title}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/30">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Open Source & Auditable</h3>
                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 text-sm sm:text-base">
                                Complete transparency with publicly available source code. Security experts
                                and developers can audit every line of code to verify our security
                                practices. No hidden backdoors, no secrets - just pure, verifiable security.
                            </p>
                            <a
                                href={REPO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors"
                                aria-label="Audit LockBloom source code on GitHub"
                            >
                                <span>Audit the Code</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                        <div className="text-blue-600 dark:text-blue-400">
                             <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
