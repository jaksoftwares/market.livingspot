import { FaSearch, FaHome, FaStar } from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Search",
    description:
      "Browse homes, land, and rentals with filters for pricing, location, and more.",
  },
  {
    icon: FaHome,
    title: "Inspect",
    description:
      "Explore property details, view photos, and arrange visits with ease.",
  },
  {
    icon: FaStar,
    title: "Secure",
    description:
      "Contact owners or agents directly to finalize your ideal space.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">How It Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition text-center"
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
