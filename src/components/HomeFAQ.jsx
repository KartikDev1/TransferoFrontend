import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How does Transfero work?",
    answer:
      "Transfero lets you send or receive files using a unique code or QR. No signup needed - just share the code and your files are on their way.",
  },
  {
    id: 2,
    question: "Is Transfero free?",
    answer:
      "Yes, all features are completely free to use with no hidden costs. We may introduce premium features in the future, but core functionality will remain free.",
  },
  {
    id: 3,
    question: "How long are files stored?",
    answer:
      "Files are temporarily stored for 5 min to ensure successful delivery, then automatically deleted from our servers for your privacy and security.",
  },
  {
    id: 4,
    question: "What file types are supported?",
    answer:
      "Transfero supports all common file types including documents, images, videos, and archives. There's a 50MB limit per file transfer.",
  },
  {
    id: 5,
    question: "Is my data secure?",
    answer:
      "Absolutely. All transfers are encrypted end-to-end, and files are automatically purged after 5 min. We never access your files.",
  },
];

const FAQItem = ({ faq, isActive, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`border-b border-gray-100 pb-5 ${
        index !== faqs.length - 1 ? "mb-5" : ""
      }`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-start gap-4 focus:outline-none"
        aria-expanded={isActive}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <h3
          className={`text-left text-lg font-medium ${
            isActive ? "text-indigo-600" : "text-gray-700"
          }`}
          itemProp="name"
        >
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          className={`p-1 rounded-full ${
            isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-500"
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            id={`faq-answer-${faq.id}`}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              <p className="pt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function HomeFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      className="max-w-3xl mx-auto px-5 py-20 md:py-24"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Common questions about our simple file transfer service
        </p>
      </motion.div>

      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isActive={activeIndex === idx}
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            index={idx}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="/faq"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors group"
          aria-label="View all frequently asked questions"
        >
          View all questions
          <span
            className="ml-2 group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          >
            <ChevronDown className="w-5 h-5 rotate-90" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
