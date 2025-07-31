// src/app/about/page.js
"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  Laptop,
  Heart,
  Users,
  FileText,
  Sparkles,
} from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description:
        "Ultra-low latency transfers designed to minimize wait times, allowing you to share files instantly.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "End-to-End Secure",
      description:
        "Military-grade encryption to ensure files remain private and protected from unauthorized access.",
    },
    {
      icon: <Globe size={24} />,
      title: "Cross-Platform",
      description:
        "Compatible with Windows, macOS, Android, iOS, and any browser for maximum accessibility.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Zero Setup",
      description:
        "No installations or complicated configurations—start sharing files immediately.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-12 px-4 sm:px-6 lg:px-8 text-base-content">
      <div className="max-w-7xl mx-auto">
        {/* ✅ SEO Heading */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            About Transfero
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Revolutionizing file sharing for the modern digital era with speed,
            security, and simplicity.
          </p>
        </motion.header>

        <section className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Lottie animation */}
          <motion.figure
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <DotLottieReact
              src="https://lottie.host/9afa6eaa-063b-402e-8646-7b223999bccc/ipRyM5bwVA.lottie"
              loop
              autoplay
              className="w-full rounded-xl shadow-2xl"
              aria-label="File sharing animation"
            />
          </motion.figure>

          {/* Textual content */}
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl font-bold">
              The Future of <span className="text-primary">File Sharing</span>
            </h2>

            <p className="text-lg leading-relaxed">
              At <strong className="text-primary">Transfero</strong>, we’re
              transforming how the world shares digital content. Our goal is to
              eliminate friction from file transfers, enabling seamless sharing
              between any devices without compromising on <strong>speed</strong>{" "}
              or <strong>security</strong>. Whether you’re sending important
              business documents, creative projects, or personal files,
              Transfero ensures smooth delivery every time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="card-body p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary bg-opacity-10 text-primary">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-sm opacity-80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.article>
        </section>

        {/* Mission Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl mb-20 bg-gradient-to-r from-blue-600 to-pink-500"
        >
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-white" size={28} />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>

              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Our mission is to make file sharing as simple as a conversation
                — <span className="font-semibold text-white">instant</span>,{" "}
                <span className="font-semibold text-white">intuitive</span>, and{" "}
                <span className="font-semibold text-white">accessible</span> to
                everyone, everywhere. We’re building technology that respects
                your privacy and adapts to any device, network, or environment.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <Smartphone size={18} className="text-white" />
                  <span className="text-white">Mobile Optimized</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <Laptop size={18} className="text-white" />
                  <span className="text-white">Desktop Ready</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <Globe size={18} className="text-white" />
                  <span className="text-white">Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Commitment Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-base-100 rounded-2xl p-8 md:p-12 shadow-xl border border-base-300/50">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-secondary to-primary mb-6">
                <Heart size={32} className="text-white" />
              </div>

              <h2 className="text-3xl font-bold mb-4">Built With Care</h2>

              <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Transfero is developed by a passionate team committed to{" "}
                <strong>digital privacy</strong> and{" "}
                <strong>user experience</strong>. We believe technology should{" "}
                <span className="text-primary font-medium">empower</span> users
                by removing barriers and making secure communication effortless.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-base-200 to-base-100 p-6 rounded-xl border border-base-300/50">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                    <FileText size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Files Shared Daily
                  </h3>
                  <p className="text-4xl font-bold text-primary">1M+</p>
                  <p className="text-sm opacity-80 mt-2">And growing daily</p>
                </div>

                <div className="bg-gradient-to-br from-base-200 to-base-100 p-6 rounded-xl border border-base-300/50">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4 mx-auto">
                    <Users size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Active Users</h3>
                  <p className="text-4xl font-bold text-secondary">500K+</p>
                  <p className="text-sm opacity-80 mt-2">Worldwide network</p>
                </div>
              </div>

              <div className="bg-base-200/50 p-4 rounded-lg inline-block">
                <p className="text-sm font-medium">
                  Join our growing community of satisfied users today!
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
