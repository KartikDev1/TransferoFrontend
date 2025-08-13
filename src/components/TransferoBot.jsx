"use client";
import { useState, useEffect } from "react";
import { X, Send, Paperclip } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// SVG icon for a light theme
const CuteBotIcon = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: "drop-shadow(0 0 8px rgba(110, 231, 255, 0.6))" }}
  >
    <defs>
      <linearGradient id="cuteBotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#a78bfa" }} />
        <stop offset="100%" style={{ stopColor: "#38bdf8" }} />
      </linearGradient>
    </defs>
    {/* Body */}
    <path
      d="M25,90 C25,85 75,85 75,90 L75,60 C75,50 65,50 65,50 L35,50 C35,50 25,50 25,60 Z"
      fill="url(#cuteBotGradient)"
    />
    {/* Head */}
    <path
      d="M20,55 C10,45 10,20 25,15 L75,15 C90,20 90,45 80,55 Z"
      fill="url(#cuteBotGradient)"
    />
    {/* Antenna */}
    <line x1="50" y1="15" x2="50" y2="5" stroke="#94a3b8" strokeWidth="3" />
    <circle cx="50" cy="5" r="3" fill="#c7d2fe" />
    {/* Face Screen */}
    <rect x="28" y="28" width="44" height="22" rx="5" fill="#e2e8f0" />
    {/* Eyes */}
    <circle cx="42" cy="40" r="4" fill="#1e293b" />
    <circle cx="58" cy="40" r="4" fill="#1e293b" />
    {/* Smile */}
    <path
      d="M45,46 C48,50 52,50 55,46"
      fill="none"
      stroke="#1e293b"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function TransferoBot() {
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl shadow-gray-400/30 border border-slate-200 overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CuteBotIcon className="w-8 h-8" />
                <h3 className="font-bold text-white text-lg">TransferoBot</h3>
              </div>
              <button
                onClick={toggleMessage}
                className="p-1 text-white hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat body */}
            <div className="p-4 h-80 flex flex-col">
              <div className="flex-grow space-y-4">
                <div className="chat chat-start">
                  {/* Text updated to your new version */}
                  <div className="chat-bubble bg-slate-100 text-slate-800">
                    Heyaaa 👋 I'm TransferoBot, your soon-to-be file-sharing
                    bestie.
                  </div>
                </div>
                <div className="chat chat-start">
                  {/* Text updated to your new version */}
                  <div className="chat-bubble bg-slate-100 text-slate-800">
                    I'm still learning my magic tricks… but I'll be ready to
                    help you in no time ✨
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="flex-shrink-0 pt-2 flex gap-2">
                <button className="btn btn-sm bg-white text-slate-600 hover:bg-slate-100 border border-slate-300">
                  Features
                </button>
                <button className="btn btn-sm bg-white text-slate-600 hover:bg-slate-100 border border-slate-300">
                  Help
                </button>
              </div>
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-sm btn-ghost btn-circle text-slate-500 hover:bg-slate-200"
                  disabled
                >
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="input input-sm bg-white border-slate-300 text-slate-900 w-full focus:ring-2 focus:ring-blue-500 transition"
                  disabled
                />
                <button
                  className="btn btn-sm btn-primary bg-blue-600 hover:bg-blue-500 border-none"
                  disabled
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.button
        onClick={toggleMessage}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`btn btn-circle bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-xl relative ${
          isMobile ? "w-16 h-16" : "w-20 h-20"
        }`}
        animate={{
          scale: isHovered ? 1.15 : 1,
          boxShadow: isHovered
            ? "0 0 25px rgba(59, 130, 246, 0.7)"
            : "0 0 15px rgba(59, 130, 246, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Pulsing dot - POSITION FIXED FOR MOBILE */}
        {!showMessage && (
          <motion.span
            className={`absolute ${
              isMobile ? "top-1 right-1" : "top-2 right-2"
            } w-4 h-4 bg-cyan-300 rounded-full border-2 border-white`}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        <motion.div
          className="flex items-center justify-center w-full h-full"
          animate={{ rotate: showMessage ? 180 : isHovered ? 15 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {showMessage ? (
            <X className="w-8 h-8" />
          ) : (
            <CuteBotIcon className="w-12 h-12" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
