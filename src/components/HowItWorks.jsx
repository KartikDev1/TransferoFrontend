"use client";
import React from "react";
import {
  Upload,
  Send,
  Clock,
  Zap,
  ShieldCheck,
  Smartphone,
  QrCode,
} from "lucide-react";
import { motion } from "framer-motion";

// This is a placeholder for your App component.
// In a real app, you would import and use the HowItWorks component.
export default function App() {
  return <HowItWorks />;
}

const HowItWorks = () => {
  // Data for the steps section
  const steps = [
    {
      title: "Upload Files",
      description: "Drag & drop or browse to upload your files instantly.",
      icon: <Upload className="w-10 h-10" />,
      color: "text-indigo-500",
    },
    {
      title: "Get a Code",
      description: "Receive a unique code or QR to share with anyone.",
      icon: <QrCode className="w-10 h-10" />,
      color: "text-purple-500",
    },
    {
      title: "Share Securely",
      description: "Recipient uses the code to download the files easily.",
      icon: <Send className="w-10 h-10" />,
      color: "text-emerald-500",
    },
    {
      title: "Auto-Delete",
      description: "Files expire automatically after 5 mins for privacy.",
      icon: <Clock className="w-10 h-10" />,
      color: "text-rose-500",
    },
  ];

  // Data for the features section
  const features = [
    {
      title: "Lightning Fast",
      description: "Blazing fast transfers that don't keep you waiting.",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "End-to-End Encrypted",
      description: "Your privacy is our priority. All transfers are secured.",
      icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
    },
    {
      title: "Mobile Friendly",
      description: "Access and share files on any device, anywhere.",
      icon: <Smartphone className="w-8 h-8 text-lime-500" />,
    },
  ];

  // Animation variants for Framer Motion
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.15,
      },
    }),
  };

  return (
    <main>
      {/* "How It Works" Section */}
      <section className="w-full bg-slate-50 text-slate-800 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Share files in four simple steps. Secure, private, and incredibly
              fast.
            </p>
          </motion.div>

          {/* Steps with Connecting Line */}
          <div className="relative">
            <div
              className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-300/80"
              aria-hidden="true"
            />
            <div className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  custom={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={cardVariants}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-md border-2 border-gray-100">
                    <span className={step.color}>{step.icon}</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      <span className="text-gray-400 font-medium">{`Step ${
                        index + 1
                      }: `}</span>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 px-2">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
