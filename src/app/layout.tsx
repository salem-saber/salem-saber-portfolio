import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Script from 'next/script'
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Salem Saber - Senior Backend Engineer Portfolio",
    description:
        "Senior Backend Engineer with 9 years of experience in PHP, Laravel, and scalable system architecture. Expert in DevOps, CI/CD, and high-performance backend solutions.",
    keywords: [
        "Senior Backend Engineer",
        "PHP Developer",
        "Laravel Expert",
        "Backend Architecture",
        "DevOps Engineer",
        "System Architecture",
        "Performance Optimization",
        "CI/CD Pipeline",
        "Docker",
        "Kubernetes",
        "AWS",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "Portfolio",
        "Salem Saber",
    ],
    authors: [{name: "Salem Saber"}],
    openGraph: {
        title: "Salem Saber - Senior Backend Engineer Portfolio",
        description:
            "Senior Backend Engineer with 9 years of experience specializing in PHP, Laravel, and scalable backend systems. Proven track record of 180% delivery improvement and 300% user growth.",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} antialiased`}>
        {/* Google Analytics - inlined to ensure server/client HTML matches */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FLNJCJC4T9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FLNJCJC4T9');
          `}
        </Script>
        {children}
        </body>
        </html>
    );
}
