"use client";
import React from "react";
import "../styles/Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hero-video"
        poster="/fallback.jpg"
      >
        <source src="videos/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to Roamer's Coffee</h1>
        <p>Awaken Your Senses with Every Sip</p>
        <button>Explore Our Menu</button>
      </motion.div>
    </section>
  );
};

export default Hero;
