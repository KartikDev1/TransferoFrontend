import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FAQ | Transfero - Frequently Asked Questions",
  description:
    "Find answers to common questions about Transfero file sharing, security, file limits, storage time, and privacy policies.",
  keywords:
    "Transfero FAQ, file sharing help, Transfero support, file transfer questions, file size limit, secure file transfer, delete files Transfero",
};

export default function FAQLayout({ children }) {
  return (
    <section className="min-h-screen bg-gray-50">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
