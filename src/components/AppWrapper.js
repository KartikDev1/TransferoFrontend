// src/components/AppWrapper.js
"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import SplashScreen from "./SplashScreen";

export default function AppWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <>
      <Navbar />
      <main className="min-h-screen ">{children}</main>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    </>
  );
}
