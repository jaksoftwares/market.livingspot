"use client";

import React from "react";
import { FaCheckCircle, FaHome, FaUsers } from "react-icons/fa";

interface MarketingFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: MarketingFeature[] = [
  {
    icon: FaHome,
    title: "Upload Listings",
    description: "Easily upload homes, land, or buildings for rent or sale.",
  },
  {
    icon: FaUsers,
    title: "Reach More Clients",
    description: "Get seen by thousands of people actively searching for property.",
  },
  {
    icon: FaCheckCircle,
    title: "Manage Inquiries",
    description: "Respond to interest directly from your dashboard.",
  },
];

const RealEstateMarketing: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Market Your Property Professionally</h2>
        <p className="mt-2 text-gray-600">
          Whether you&apos;re a landlord, agent, or property owner, LivingSpot helps you reach the right audience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center px-4">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
            <Icon className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealEstateMarketing;
