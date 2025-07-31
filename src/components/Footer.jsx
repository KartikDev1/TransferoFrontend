import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-[#f5f5fc] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + Description */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600">Transfero</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Transfer files securely and seamlessly between devices. Simple.
              Fast. Reliable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about">
                  <span className="hover:text-indigo-600">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-indigo-600">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="hover:text-indigo-600">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <span className="hover:text-indigo-600">
                    Terms & Conditions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <span className="hover:text-indigo-600">Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
              Contact
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto: transfero1018@gmail.com"
                  className="hover:text-indigo-600"
                >
                  transfero1018@gmail.com
                </a>
              </li>
              <li>Location: Mumbai, India</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-gray-600">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto: transfero1018@gmail.com"
                className="hover:text-indigo-600"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Transfero. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
