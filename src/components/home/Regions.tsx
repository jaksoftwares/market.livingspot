"use client";

import React from "react";

const regions = [
  "Nairobi",
  "Thika",
  "Juja",
  "Eldoret",
  "Mombasa",
  "Nakuru",
  "Kisumu",
];

const RegionsWeCover: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Regions We Cover</h2>
      <p className="text-gray-600 mb-10">
        Expanding rapidly — currently available in these major towns and cities:
      </p>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {regions.map((region) => (
          <div
            key={region}
            className="px-5 py-2 bg-red-100 text-red-700 font-medium rounded-full shadow-sm hover:shadow transition"
          >
            {region}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegionsWeCover;
