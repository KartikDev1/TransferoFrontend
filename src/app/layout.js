import "./globals.css";
import { Manrope } from "next/font/google";
import AppWrapper from "@/components/AppWrapper";
import MaintenancePage from "./maintenance/page";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// ✅ Correct place for themeColor now
export const viewport = {
  themeColor: "#ffffff",
};

export const metadata = {
  // --- General Metadata ---
  title: "Transfero - Secure File Sharing & File Transfer Tool",
  description:
    "Transfero lets you send and receive large files securely and instantly with QR code and short links. No sign-up required. 100% private.",
  keywords: [
    "file sharing",
    "secure file transfer",
    "send files online",
    "Transfero",
    "share files via QR",
    "quick file transfer",
    "no sign up file sharing",
    "encrypted file transfer",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  // --- Author and Open Graph ---
  authors: [{ name: "Transfero Team", url: "https://transfero.in" }],
  creator: "Transfero",
  metadataBase: new URL("https://transfero.in"),
  openGraph: {
    title: "Transfero - Secure File Sharing & File Transfer Tool",
    description:
      "Send and receive files securely with QR codes and short links using Transfero. Simple, fast, and free.",
    url: "https://transfero.in",
    siteName: "Transfero",
    images: [
      {
        url: "/transfero-logo2.png",
        width: 1200,
        height: 630,
        alt: "Transfero - File Sharing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: "Transfero - Secure File Sharing",
    description:
      "Transfer files instantly and privately with Transfero. QR code, link sharing, and no sign-up required.",
    creator: "@transfero_in",
    images: ["/transfero-logo2.png"],
  },
};

export default function RootLayout({ children }) {
  const maintenanceMode = false;

  return (
    <html lang="en">
      <head>
        {/* ✅ Monetag MultiTag Script */}
        <Script
          src="https://fpyf8.com/88/tag.min.js"
          data-zone="163606"
          async
          data-cfasync="false"
          strategy="afterInteractive"
        />

        {/* ✅ Cloudflare Web Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "200dd28495dc4e08a95905b93e28bedf"}'
        />
      </head>
      <body className={`${manrope.className} bg-[#f5f5fc] text-gray-800`}>
        {maintenanceMode ? (
          <MaintenancePage />
        ) : (
          <AppWrapper>{children}</AppWrapper>
        )}
        <Analytics />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
