import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Terms & Conditions | Transfero",
  description:
    "Read Transfero's Terms & Conditions to understand the rules, responsibilities, and legal agreements for using our secure file transfer services.",
  keywords:
    "Transfero terms, conditions, file sharing terms, Transfero user agreement, file transfer rules",
};

export default function TermsLayout({ children }) {
  return (
    <section className="min-h-screen bg-gray-50">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
