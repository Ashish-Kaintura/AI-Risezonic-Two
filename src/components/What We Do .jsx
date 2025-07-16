import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGraduationCap,
  FaDesktop,
  FaCogs,
  FaPlug,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-24 px-4 md:px-12 text-white overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/18069785/18069785-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay with darker opacity for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80 backdrop-blur-sm"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-pink-400 mb-6 flex items-center justify-center gap-3"
          data-aos="fade-up"
        >
          <FaLightbulb className="text-pink-300" />
          What We Do
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl font-medium text-white mb-12 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We offer practical, hands-on Generative AI training across a wide
          range of disciplines — because AI isn’t just for coders, it’s for
          creators, engineers, analysts, and everyone in between.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-10 text-left max-w-5xl mx-auto">
          {/* Left Side: Domain List */}
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <FaGraduationCap className="text-pink-300" />
              Generative AI Training for All Domains
            </h3>
            <ul className="space-y-4 text-white text-[1rem] leading-relaxed ">
              <li className="flex items-start gap-3 bg-white/10 p-2 px-4 rounded-lg border-white/10 backdrop-blur-lg border-2 border-white">
                <FaDesktop className="text-pink-300 mt-1 text-xl" />
                <span>
                  <strong>Computer Science</strong> – LLMs, RAG, LangChain,
                  Prompt Engineering
                </span>
              </li>
              <li className="flex items-start gap-3  bg-white/10 p-2 px-4 rounded-lg border-white/10 backdrop-blur-lg border-2 border-white">
                <FaCogs className="text-pink-300 mt-1 text-xl" />
                <span>
                  <strong>Mechanical Engineering</strong> – Robotics, predictive
                  maintenance, simulation automation
                </span>
              </li>
              <li className="flex items-start gap-3  bg-white/10 p-2 px-4 rounded-lg border-white/10 backdrop-blur-lg border-2 border-white">
                <FaPlug className="text-pink-300 mt-1 text-xl" />
                <span>
                  <strong>Electrical & Electronics</strong> – IoT + AI,
                  voice-controlled systems, sensor data analysis
                </span>
              </li>
              <li className="flex items-start gap-3  bg-white/10 p-2 px-4 rounded-lg border-white/10 backdrop-blur-lg border-2 border-white">
                <FaTools className="text-pink-300 mt-1 text-xl" />
                <span>
                  <strong>Non-tech Streams</strong> – Content, finance, design,
                  law, HR — all AI-enhanced
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side: Our Approach */}
          <div
            className="bg-white/10 rounded-2xl p-8 shadow-xl border border-white/10 backdrop-blur-lg"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h4 className="text-xl font-semibold text-pink-300 mb-4">
              Our Approach?
            </h4>
            <p className="text-lg text-gray-100 mb-3">
              <strong className="text-white text-xl">
                Code + Context + Creativity.
              </strong>
            </p>
            <p className="text-gray-200 leading-relaxed">
              We don’t just teach tools — we teach <em>how AI thinks</em>, and
              how to use it meaningfully. Our programs combine coding,
              real-world problems, and design thinking to help you innovate in
              your own field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
