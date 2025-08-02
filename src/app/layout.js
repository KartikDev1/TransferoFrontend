// src/app/layout.js
import "./globals.css";
import { Manrope } from "next/font/google";
import AppWrapper from "@/components/AppWrapper";
import Footer from "@/components/Footer";
import MaintenancePage from "./maintenance/page";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
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
  authors: [{ name: "Transfero Team", url: "https://transfero.in" }],
  creator: "Transfero",
  metadataBase: new URL("https://transfero.in"), // updated to custom domain
  openGraph: {
    title: "Transfero - Secure File Sharing & File Transfer Tool",
    description:
      "Send and receive files securely with QR codes and short links using Transfero. Simple, fast, and free.",
    url: "https://transfero.in",
    siteName: "Transfero",
    images: [
      {
        url: "https://transfero.in/transfero-logo2.png", // must be a real image hosted on domain
        width: 1200,
        height: 630,
        alt: "Transfero - File Sharing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transfero - Secure File Sharing",
    description:
      "Transfer files instantly and privately with Transfero. QR code, link sharing, and no sign-up required.",
    creator: "@yourhandle", // optional: replace with real Twitter handle
    images: ["https://transfero.in/transfero-logo2.png"],
  },
};

export default function RootLayout({ children }) {
  const maintenanceMode = true; // 🔧 Toggle this to false to disable maintenance

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${manrope.className} bg-[#f5f5fc] text-gray-800`}>
        {maintenanceMode ? (
          <MaintenancePage /> // 👈 Shows maintenance UI
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
