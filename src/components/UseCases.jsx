// components/UseCases.jsx
"use client";
// components/UseCases.jsx
import { Laptop, Users, Briefcase, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Students & Colleges",
    description:
      "Easily send files between lab PCs and phones without logging into WhatsApp or email.",
    color: "from-blue-500 to-blue-400",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Remote Teams",
    description:
      "Share files quickly during online meetings without worrying about account sign-ins.",
    color: "from-emerald-500 to-emerald-400",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Freelancers & Creators",
    description:
      "Send design files, documents, and assets to clients securely with no sign-up hassle.",
    color: "from-violet-500 to-violet-400",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Privacy-Conscious Users",
    description:
      "Transfer files without leaving behind login traces or exposing personal accounts.",
    color: "from-rose-500 to-rose-400",
  },
];

const UseCaseCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <div className="h-full bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group hover:border-gray-200 cursor-default select-text">
        <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
        <div className="p-6">
          <div
            className={`mb-4 w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
          >
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 select-text">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed select-text">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function UseCases() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          Use Cases
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Who Is <span className="text-primary">Transfero</span> For?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Designed for seamless file sharing across these scenarios
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {useCases.map((item, idx) => (
          <UseCaseCard key={idx} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}
