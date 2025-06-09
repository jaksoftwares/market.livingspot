"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 md:p-12 rounded-2xl text-white max-w-3xl w-full mx-auto shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find Your Dream Home with LivingSpot
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover verified rentals, land deals, and real estate listings across Kenya.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center">
          <input
            type="text"
            placeholder="Search location..."
            className="p-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full sm:w-64 focus:outline-none text-black shadow-md"
          />
          <button className="bg-red-500 text-white p-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-red-600 transition">
            <FaSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
