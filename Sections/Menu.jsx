'use client';

import React, { useState } from "react";
import Skeleton from "@/components/Skeleton";
import Image from "next/image";
import { motion } from "framer-motion";

const Menu = ({ menuData }) => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const loading = !menuData || menuData.length === 0;

  return (
    <section id="menu" className={`py-12 px-4 bg-gray-100 ${loading ? "pointer-events-none" : ""}`}>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        ☕ Our Signature Coffee
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className="bg-white rounded-xl shadow p-4" key={index}>
                <Skeleton className="w-full h-40 mb-4" />
                <Skeleton className="h-4 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-4 w-5/6 mx-auto mb-2" />
                <Skeleton className="h-4 w-1/4 mx-auto" />
              </div>
            ))
          : menuData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden max-w-sm mx-auto"
              >
                <div className="bg-yellow-100">
                  {imageErrors[index] ? (
                    <div className="h-48 flex items-center justify-center text-gray-500 text-sm p-4">
                      {item.title || "Image failed to load"}
                    </div>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                      onError={() => handleImageError(index)}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <span className="text-blue-600 text-lg font-bold">${item.price}</span>
                </div>
              </motion.div>
            ))}
      </div>
    </section>
  );
};

export default Menu;
