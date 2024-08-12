import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="relative z-[2] text-white bg-[#100720]">
      <div
        style={{ background: "linear-gradient(45deg, #100720, transparent)" }}
        className="absolute inset-0 z-[-1] overflow-hidden"
      >
        <img
          src="./bgs/footer-bg.png"
          alt="Footer background"
          className="w-full h-full object-cover object-bottom opacity-50 "
        />
      </div>
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/logo.svg"
              alt="Clientbase Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-bold">Clientbase</span>
          </div>
          <nav className="flex space-x-6">
            <Link href="/features" className="hover:text-gray-300">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
            <Link
              href="mailto:shrit1401@gmail.com?subject=I%20wanted%20to%20talk%20about%20Clientbase%20that%20..."
              className="hover:text-gray-300"
            >
              Support & Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Digital Outbreak. All Rights
            Reserved.
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
