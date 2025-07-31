"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Cookie,
  RefreshCw,
  Mail,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-blue-50 mb-6">
            <ShieldCheck size={32} className="text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trust is important to us. This policy explains how we protect
            your data and ensure secure file transfers.
          </p>
        </motion.div>

        {/* Policy Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 sm:p-10 space-y-12">
            <motion.section variants={fadeIn}>
              <p className="mb-6 text-gray-700 leading-relaxed">
                At <strong className="text-blue-600">Transfero</strong>, we are
                committed to protecting your personal data and maintaining
                transparency in how your information is handled. This Privacy
                Policy explains what data we collect, how we use it, and how we
                keep it secure.
              </p>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mt-1">
                  <Lock size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    1. Information We Collect
                  </h2>
                  <ul className="mt-3 space-y-2 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Uploaded files (temporarily stored)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Usage analytics (non-identifiable data)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>IP address and browser type (for security)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-indigo-100 text-indigo-600 mt-1">
                  <RefreshCw size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    2. How We Use Your Information
                  </h2>
                  <ul className="mt-3 space-y-2 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500">•</span>
                      <span>
                        To facilitate secure file transfer between devices
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500">•</span>
                      <span>
                        To enhance platform performance and user experience
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-500">•</span>
                      <span>
                        To detect and prevent abuse, spam, or fraudulent
                        activity
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mt-1">
                  <EyeOff size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    3. File Storage & Security
                  </h2>
                  <p className="mt-3 text-gray-700">
                    Files are stored temporarily and automatically removed after
                    a set period. We use strong encryption and access control to
                    ensure data security.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-purple-100 text-purple-600 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    4. Sharing of Information
                  </h2>
                  <p className="mt-3 text-gray-700">
                    We do not sell or rent your personal data to any third
                    parties. Data may only be shared if required by applicable
                    law or legal processes.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-yellow-100 text-yellow-600 mt-1">
                  <Cookie size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    5. Cookies & Tracking
                  </h2>
                  <p className="mt-3 text-gray-700">
                    We use cookies to improve your browsing experience, analyze
                    traffic, and personalize services. You can adjust cookie
                    settings in your browser.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-red-100 text-red-600 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    6. Third-Party Services
                  </h2>
                  <p className="mt-3 text-gray-700">
                    Our platform may use trusted third-party services (such as
                    analytics or advertising platforms). These services may
                    collect anonymous data for improving functionality and
                    performance.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mt-1">
                  <RefreshCw size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    7. Updates to This Policy
                  </h2>
                  <p className="mt-3 text-gray-700">
                    We may revise this Privacy Policy from time to time. Any
                    updates will be posted on this page with a revised date.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-gray-100 text-gray-600 mt-1">
                  <Mail size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    8. How to Learn More
                  </h2>
                  <p className="mt-3 text-gray-700">
                    To better understand our commitment to security, please
                    review our{" "}
                    <a
                      href="/terms-of-service"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Terms of Service
                    </a>
                    .
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </motion.div>
      </div>
    </div>
  );
}
