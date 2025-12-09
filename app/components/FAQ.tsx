"use client";

const faqs = [
    {
        q: "Why choose LockBloom over cloud-based password managers?",
        a: "LockBloom keeps your data 100% offline, eliminating risks of cloud breaches, server hacks, or unauthorized access. Your passwords never leave your device, giving you complete control and true privacy.",
    },
    {
        q: "How secure is AES-256-GCM encryption?",
        a: "AES-256-GCM is military-grade encryption used by governments and financial institutions worldwide. It would take billions of years for modern computers to crack, making your passwords virtually unbreakable.",
    },
    {
        q: "Can I access my passwords on multiple devices?",
        a: "While LockBloom is designed for offline security, you can export your encrypted data and import it on other devices. The export file is protected with the same military-grade encryption.",
    },
    {
        q: "What happens if I forget my master password?",
        a: "Due to zero-knowledge architecture, there's no password recovery. This ensures complete security - not even we can access your data. We recommend using biometric authentication for convenience.",
    },
    {
        q: "Is LockBloom open source?",
        a: "Yes! LockBloom is fully open source, allowing security experts and developers to audit the code and verify its security practices. Transparency builds trust.",
    },
    {
        q: "Does LockBloom work without internet?",
        a: "Absolutely! LockBloom is designed to work 100% offline. No internet connection required, ever. Your passwords are accessible anytime, anywhere.",
    },
];

export default function FAQ() {
    return (
        <section className="relative py-20 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400">
                        Everything you need to know about LockBloom
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-zinc-50/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
                        >
                            <summary className="cursor-pointer p-6 font-bold text-lg flex justify-between items-center text-zinc-900 dark:text-white marker:content-none list-none">
                                <span>{faq.q}</span>
                                <svg
                                    className="w-6 h-6 transition-transform group-open:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
