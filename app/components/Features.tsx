"use client";

import { useEffect, useState } from "react";

const features = [
    {
        icon: "🔒",
        title: "AES-256-GCM Encryption",
        description:
            "Military-grade encryption ensures your passwords are protected with the same security used by governments worldwide",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: "👆",
        title: "Biometric Authentication",
        description:
            "Unlock with fingerprint or Face ID. PIN fallback ensures access even without biometrics",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: "📦",
        title: "100% Offline Storage",
        description:
            "Zero cloud dependency. Your data never leaves your device. Complete privacy, complete control",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: "🛡️",
        title: "Zero-Knowledge Architecture",
        description:
            "We can't access your data even if we wanted to. True privacy by design",
        gradient: "from-orange-500 to-red-500",
    },
    {
        icon: "🎲",
        title: "Secure Password Generator",
        description:
            "Create cryptographically secure passwords with customizable strength and complexity",
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        icon: "🔄",
        title: "Encrypted Export/Import",
        description:
            "Migrate between devices securely with encrypted backup files that only you can decrypt",
        gradient: "from-teal-500 to-green-500",
    },
];

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
                        Built for{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            Security First
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Every feature designed with your privacy and security as the top priority
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-8 border hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 ${activeFeature === index
                                    ? "border-blue-500/50 ring-2 ring-blue-500/50"
                                    : "border-black/10 dark:border-white/10"
                                }`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none`}
                            />
                            <div className="relative">
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">{feature.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
