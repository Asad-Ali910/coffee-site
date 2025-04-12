"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1c1c1c] to-[#2e2a26] text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-wider text-[#f5f5f5]">
            Roamer<span className="text-[#d7ccc8]">'s</span> Coffee
          </h2>
          <p className="text-sm text-[#a1887f] mt-2">
            Brewed with story. Served with soul.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-10 text-[#d7ccc8]">
          {["About Us", "Privacy Policy", "Contact", "Terms of Service"].map((link, i) => (
            <a
              key={i}
              href=""
              className="hover:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mb-12">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="bg-[#3e2723] hover:bg-[#5d4037] text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-[#9e9e9e]">
          <p>&copy; {new Date().getFullYear()} Roamer's Coffee. Crafted with ☕ & ❤️.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
