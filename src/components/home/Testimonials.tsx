"use client";

import React from "react";

const testimonials = [
  {
    name: "James K.",
    review: "LivingSpot helped me find the perfect house in Nairobi. Super smooth experience!",
  },
  {
    name: "Susan M.",
    review: "Love the transparency. The verified listings saved me from bad deals.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">What Our Users Say</h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {testimonials.map(({ name, review }, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="italic text-gray-700">{review}</p>
            <h4 className="text-right mt-4 font-semibold">- {name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
