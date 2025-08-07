import { Inter } from "next/font/google";
import "../globals.css";
import HowItWorks from "@/components/HowItWorks";
import HomeFAQ from "@/components/HomeFAQ";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Transfero - File Sharing",
  description:
    "Secure, fast, and simple file sharing with end-to-end encryption",
};

export default function ShareLayout({ children }) {
  return (
    <div className="your-wrapper-class">
      <Navbar />
      {children}
      <HowItWorks />
      <UseCases />
      <Features />
      <HomeFAQ />
      <Footer />
    </div>
  );
}
