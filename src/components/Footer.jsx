import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
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
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Section */}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Transfero</h2>
            <p className="text-gray-600 leading-relaxed">
              Secure file transfers made simple. Fast, reliable, and private.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="group">
                    <div className="flex items-center text-gray-700 hover:text-primary transition-colors">
                      <ArrowRight
                        className="w-3.5 h-3.5 mr-2 text-primary/70"
                        aria-hidden="true"
                      />
                      <span className="text-sm">{link.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 text-sm text-gray-600">
              <div>
                <a
                  href="mailto:transfero1018@gmail.com"
                  className="hover:text-primary transition-colors flex items-start"
                  aria-label="Email us at transfero1018@gmail.com"
                >
                  <Mail
                    className="w-4 h-4 mr-2 mt-0.5 text-primary/70"
                    aria-hidden="true"
                  />
                  <span>transfero1018@gmail.com</span>
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-4 h-4 mr-2 mt-0.5 text-primary/70"
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

          {/* Social Media Links */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="text-gray-500 hover:text-primary p-2 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Transfero. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
