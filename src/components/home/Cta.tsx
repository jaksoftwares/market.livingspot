"use client";

import React from "react";
import Link from "next/link";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Own Property? List It on LivingSpot
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        Reach thousands of active home seekers across Kenya.
      </p>
      <Link href="/list-property">
        <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-red-600 transition">
          Get Started
        </button>
      </Link>
    </section>
  );
};

export default CTASection;
