"use client";
import React from "react";

const origins = [
  {
    region: "Ethiopia 🇪🇹",
    notes: "Floral, citrus, ancient roots.",
    details:
      "Birthplace of coffee. Grown at high altitudes with heirloom varietals, offering jasmine aroma and tea-like body.",
  },
  {
    region: "Colombia 🇨🇴",
    notes: "Chocolatey, nutty, perfectly balanced.",
    details:
      "Grown in the Andes, Colombian beans are washed-processed for clarity. Renowned for their smooth sweetness and balance.",
  },
  {
    region: "Indonesia 🇮🇩",
    notes: "Earthy, rich, volcanic essence.",
    details:
      "Sumatran coffee is wet-hulled, giving it a distinct earthy and bold profile. Dense, syrupy, and spicy in character.",
  },
  {
    region: "Kenya 🇰🇪",
    notes: "Berry brightness with a bold body.",
    details:
      "Known for its AA beans, Kenya produces vibrant coffees with winey acidity and blackcurrant or berry flavors.",
  },
];

const CoffeeOrigins = () => {
  return (
    <section className="bg-[#fefaf6] py-20 px-6">
      <h2 className="text-4xl font-semibold text-center mb-4 text-[#4e342e]">
        🌍 Coffee Origins
      </h2>
      <p className="text-center text-[#6d4c41] max-w-2xl mx-auto mb-12 text-base">
        From ancient mountains to volcanic soils, explore the stories behind the beans that awaken your mornings.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {origins.map((origin, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-[#e0d6cf] shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold text-[#5d4037] mb-1">{origin.region}</h3>
            <p className="text-[#8d6e63] text-sm italic mb-2">{origin.notes}</p>
            <p className="text-[#6d4c41] text-sm leading-relaxed">{origin.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoffeeOrigins;
