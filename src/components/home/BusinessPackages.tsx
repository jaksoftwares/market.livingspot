import React from "react";

type Plan = {
  title: string;
  price: string;
  features: string[];
};

const plans: Plan[] = [
  {
    title: "Basic",
    price: "Free",
    features: ["List up to 3 properties", "Email inquiries", "Basic support"],
  },
  {
    title: "Pro",
    price: "Ksh 999/mo",
    features: ["Unlimited listings", "Priority visibility", "Dashboard tools"],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Custom branding", "Dedicated support", "Agency dashboard"],
  },
];

const ListingPlans: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Choose Your Listing Plan</h2>
        <p className="text-gray-600 mt-2">
          Flexible plans for individual landlords, agents, and property companies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {plans.map(({ title, price, features }, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-2xl text-red-500 my-4">{price}</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              {features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListingPlans;
