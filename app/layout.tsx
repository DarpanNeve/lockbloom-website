import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl = "https://lockbloom.com";
const appUrl = "https://play.google.com/store/apps/details?id=com.dn.lockbloom";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LockBloom - Secure Password Manager | Military-Grade Encryption",
    template: "%s | LockBloom",
  },
  description:
    "LockBloom is a privacy-focused password manager with AES-256-GCM encryption, biometric authentication, and 100% offline storage. Keep your passwords secure with zero-knowledge architecture. No cloud, no tracking, complete control.",
  keywords: [
    "password manager",
    "secure password storage",
    "offline password manager",
    "AES-256 encryption",
    "biometric authentication",
    "zero-knowledge security",
    "privacy-focused",
    "military-grade encryption",
    "password generator",
    "password organizer",
    "secure credentials",
    "local password storage",
    "open source password manager",
    "Android password manager",
    "iOS password manager",
  ],
  authors: [{ name: "Darpan Neve", url: "https://github.com/DarpanNeve" }],
  creator: "Darpan Neve",
  publisher: "LockBloom",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "LockBloom - Secure Password Manager | Military-Grade Encryption",
    description:
      "Keep your passwords secure with LockBloom - a privacy-focused password manager with AES-256-GCM encryption, biometric authentication, and 100% offline storage.",
    siteName: "LockBloom",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LockBloom - Secure Password Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LockBloom - Secure Password Manager",
    description:
      "Privacy-focused password manager with military-grade encryption. 100% offline, zero-knowledge architecture.",
    images: ["/og-image.png"],
    creator: "@DarpanNeve",
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LockBloom",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "Security",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "LockBloom",
      applicationCategory: "SecurityApplication",
      operatingSystem: "Android, iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "100",
      },
      description:
        "Privacy-focused password manager with AES-256-GCM encryption, biometric authentication, and 100% offline storage.",
      downloadUrl: appUrl,
      screenshot: `${siteUrl}/screenshots/main.png`,
      author: {
        "@type": "Person",
        name: "Darpan Neve",
        url: "https://github.com/DarpanNeve",
      },
      publisher: {
        "@type": "Organization",
        name: "LockBloom",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-512.png`,
        },
      },
      featureList: [
        "AES-256-GCM Encryption",
        "Biometric Authentication",
        "100% Offline Storage",
        "Zero-Knowledge Architecture",
        "Password Generator",
        "Secure Export/Import",
      ],
    },
    {
      "@type": "Organization",
      name: "LockBloom",
      url: siteUrl,
      logo: `${siteUrl}/icon-512.png`,
      sameAs: [
        "https://github.com/DarpanNeve/lockbloom",
        "https://play.google.com/store/apps/details?id=com.dn.lockbloom",
      ],
    },
    {
      "@type": "WebSite",
      name: "LockBloom",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const themeScript = `
  (function() {
    try {
      const storedTheme = localStorage.getItem('lockbloom-theme');
      const theme = storedTheme && ['light', 'dark', 'system'].includes(storedTheme) 
        ? storedTheme 
        : 'system';
      
      const getSystemTheme = () => 
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      
      const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
      
      document.documentElement.classList.add(resolvedTheme);
      document.documentElement.setAttribute('data-theme', resolvedTheme);
    } catch (e) {
      console.error('Theme initialization failed:', e);
      document.documentElement.classList.add('dark');
    }
  })();
`;

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-white dark:bg-black text-zinc-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
