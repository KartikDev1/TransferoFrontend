"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#FFE5CC] via-white to-[#DFF5E1]" // lighter pastel saffron & green
        >
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            {/* Logo with floating animation */}
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.8 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 7,
                  stiffness: 100,
                  delay: 0.1,
                },
              }}
              className="relative"
            >
              <Image
                src="/transfero-ind.png"
                alt="Transfero Logo"
                width={140}
                height={140}
                priority
                className="drop-shadow-lg"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#FF9933]/15 -z-10" // softer saffron glow
                initial={{ scale: 0.8 }}
                animate={{
                  scale: 1.2,
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />
            </motion.div>

            {/* Title with character stagger */}
            <motion.div className="overflow-hidden">
              <motion.h1
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                }}
                className="text-4xl font-bold tracking-tight text-[#0C3B2E]"
              >
                {"Transfero".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.3 + i * 0.05,
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            {/* Subtitle with fade-in */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="text-lg text-[#444] max-w-xs"
            >
              Secure, instant file transfers
            </motion.p>

            {/* Animated loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1 },
              }}
              className="flex gap-1 mt-6"
            >
              {["#FFB366", "#000080", "#80CFA9"].map((color, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                  animate={{
                    y: [0, -8, 0],
                    transition: {
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    },
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
