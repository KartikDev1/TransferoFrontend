"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Wrench, HardHat, Hammer, Rocket } from "lucide-react";

export default function MaintenancePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-50 px-4 py-12 text-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl w-full space-y-10"
        >
          {/* Maintenance-themed Lottie Animation */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex justify-center"
          >
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_qp1q7mct.json"
              background="transparent"
              speed="1"
              style={{ width: "450px", height: "450px" }}
              loop
              autoplay
            ></lottie-player>
          </motion.div>

          {/* Text Content with Glow Effect */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-tight"
            >
              Scheduled Maintenance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              We're upgrading our systems to serve you better. Thank you for
              your patience!
            </motion.p>
          </div>

          {/* Maintenance Status Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-5"
          >
            {[
              {
                icon: <HardHat className="w-8 h-8" />,
                title: "Work Status",
                desc: "In Progress",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Estimated Time",
                desc: "30-60 mins",
                color: "bg-indigo-100 text-indigo-600",
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Maintenance",
                desc: "System Updates",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: <Hammer className="w-8 h-8" />,
                title: "Improvements",
                desc: "Performance Boost",
                color: "bg-violet-100 text-violet-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="card bg-white bg-opacity-90 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Progress with Countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>0%</span>
              <span>75% Complete</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Wrench className="w-4 h-4" />
              <span className="text-sm">Our team is working diligently</span>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
