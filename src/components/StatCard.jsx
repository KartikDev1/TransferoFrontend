"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsCard({ icon, value, label, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col items-center text-center"
    >
      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
        {icon}
      </div>

      <motion.div
        className="text-3xl font-bold text-gray-900 mb-2"
        initial={{ scale: 0.9 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {value}
      </motion.div>

      <h3 className="text-lg font-medium text-gray-800 mb-2">{label}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </motion.div>
  );
}
