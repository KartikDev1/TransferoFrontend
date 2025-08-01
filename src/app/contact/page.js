"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { Mail, Send, ArrowRight, MessageSquare } from "lucide-react";

const ContactPage = () => {
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              Contact Us
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team. We&#39;re here to help with any
            questions you might have.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Lottie Animation - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block w-full lg:w-1/2"
          >
            <DotLottieReact
              src="https://lottie.host/3f9193da-aa58-4d3d-b23b-fe7b9acf80ea/ak4jEatLQt.lottie"
              loop
              autoplay
              className="w-full h-auto"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-90">
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <MessageSquare size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Send us a message
                  </h2>
                </div>

                <form className="space-y-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all hover:shadow-lg"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-50 text-blue-600">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700">
                        Email us directly
                      </h3>
                      <a
                        href="mailto:transfero1080@gmail.com"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                      >
                        transfero1018@gmail.com <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lottie Animation - Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:hidden w-full mt-12"
          >
            <DotLottieReact
              src="https://lottie.host/3f9193da-aa58-4d3d-b23b-fe7b9acf80ea/ak4jEatLQt.lottie"
              loop
              autoplay
              className="w-full h-64"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
