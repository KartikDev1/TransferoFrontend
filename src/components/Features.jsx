"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  UploadCloud,
  DownloadCloud,
  Smartphone,
  Clock4,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning-Fast Transfers",
    description:
      "Send and receive files instantly without any delays — optimized for speed.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Privacy-First Design",
    description:
      "No logins, no emails — your data is never tracked or stored unnecessarily.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <UploadCloud className="w-6 h-6" />,
    title: "Easy Uploads",
    description:
      "Upload your files directly from any device with a clean, simple interface.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <DownloadCloud className="w-6 h-6" />,
    title: "QR & Code Access",
    description:
      "Share files using unique codes or QR — fast and intuitive, no accounts needed.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-Friendly",
    description:
      "Works seamlessly on phones and tablets with full responsiveness.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: <Clock4 className="w-6 h-6" />,
    title: "Auto-Delete",
    description:
      "Files auto-delete after 5 min ensure privacy and reduce clutter.",
    color: "bg-teal-100 text-teal-600",
  },
];

const FeatureCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <div className="h-full bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all hover:border-gray-200 group">
        <div
          className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}
          aria-hidden="true"
        >
          {item.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function Features() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary">Transfero</span>?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The simplest, most private way to share files
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, idx) => (
            <FeatureCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
