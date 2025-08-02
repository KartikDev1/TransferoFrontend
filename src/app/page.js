import React from "react";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";

const page = () => {
  return (
    <>
      <Head>
        <title>Transfero - Secure File Sharing & File Transfer Tool</title>
        <meta
          name="description"
          content="Transfero lets you send and receive large files securely and instantly with QR code and short links. No sign-up required. 100% private."
        />
        <meta
          name="keywords"
          content="file sharing, secure file transfer, send files online, Transfero, share files via QR, quick file transfer, no sign up file sharing, encrypted file transfer"
        />
        <meta
          property="og:title"
          content="Transfero - Secure File Sharing & File Transfer Tool"
        />
        <meta
          property="og:description"
          content="Send and receive files securely with QR codes and short links using Transfero. Simple, fast, and free."
        />
        <meta
          property="og:image"
          content="https://transfero.in/transfero-logo2.png"
        />
        <meta property="og:url" content="https://transfero.in" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div>
        <HeroSection />
        <HowItWorks />
      </div>
    </>
  );
};

export default page;
