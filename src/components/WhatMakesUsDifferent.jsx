import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLayerGroup,
  FaTools,
  FaProjectDiagram,
  FaClipboardCheck,
  FaMicrochip,
} from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const WhatMakesUsDifferent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto bg-blue-50 py-16 px-6 md:px-12 rounded-lg shadow-lg my-16">
      <h2
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center flex justify-center items-center gap-3"
        data-aos="fade-up"
      >
        <HiLightningBolt className="text-pink-500 text-4xl" />
        What Makes Us Different?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Point 1 */}
        <div
          className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <FaLayerGroup className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Training + Product + Incubation
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Not just courses — we help you build & launch AI products, too.
          </p>
        </div>

        {/* Point 2 */}
        <div
          className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaMicrochip className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Multi-Domain AI Expertise
          </h3>
          <p className="text-sm text-gray-600 text-center">
            CS, Mechanical, Electrical & Electronics — all AI-ready.
          </p>
        </div>

        {/* Point 3 */}
        <div
          className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaProjectDiagram className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Hands-On Project-Based Learning
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Work on real apps, deployable tools, and working models.
          </p>
        </div>

        {/* Point 4 */}
        <div
          className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaClipboardCheck className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Real-World Use Cases
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Solve actual industry problems — not just academic demos.
          </p>
        </div>

        {/* Point 5 */}
        <div
          className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaTools className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Domain-Specific GPTs
          </h3>
          <p className="text-sm text-gray-600 text-center">
            We build GPTs that speak your industry’s tone, culture & language.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
