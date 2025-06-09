"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LandListing {
  title: string;
  location: string;
  price: string;
  img: string;
  link: string;
}

const landListings: LandListing[] = [
  {
    title: "1/8 Acre Plot",
    location: "Kangundo Road, Machakos",
    price: "Ksh 450,000",
    img: "/land1.jpg",
    link: "/land/1",
  },
  {
    title: "50x100 Plot",
    location: "Ruiru, Kiambu",
    price: "Ksh 850,000",
    img: "/land2.jpg",
    link: "/land/2",
  },
  {
    title: "Prime Commercial Land",
    location: "Mombasa Road",
    price: "Ksh 5,000,000",
    img: "/land3.jpg",
    link: "/land/3",
  },
];

const LandForSale: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Land for Sale Across Kenya</h2>
        <p className="mt-2 text-gray-600">
          Explore verified land listings for farming, residential, or commercial use.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {landListings.map(({ title, location, price, img, link }, idx) => (
          <div key={idx} className="bg-white p-5 rounded-lg shadow text-center">
            <Image
              src={img}
              alt={title}
              width={400}
              height={250}
              className="rounded-lg mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600">
              {location}, {price}
            </p>
            <Link href={link} className="text-red-500 mt-3 block hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandForSale;
