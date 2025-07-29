// src/app/layout.js
import "./globals.css";
import { Manrope } from "next/font/google";
import AppWrapper from "@/components/AppWrapper";

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
  authors: [{ name: "Transfero Team", url: "https://transfero.vercel.app" }],
  creator: "Transfero",
  metadataBase: new URL("https://transfero.vercel.app"),
  openGraph: {
    title: "Transfero - Secure File Sharing & File Transfer Tool",
    description:
      "Send and receive files securely with QR codes and short links using Transfero. Simple, fast, and free.",
    url: "https://transfero.vercel.app",
    siteName: "Transfero",
    images: [
      {
        url: "/transfero-logo2.png", // <-- Replace with your actual OG image path
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
    creator: "@yourhandle", // Optional
    images: ["/transfero-logo2.png"], // Replace with your real path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-[#efeeff] text-gray-800`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
