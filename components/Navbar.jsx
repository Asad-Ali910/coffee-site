// components/Navbar.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react"; // lucide icons

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-black/40 py-3 px-4">
      <div className="flex justify-center items-center">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-white text-4xl font-bold tracking-wide">
            <Coffee className="text-amber-500 w-7 h-7" />
            Roamer's Coffee
          </div>
          <span className="text-sm text-amber-200 mt-1 tracking-wide">
            Awaken Your Senses
          </span>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
