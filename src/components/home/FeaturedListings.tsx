"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Listing {
  img: string;
  title: string;
  location: string;
  price: string;
  link: string;
}

const listings: Listing[] = [
  {
    img: "/house.jpg",
    title: "2 Bedroom Apartment",
    location: "Nairobi - Westlands",
    price: "Ksh 15,000/month",
    link: "/property/1",
  },
  {
    img: "/luxury2.jpg",
    title: "1 Bedroom Studio",
    location: "Thika Road",
    price: "Ksh 10,000/month",
    link: "/property/2",
  },
  {
    img: "/luxury2.jpg",
    title: "Studio Bedsitter",
    location: "Kisumu CBD",
    price: "Ksh 8,000/month",
    link: "/property/3",
  },
];

const FeaturedListings: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Featured Listings</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {listings.map(({ img, title, location, price, link }, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <Image
              src={img}
              alt={title}
              width={400}
              height={250}
              className="rounded-lg object-cover mb-4"
              priority={index === 0} // optional: prioritize loading first image
            />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 mt-1">{location}</p>
            <p className="text-red-500 font-semibold mt-1">{price}</p>
            <Link href={link} className="block mt-3 text-red-600 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
