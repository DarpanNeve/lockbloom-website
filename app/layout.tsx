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
    default: "LockBloom - offline Password Manager | Military-Grade Encryption",
    template: "%s | LockBloom",
  },
  description:
    "Secure your digital life with LockBloom. The only 100% offline, privacy-first password manager featuring AES-256-GCM encryption and biometric security. No cloud, no tracking.",
  keywords: [
    "LockBloom",
    "password manager",
    "offline password manager",
    "secure password storage",
    "AES-256 encryption",
    "biometric authentication",
    "zero-knowledge architecture",
    "Android password manager",
    "privacy tool",
    "no cloud password manager",
    "local encryption",
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
    title: "LockBloom - The Offline Password Manager",
    description:
      "Military-grade security, 100% offline. LockBloom keeps your passwords safe with AES-256-GCM encryption and zero-knowledge architecture.",
    siteName: "LockBloom",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LockBloom Security Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LockBloom - Secure & Offline",
    description:
      "Your passwords, strictly yours. 100% offline password manager with military-grade encryption.",
    images: ["/og-image.png"],
    creator: "@DarpanNeve",
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
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
  itunes: {
    appId: "com.dn.lockbloom", // Fallback for some parsers; implies intent
  },
  category: "Security",
  other: {
    "google-play-app": "app-id=com.dn.lockbloom",
  },
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
      description:
        "Privacy-focused password manager with AES-256-GCM encryption, biometric authentication, and 100% offline storage.",
      downloadUrl: appUrl,
      screenshot: `${siteUrl}/screenshots/screenshot.png`,
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
      ],
    },
    {
      "@type": "Organization",
      name: "LockBloom",
      url: siteUrl,
      logo: `${siteUrl}/icon-512.png`,
      sameAs: [
        "https://github.com/DarpanNeve/lockbloom",
        appUrl,
      ],
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
