import React from "react";

const FAQ = () => {
  return (
    <section className="py-16">
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-600 font-semibold">
            Quick answers to common questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 
            transition duration-300 transform hover:scale-105 
            hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:shadow-xl group">
            <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-white transition duration-300">
              What's your return policy?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed group-hover:text-white transition duration-300">
              We offer a 30-day return policy for all unused items in original
              packaging. Returns are free for orders over $75.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 
            transition duration-300 transform hover:scale-105 
            hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:shadow-xl group">
            <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-white transition duration-300">
              How long does shipping take?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed group-hover:text-white transition duration-300">
              Standard shipping takes 3-5 business days. Express shipping (1-2
              days) is available for an additional fee.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 
            transition duration-300 transform hover:scale-105 
            hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:shadow-xl group">
            <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-white transition duration-300">
              Do you offer size exchanges?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed group-hover:text-white transition duration-300">
              Yes! We offer free size exchanges within 30 days. Use our size
              guide to find the perfect fit, or contact us for personalized
              sizing help.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 
            transition duration-300 transform hover:scale-105 
            hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:shadow-xl group">
            <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-white transition duration-300">
              Are your products authentic?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed group-hover:text-white transition duration-300">
              All products are sourced directly from manufacturers and
              authorized distributors. We guarantee 100% authenticity on
              everything we sell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
