"use client";

import React from "react";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Is LivingSpot free to use?",
      answer: "Yes, browsing and contacting landlords is completely free for tenants.",
    },
    {
      question: "How do I get in touch with a property owner?",
      answer: "Use the built-in chat or contact features available on every listing.",
    },
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
      </div>
      <div className="max-w-5xl mx-auto space-y-6 px-4">
        {faqs.map(({ question, answer }, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg flex items-center">
              <FaQuestionCircle className="text-red-500 mr-2" />
              {question}
            </h3>
            <p className="mt-2 text-gray-700">{answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/faqs">
          <button className="px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-full shadow hover:bg-red-600 transition">
            View All FAQs
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
