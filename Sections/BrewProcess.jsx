"use client";
import React from "react";

const steps = [
  {
    title: "The Bean Awakens",
    desc: "High in misty hills, beans begin their journey under golden dawns.",
  },
  {
    title: "The Sacred Grind",
    desc: "Through artisan mills, beans release their hidden aroma and secrets.",
  },
  {
    title: "The Alchemy of Water",
    desc: "Hot water meets the grounds, stirring ancient brewing magic.",
  },
  {
    title: "The Golden Pour",
    desc: "Smooth liquid silk flows, filling cups with warm anticipation.",
  },
  {
    title: "The First Sip",
    desc: "A ritual complete. Warmth floods the senses. Peace in a cup.",
  },
];

const BrewProcess = () => {
  return (
    <section className="bg-[#fcf8f4] py-20 px-4">
      <h2 className="text-center text-4xl font-bold text-[#5d4037] mb-16">
        ☕ The Brewing Ritual
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-[#efebe9] relative overflow-hidden"
          >
            {/* Step number badge */}
            <div className="absolute -top-3 -left-3 bg-[#d7ccc8] text-white text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full shadow">
              {index + 1}
            </div>

            <h3 className="text-lg font-semibold text-[#4e342e] mb-2 mt-2 pl-6">
              {step.title}
            </h3>
            <p className="text-[#6d4c41] text-sm leading-relaxed pl-6">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrewProcess;
