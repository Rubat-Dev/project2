import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Khan",
    role: "Fashion Enthusiast",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "The products are truly premium! The quality exceeded my expectations, and the packaging was just beautiful.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ali Raza",
    role: "Entrepreneur",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I ordered a perfume and watch — both looked luxurious. I’m definitely coming back for more shopping.",
    rating: 4,
  },
  {
    id: 3,
    name: "Hira Ahmed",
    role: "Model",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Absolutely love the dresses collection! The fabric and fit were amazing, felt like true luxury.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-gradient-to-r from-sky-50 via-purple-50 to-pink-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          What Our{" "}
          <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
            Customers Say
          </span>
        </h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Thousands of happy customers have trusted our premium products. Here
          are some of their experiences.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center relative hover:scale-105 transition"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 text-sky-400 opacity-70" />

              {/* Profile Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full border-4 border-sky-200 shadow-md object-cover"
              />

              {/* Name & Role */}
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.name}
              </h3>
              <p className="text-sm text-slate-500">{item.role}</p>

              {/* Stars */}
              <div className="flex justify-center mt-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-4 text-slate-600 italic leading-relaxed">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
