import { FaCheckCircle, FaUsers, FaHome } from "react-icons/fa";

const features = [
  {
    icon: FaCheckCircle,
    title: "Verified Listings",
    description:
      "All properties are reviewed for authenticity and accuracy before publishing.",
  },
  {
    icon: FaUsers,
    title: "User Reviews",
    description:
      "Make confident decisions based on community feedback and ratings.",
  },
  {
    icon: FaHome,
    title: "Diverse Options",
    description:
      "From studio bedsitters to premium apartments, we’ve got you covered.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Why Choose LivingSpot?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <Icon className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
