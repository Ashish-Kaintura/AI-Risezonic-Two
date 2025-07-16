import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video1 from "../video/WhatsApp Video 2025-07-07 at 4.55.37 PM.mp4"
const WelcomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-12 bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-100 rounded-full opacity-30 blur-2xl pointer-events-none" />

      <div className=" mx-auto grid md:grid-cols-2 items-stretch gap-12 relative z-10">
        {/* Left Content */}
        <div
          className="bg-black/85 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 border border-white/10 flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Welcome to <span className="text-pink-500">AI.Risezonic</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white mb-6">
            India’s First End-to-End Generative AI Ecosystem for{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent font-semibold">
              Education, Innovation, and Industry Readiness
            </span>
          </p>
          <p className="text-lg text-white mb-4">
            In a world where every tool is getting smarter, every student should
            too.
          </p>
          <p className="text-lg text-white mb-4">
            <span className="font-semibold text-blue-400">AI.Risezonic</span> is
            a next-generation AI innovation company that empowers students,
            educators, institutions, and startups to understand, build, and
            deploy Generative AI tools — across all domains.
          </p>
          <p className="text-lg text-white">
            <span className="font-bold text-pink-400">
              We don't just teach you AI.
            </span>{" "}
            We show you how to use it in Computer Science, Mechanical,
            Electrical, and Electronics.
          </p>
        </div>

        {/* Right Visual Card */}
        <div
          className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between"
          data-aos="fade-left"
        >
          <div className="p-8 flex-1 flex flex-col justify-center text-center md:text-left bg-zinc-900 text-white relative z-10">
            <p className="text-lg mb-6">
              We help you build{" "}
              <span className="font-semibold text-gray-200">
                real projects, real products, and real futures
              </span>{" "}
              — using the power of Generative AI.
            </p>
            <a
              href="#"
              className="inline-block self-center md:self-start bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
            Book Your Seat Now
            </a>
          </div>
          <div className="absolute inset-0 bg-zinc-900 rotate-12  bottom-[8.20rem] w-[900px] right-1 left-2  " />

          {/* Video Section */}
          <div className=" h-48 md:h-56 w-full overflow-hidden">
            <video
             src={video1}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
