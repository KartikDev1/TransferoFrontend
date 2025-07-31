"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Check,
  AlertTriangle,
  Shield,
  Trash2,
  Code,
  RefreshCw,
  Scale,
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

export default function TermsPage() {
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
            <FileText size={32} className="text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using Transfero's file
            transfer services.
          </p>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 sm:p-10 space-y-12">
            <motion.section variants={fadeIn}>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Welcome to <strong className="text-blue-600">Transfero</strong>.
                By using our website, you agree to comply with and be bound by
                the following terms and conditions. Please review them
                carefully.
              </p>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mt-1">
                  <Check size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    1. Acceptance of Terms
                  </h2>
                  <p className="mt-3 text-gray-700">
                    By accessing or using Transfero, you agree to these terms.
                    If you do not agree, please do not use our services.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mt-1">
                  <Code size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    2. Service Description
                  </h2>
                  <p className="mt-3 text-gray-700">
                    Transfero allows users to share files between devices
                    through temporary uploads. We do not provide long-term file
                    storage.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-yellow-100 text-yellow-600 mt-1">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    3. User Conduct
                  </h2>
                  <ul className="mt-3 space-y-2 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>
                        Do not upload harmful, illegal, or copyrighted content
                        without permission
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>
                        Do not use Transfero to spam, harass, or exploit others
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>
                        You are responsible for the content you upload and share
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-red-100 text-red-600 mt-1">
                  <Trash2 size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    4. File Deletion
                  </h2>
                  <p className="mt-3 text-gray-700">
                    Files uploaded to Transfero are stored temporarily and may
                    be automatically deleted after a certain period or download
                    limit.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-purple-100 text-purple-600 mt-1">
                  <Shield size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    5. Intellectual Property
                  </h2>
                  <p className="mt-3 text-gray-700">
                    All content, branding, and software on Transfero belong to
                    us or our licensors. You may not reproduce or redistribute
                    any part without permission.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-gray-100 text-gray-600 mt-1">
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
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    6. Limitation of Liability
                  </h2>
                  <p className="mt-3 text-gray-700">
                    Transfero is provided "as-is" without warranties. We are not
                    liable for any damages or loss arising from use of our
                    service.
                  </p>
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
                    7. Changes to the Terms
                  </h2>
                  <p className="mt-3 text-gray-700">
                    We may update these terms at any time. Continued use of
                    Transfero after changes implies your acceptance.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeIn}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mt-1">
                  <Scale size={18} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    8. Governing Law
                  </h2>
                  <p className="mt-3 text-gray-700">
                    These terms are governed by the laws of India. Any disputes
                    will be handled in the courts of Maharashtra.
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
                    9. Contact
                  </h2>
                  <p className="mt-3 text-gray-700">
                    If you have any questions, contact us at{" "}
                    <a
                      href="mailto:transfero1018@gmail.com"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      transfero1018@gmail.com
                    </a>
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
