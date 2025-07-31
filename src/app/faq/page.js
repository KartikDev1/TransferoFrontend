"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  FileText,
  Lock,
  Clock,
  Share2,
  User,
  Shield,
  HardDrive,
  Trash2,
  Mail,
  Zap,
} from "lucide-react";

const faqs = [
  {
    question: "What is Transfero?",
    answer:
      "Transfero is a fast and secure file transfer service that allows you to share files between mobile and PC with ease. No sign-up required.",
    icon: <FileText size={20} className="text-blue-500" />,
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, Transfero is completely free to use for sending and receiving files.",
    icon: <Zap size={20} className="text-green-500" />,
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No, you do not need to register or sign in to use Transfero. Just upload and share the link.",
    icon: <User size={20} className="text-purple-500" />,
  },
  {
    question: "How long are the files stored?",
    answer:
      "Files are stored temporarily and automatically deleted after 24 hours or after the download limit is reached, whichever comes first.",
    icon: <Clock size={20} className="text-yellow-500" />,
  },
  {
    question: "Are my files secure?",
    answer:
      "Yes, files are encrypted during transfer and only those with the link can access them. We do not share or analyze your files.",
    icon: <Lock size={20} className="text-red-500" />,
  },
  {
    question: "Is there a file size limit?",
    answer:
      "Yes, the maximum file size allowed is typically up to 2 GB per transfer. Larger file support will be available in future updates.",
    icon: <HardDrive size={20} className="text-indigo-500" />,
  },
  {
    question: "Can I share files with multiple people?",
    answer:
      "Yes, you can send the same download link to multiple people. Anyone with the link can access and download the file.",
    icon: <Share2 size={20} className="text-teal-500" />,
  },
  {
    question: "Can I delete a file manually?",
    answer:
      "Currently, files are deleted automatically. We plan to add a manual delete option in a future version.",
    icon: <Trash2 size={20} className="text-gray-500" />,
  },
  {
    question: "Do you store any user data?",
    answer:
      "We do not collect personal data. Basic analytics may be used to improve the service, but we respect your privacy fully.",
    icon: <Shield size={20} className="text-pink-500" />,
  },
  {
    question: "How can I contact support?",
    answer: (
      <>
        You can reach us at{" "}
        <a
          href="mailto:transfero1018@gmail.com"
          className="text-blue-600 hover:underline font-medium"
        >
          transfero1018@gmail.com
        </a>
      </>
    ),
    icon: <Mail size={20} className="text-orange-500" />,
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about Transferoo
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="p-2 rounded-full bg-opacity-10"
                    style={{
                      backgroundColor: `${
                        faq.icon.props.className.split("text-")[1].split("-")[0]
                      }-100`,
                    }}
                  >
                    {faq.icon}
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h2>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600">
                      {typeof faq.answer === "string" ? (
                        <p>{faq.answer}</p>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-xl shadow-sm p-6 max-w-2xl">
            <h3 className="text-xl font-semibold mb-3">Still need help?</h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Our team is happy to help.
            </p>
            <a
              href="mailto:transfero1018@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              <Mail size={18} className="mr-2" />
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
