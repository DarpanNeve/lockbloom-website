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
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight">
                        Frequently Asked <span className="text-blue-600 dark:text-blue-500">Questions</span>
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Everything you need to know about LockBloom
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 open:border-blue-500/50 dark:open:border-blue-500/50 transition-all duration-200"
                        >
                            <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center text-zinc-900 dark:text-white marker:content-none list-none select-none">
                                <span>{faq.q}</span>
                                <svg
                                    className="w-5 h-5 text-zinc-400 dark:text-zinc-500 transition-transform duration-200 group-open:rotate-180 group-open:text-blue-600 dark:group-open:text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base border-t border-transparent group-open:border-zinc-100 dark:group-open:border-zinc-800/50 pt-4">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
