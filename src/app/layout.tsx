import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TawkTo } from '@/components/TawkTo';
import { WhatsAppChat } from '@/components/WhatsAppChat';
import CookieConsent from '@/components/CookieConsent';

// Tawk.to script
const tawkScript = `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/6819f82442fe20190ebf8bb5/1iqin2kch';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
})();

// Initialize Tawk.to API
window.Tawk_API = window.Tawk_API || {};
window.Tawk_API.onLoad = function() {
  console.log('Tawk.to loaded successfully');
};`;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const mono = Inter({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Tranzit - Fast & Reliable Delivery",
  description: "Get your packages delivered anywhere in Kenya in minutes. No hidden fees, just fast and reliable service.",
  keywords: "delivery, tranzit, kenya, fast delivery, package delivery",
  authors: [{ name: "Tranzit" }],
  creator: "Tranzit",
  publisher: "Tranzit",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#10B981",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tranzit.com",
    title: "Tranzit - Fast & Reliable Delivery",
    description: "Get your packages delivered anywhere in Kenya in minutes. No hidden fees, just fast and reliable service.",
    siteName: "Tranzit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranzit - Fast & Reliable Delivery",
    description: "Get your packages delivered anywhere in Kenya in minutes. No hidden fees, just fast and reliable service.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <div className={`min-h-screen flex flex-col ${inter.variable} ${sans.variable} ${mono.variable} font-sans`}>
          <Header />
          <CookieConsent />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <script dangerouslySetInnerHTML={{ __html: tawkScript }} />
        <WhatsAppChat />
        <TawkTo />
      </body>
    </html>
  );
}
