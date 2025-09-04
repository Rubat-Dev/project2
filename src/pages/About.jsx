import React from "react";
import { Award, Users, Target, Heart, Star, ArrowRight } from "lucide-react";

const AboutPage = () => {

  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Only the finest products, carefully sourced and tested to ensure long-lasting quality and luxury.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority — we focus on delivering a seamless shopping journey every time.",
    },
    {
      icon: Users,
      title: "Global Community",
      description:
        "Serving thousands of happy customers worldwide, connecting people through trusted shopping experiences.",
    },
    {
      icon: Target,
      title: "Curated Selection",
      description:
        "From daily essentials to exclusive collections, we handpick products that match your lifestyle.",
    },
  ];
  
  return (
    <section className="min-h-screen bg-white">
      {/* Mission Section */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-md:text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 text-center lg:text-left">
                Built for{" "}
                <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text  text-transparent">
                  Champions
                </span>
              </h2>

              <p className="text-sm sm:text-lg text-slate-600 mb-6 leading-relaxed mx-auto lg:mx-0 text-center lg:text-left max-md:px-5">
                At PremiumMart, we believe shopping should be more than just a
                purchase — it’s an experience. From everyday essentials to
                luxury collections, we bring you products that match your
                lifestyle and elevate your choices.
              </p>

              <p className="text-sm sm:text-lg text-slate-600 mb-8 leading-relaxed  mx-auto lg:mx-0 text-center lg:text-left max-md:px-5">
                Since our launch in 2020, PremiumMart has grown from a small
                online store into a trusted shopping destination serving
                thousands of happy customers worldwide. Our promise remains the
                same: delivering high-quality products, seamless service, and a
                premium shopping experience you deserve.
              </p>

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 text-center">
                {/* Customers */}
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">
                    50K+
                  </div>
                  <div className="text-sm text-slate-600">Happy Customers</div>
                </div>

                {/* Rating */}
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">
                    4.9
                  </div>
                  <div className="text-sm text-slate-600 flex items-center justify-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                    Average Rating
                  </div>
                </div>

                {/* Products */}
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">
                    10K+
                  </div>
                  <div className="text-sm text-slate-600">
                    Products Available
                  </div>
                </div>

                {/* Orders */}
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">
                    200K+
                  </div>
                  <div className="text-sm text-slate-600">Orders Delivered</div>
                </div>
              </div>
            </div>
            {/* right-side */}
            <div className="relative mx-auto">
              <img
                src="https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury Shopping Mall"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-slate-50 px-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="max-sm:text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our {" "} <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text  text-transparent">Values</span>
            </h2>
            <p className="text-md sm:text-xl text-slate-600 max-w-2xl mx-auto font-bold">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:px-5">
            {values.map((value, index) => (
              <div key={index} className="text-center shadow-lg p-5">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
