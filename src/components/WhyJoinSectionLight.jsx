import React from "react";
import {
  FaRobot,
  FaBolt,
  FaChalkboardTeacher,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const WhyJoinSectionLight = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6 relative z-10">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="triangle"
          style={{ top: "20%", left: "10%", animationDelay: "0s" }}
        ></div>
        <div
          className="triangle"
          style={{ top: "50%", left: "30%", animationDelay: "1s" }}
        ></div>
        <div
          className="triangle"
          style={{ top: "70%", left: "60%", animationDelay: "2s" }}
        ></div>
        <div
          className="triangle"
          style={{ top: "30%", left: "80%", animationDelay: "3s" }}
        ></div>
        <div
          className="triangle"
          style={{ top: "40%", left: "10%", animationDelay: "4s" }}
        ></div>
        <div
          className="triangle"
          style={{ top: "60%", left: "30%", animationDelay: "5s" }}
        ></div>
        <div
          className="triangle"
          style={{ top: "55%", left: "60%", animationDelay: "6s" }}
        ></div>
        <div
          className="triangle"
          style={{ top: "25%", left: "80%", animationDelay: "7s" }}
        ></div>
        <div
          className="triangle"
          style={{ top: "10%", left: "50%", animationDelay: "8s" }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-extrabold text-blue-700"
          >
            Why Join Our Programs?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto"
          >
            At <span className="text-pink-600 font-bold">RiseZonic AI</span>, we
            don’t believe in boring lectures. We believe in hands-on learning,
            real-world projects, and future-ready skills.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-2 text-gray-500"
          >
            “Whether you're a student, a working professional, or an educator,
            our AI-driven workshops and bootcamps are designed to help you{" "}
            <span className="text-gray-800 font-bold">
              Learn. Build. Transform.
            </span>
            ”
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div
            data-aos="fade-right"
            className="bg-gray-50 rounded-2xl p-6 border border-blue-200 shadow-md"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Education that Empowers
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm list-inside">
              <li className="flex items-start gap-2">
                <FaBolt className="text-yellow-500 mt-1" /> Build AI chatbots
                that solve real problems.
              </li>
              <li className="flex items-start gap-2">
                <FaBolt className="text-yellow-500 mt-1" /> Design IoT devices
                that automate homes and industries.
              </li>
              <li className="flex items-start gap-2">
                <FaBolt className="text-yellow-500 mt-1" /> Craft data
                dashboards that drive business decisions.
              </li>
              <li className="flex items-start gap-2">
                <FaBolt className="text-yellow-500 mt-1" /> Empower educators
                with tools that transform classrooms.
              </li>
            </ul>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="bg-gray-50 rounded-2xl p-6 border border-pink-200 shadow-md"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Immersive AI Experiences
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm list-inside">
              <li className="flex items-start gap-2">
                <FaChalkboardTeacher className="text-green-500 mt-1" /> Faculty
                Development Programs.
              </li>
              <li className="flex items-start gap-2">
                <FaUsers className="text-purple-500 mt-1" /> AI-Powered
                Bootcamps & Hackathons.
              </li>
              <li className="flex items-start gap-2">
                <FaRocket className="text-blue-500 mt-1" /> Cutting-Edge
                Workshops on Campus.
              </li>
              <li className="flex items-start gap-2">
                <FaRobot className="text-pink-500 mt-1" /> Tools and skills to
                lead the AI revolution.
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:scale-105 transition-all">
            🎯 View All Programs
          </button>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:scale-105 transition-all">
            🎯 Get Early Bird Offer
          </button>
          <button className="bg-yellow-400 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:scale-105 transition-all">
            🎯 Host a Workshop at Your Campus
          </button>
        </div>

        {/* Final Quote */}
        {/* <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-16 text-center max-w-4xl mx-auto text-gray-600 text-md"
        >
          <p className="italic">
            “Our programs aren’t just certifications—they are gateways to
            opportunity.”
          </p>
          <p className="mt-4">
            Whether you dream of working in top tech companies, launching your
            own startup, or inspiring the next generation as a certified AI
            educator, <span className="text-gray-900 font-bold">RiseZonic AI</span> gives you the knowledge, confidence,
            and connections to make it happen.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default WhyJoinSectionLight;
