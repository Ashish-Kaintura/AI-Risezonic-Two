import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMagic, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-white py-24 px-6 md:px-12">
      <div
        className="max-w-7xl mx-auto text-center bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10 md:p-16 border border-blue-100"
        data-aos="fade-up"
      >
        {/* Top Statement */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-snug mb-6">
          AI Is Not the Future — <br className="hidden md:inline" />
          It’s <span className="text-pink-500">Your Present</span>.
        </h2>

        {/* Sub Text */}
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Are you ready to lead it? Whether you’re a{" "}
          <span className="font-semibold text-blue-700">student</span>,{" "}
          <span className="font-semibold text-blue-700">professor</span>,{" "}
          <span className="font-semibold text-blue-700">HOD</span>, or{" "}
          <span className="font-semibold text-blue-700">founder</span> — AI.Risezonic gives you the tools, training, and mindset to go from learner to innovator.
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-blue-200 my-8"></div>

        {/* Bold Impact */}
        <p className="text-xl text-blue-800 font-medium mb-4">
          No jargon. No delays. Just <span className="font-bold text-pink-500">impact</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Link
            to="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <FaMagic className="text-lg" /> Book a Free Consultation
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-700 font-semibold rounded-full bg-white hover:bg-blue-50 hover:scale-105 transition-transform"
          >
            <FaRobot className="text-lg" /> Build Your Own GPT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
