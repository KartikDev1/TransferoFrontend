import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FileUp,
  FileImage,
  FileLock2,
  FileSearch,
  FileVideo2,
  FileText,
  ArrowRight,
  Mail,
  Menu,
  Twitter,
  Instagram,
  Facebook,
  ChevronRight,
  Zap,
  Shield,
  Clock,
  Users,
  ShieldCheck,
  Scaling,
  Layers,
  PlayCircle,
  Rocket,
  Infinity,
} from "lucide-react";

export const metadata = {
  title: "Transfero – All-in-One File Sharing & Tools",
  description:
    "Professional-grade file management tools with enterprise security",
  keywords: "secure file sharing, PDF tools, media conversion, cloud storage",
  alternates: { canonical: "https://transfero.in" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Transfero – Enterprise File Solutions",
    description: "End-to-end encrypted file management platform",
    images: [
      {
        url: "https://www.transfero.in/transfero-logo2.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/30">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center z-10">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 mb-8 shadow-sm ring-1 ring-blue-200/50 hover:shadow-md transition-shadow animate-[pulse_2s_ease-in-out_infinite]">
            <Zap className="w-5 h-5 mr-2 text-blue-600 animate-[pulse_1.5s_ease-in-out_infinite]" />
            No Signup Required - Start Instantly
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tighter text-slate-900">
            Transfero: Where
            <span className="inline-block sm:inline">Files Move</span>
            <span className="whitespace-nowrap bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Like Magic
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transfero has evolved beyond simple file transfers. Experience
            <span className="font-medium text-blue-600">
              {" "}
              military-secure sharing
            </span>
            ,
            <span className="font-medium text-violet-600">
              {" "}
              intelligent automation
            </span>
            , and
            <span className="font-medium text-teal-600">
              {" "}
              seamless collaboration
            </span>{" "}
            - all with the simplicity you love. No compromises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/share"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                Try Transfero Free
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="#features"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl border-2 border-blue-200 bg-white text-blue-700 hover:bg-blue-50/50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 group"
            >
              <span className="relative z-10 flex items-center">
                See How It Works
                <PlayCircle className="w-5 h-5 ml-2 text-blue-600 transition-transform group-hover:scale-110" />
              </span>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-700">
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm ring-1 ring-blue-100/50">
              <ShieldCheck className="w-4 h-4 mr-2 text-emerald-500" />
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm ring-1 ring-blue-100/50">
              <Rocket className="w-4 h-4 mr-2 text-blue-500" />
              <span>10x Faster Transfers</span>
            </div>
            {/* <div className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm ring-1 ring-blue-100/50">
              <Infinity className="w-4 h-4 mr-2 text-violet-500" />
              <span>No Size Limits</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="bg-gradient-to-br from-slate-50 to-blue-50/50 border-y border-slate-100 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-blue-600 uppercase rounded-full bg-blue-100/50 mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Powerful, <span className="text-blue-600">Secure</span> & Fast
            </h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              Our core features are designed for performance and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Military-Grade Encryption"
              description="End-to-end 256-bit AES encryption for all file transfers and storage, ensuring your data is always secure."
              color="blue"
            />
            <FeatureCard
              icon={<Scaling className="w-6 h-6" />}
              title="Smart Compression"
              description="Our intelligent algorithms reduce file sizes by up to 80% without any noticeable quality loss."
              color="violet"
            />
            <FeatureCard
              icon={<Layers className="w-6 h-6" />}
              title="100+ Format Support"
              description="Seamlessly convert between all major document, image, audio, and video formats with just a few clicks."
              color="teal"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              A Complete <span className="text-primary">File Toolkit</span>
            </h2>
            <p className="text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
              Everything professionals and teams need for secure, efficient file
              management and processing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToolCard
              title="Secure Sharing"
              description="End-to-end encrypted file transfers with customizable links."
              href="/share"
              icon={<FileUp className="w-8 h-8 text-primary" />}
              available
              gradient="from-blue-50 to-blue-100"
            />
            <ToolCard
              title="Media Converter"
              description="Convert between dozens of popular audio and video formats."
              href="/media-convert"
              icon={<FileVideo2 className="w-8 h-8 text-purple-600" />}
              gradient="from-purple-50 to-purple-100"
            />
            <ToolCard
              title="PDF Toolkit"
              description="Merge, split, compress, and edit PDF documents with ease."
              href="/pdf-tools"
              icon={<FileText className="w-8 h-8 text-red-600" />}
              gradient="from-red-50 to-red-100"
            />
            <ToolCard
              title="Image Optimizer"
              description="Compress, resize, and convert images for web and professional use."
              href="/image-tools"
              icon={<FileImage className="w-8 h-8 text-emerald-600" />}
              gradient="from-emerald-50 to-emerald-100"
            />
            <ToolCard
              title="Secure Vault"
              description="Encrypted, password-protected cloud storage for your sensitive files."
              href="/vault"
              icon={<FileLock2 className="w-8 h-8 text-amber-600" />}
              gradient="from-amber-50 to-amber-100"
            />
            <ToolCard
              title="Batch Processor"
              description="Apply actions like conversion or compression to multiple files at once."
              href="/batch"
              icon={<FileSearch className="w-8 h-8 text-indigo-600" />}
              gradient="from-indigo-50 to-indigo-100"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white text-primary shadow-sm mb-4">
              Trust & Reliability
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-primary">Professionals</span>{" "}
              Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our numbers speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary mx-auto mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                Bank-Level
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Security
              </h3>
              <p className="text-gray-500 text-sm">
                Your files are protected like financial transactions
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary mx-auto mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                99.99%
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Uptime</h3>
              <p className="text-gray-500 text-sm">
                Available whenever you need it
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary mx-auto mb-4">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Users</h3>
              <p className="text-gray-500 text-sm">
                Files shared with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="relative bg-slate-50 rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-tr from-blue-200 to-violet-200 rounded-full blur-3xl opacity-40"></div>
            <div className="relative text-center p-12 z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight">
                Ready to transform your workflow?
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Join thousands of professionals who trust Transfero for secure
                and efficient file management.
              </p>
              <Link
                href="/share"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:scale-105"
              >
                Get Started - It&apos;s Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

//FUNCTIONALITY//////////

// Updated FeatureCard with a cleaner look
function FeatureCard({ icon, title, description, color }) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div
        className={`w-14 h-14 rounded-xl bg-${color}-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-${color}-200/80`}
      >
        {React.cloneElement(icon, { className: `w-8 h-8 text-${color}-600` })}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

// Updated ToolCard with a cleaner look
function ToolCard({ title, description, href, icon, available }) {
  return (
    <Link
      href={available ? href : "#"}
      className={`group relative flex flex-col justify-between bg-white p-6 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 ${
        !available ? "cursor-not-allowed" : ""
      }`}
    >
      <div className={`${!available ? "opacity-50" : ""}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-blue-100 group-hover:text-blue-600">
            {icon}
          </div>
          {!available && (
            <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
              Coming Soon
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold mb-2 text-slate-900">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
      {available && (
        <div className="mt-4 text-sm font-semibold text-blue-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Use Tool{" "}
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </Link>
  );
}

function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/terms-of-service", label: "Terms" },
    { href: "/privacy-policy", label: "Privacy" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/transfero-logo2.png" // This should be your blue/violet logo
              alt="Transfero Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Transfero
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative px-4 py-2 group text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                {label}
                <span className="absolute bottom-1 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
              <Menu className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms", href: "/terms-of-service" },
    { name: "Privacy", href: "/privacy-policy" },
  ];

  const socialLinks = [
    {
      icon: <Twitter size={18} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Facebook size={18} />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Mail size={18} />,
      href: "mailto:transfero1018@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-3" aria-label="Transfero Home">
              <Image
                src="/favicon.ico"
                alt="Transfero Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
                priority
              />
            </Link>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Transfero
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Secure file transfers made simple. Fast, reliable, and private.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group">
                    <div className="flex items-center text-slate-700 hover:text-blue-600 transition-colors">
                      <ArrowRight
                        className="w-3.5 h-3.5 mr-2 text-blue-600/70"
                        aria-hidden="true"
                      />
                      <span className="text-sm">{link.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 text-sm text-slate-600">
              <div>
                <a
                  href="mailto:transfero1018@gmail.com"
                  className="hover:text-blue-600 transition-colors flex items-start"
                  aria-label="Email us at transfero1018@gmail.com"
                >
                  <Mail
                    className="w-4 h-4 mr-2 mt-0.5 text-blue-600/70"
                    aria-hidden="true"
                  />
                  <span>transfero1018@gmail.com</span>
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-4 h-4 mr-2 mt-0.5 text-blue-600/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Mumbai, India</span>
              </div>
            </address>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="text-slate-500 hover:text-blue-600 p-2 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-100 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Transfero. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
