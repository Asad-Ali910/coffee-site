"use client";
import React from "react";
import { motion } from "framer-motion";

const VibeWall = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] bg-[#fdf8f3] text-[#1a1a1a] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide leading-tight">
          “Coffee is a language in itself.”
        </h2>
        <p className="text-lg text-gray-600 italic">
          — A daily ritual, a moment to roam and dream.
        </p>
      </motion.div>
    </section>
  );
};

export default VibeWall;
