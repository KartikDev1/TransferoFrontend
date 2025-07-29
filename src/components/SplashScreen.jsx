// src/components/SplashScreen.jsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Framer Motion variants for staggered animations
const splashVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after a delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Total splash screen visibility duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }} // Graceful exit animation
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-violet-100 via-white to-indigo-100"
        >
          <motion.div
            variants={splashVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center gap-4 text-center"
          >
            {/* Logo */}
            <motion.div variants={itemVariants}>
              <Image
                src="/transfero-logo2.png"
                alt="Transfero Logo"
                width={120} // Slightly larger for more impact
                height={120}
                priority // Preload the logo image
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-slate-800"
            >
              Transfero
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-md text-slate-600"
            >
              Securely Send Files Instantly
            </motion.p>

            {/* Loading Spinner from DaisyUI */}
            <motion.div variants={itemVariants}>
              <span className="loading loading-spinner loading-md text-indigo-500 mt-4"></span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
