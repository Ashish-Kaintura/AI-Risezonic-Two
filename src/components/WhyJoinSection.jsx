import React from "react";
import { FaRobot, FaBolt, FaChalkboardTeacher, FaUsers, FaRocket } from "react-icons/fa";

const WhyJoinSection = () => {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-extrabold text-blue-500"
          >
            Why Join Our Programs?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          >
            At <span className="text-pink-500 font-bold">RiseZonic AI</span>, we don’t believe in boring lectures.  
            We believe in hands-on learning, real-world projects, and future-ready skills.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-2 text-gray-400"
          >
            “Whether you're a student, a working professional, or an educator, our AI-driven workshops and bootcamps are designed to help you <span className="text-white font-bold">Learn. Build. Transform.</span>”
          </p>
        </div> */}

        {/* Feature Highlights */}
        {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div
            data-aos="zoom-in-up"
            className="bg-zinc-900 rounded-2xl p-6 border border-blue-800 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-3 text-white">
              Education that Empowers
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm list-inside">
              <li className="flex items-start gap-2">
                <FaBolt className="text-yellow-400 mt-1" /> Build AI chatbots that solve real problems.
              </li>
              <li className="flex items-start gap-2">
                <FaBolt className="text-yellow-400 mt-1" /> Design IoT devices that automate homes and industries.
              </li>
              <li className="flex items-start gap-2">
                <FaBolt className="text-yellow-400 mt-1" /> Craft data dashboards that drive business decisions.
              </li>
              <li className="flex items-start gap-2">
                <FaBolt className="text-yellow-400 mt-1" /> Empower educators with tools that transform classrooms.
              </li>
            </ul>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="bg-zinc-900 rounded-2xl p-6 border border-pink-800 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-3 text-white">
              Immersive AI Experiences
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm list-inside">
              <li className="flex items-start gap-2">
                <FaChalkboardTeacher className="text-green-400 mt-1" /> Faculty Development Programs.
              </li>
              <li className="flex items-start gap-2">
                <FaUsers className="text-purple-400 mt-1" /> AI-Powered Bootcamps & Hackathons.
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="text-blue-400 mt-1" /> Cutting-Edge Workshops on Campus.
              </li>
              <li className="flex items-start gap-2">
                <FaRobot className="text-pink-400 mt-1" /> Tools and skills to lead the AI revolution.
              </li>
            </ul>
          </div>
        </div> */}

        {/* CTA Buttons */}
        {/* <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-all">
            🎯 View All Programs
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-all">
            🎯 Get Early Bird Offer
          </button>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-all">
            🎯 Host a Workshop at Your Campus
          </button>
        </div> */}

        {/* Final Quote */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-4 text-center max-w-7xl mx-auto text-gray-400 text-md"
        >
          <h1 className="py-8 text-2xl uppercase font-semibold">Our Promise</h1>
          <p className="italic">
            “Our programs aren’t just certifications—they are gateways to
            opportunity.”
          </p>
          <p className="mt-4">
            Whether you dream of working in top tech companies, launching your
            own startup, or inspiring the next generation as a certified AI
            educator, <span className="text-white font-bold">AI RiseZonic</span> gives you the knowledge, confidence,
            and connections to make it happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
