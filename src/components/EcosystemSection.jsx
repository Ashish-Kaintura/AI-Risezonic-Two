import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGraduationCap,
  FaTools,
  FaRocket,
} from "react-icons/fa";

const EcosystemSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
// https://postimg.cc/gallery/NGfsxX7
  const steps = [
    {
      title: "Train",
      icon: <FaGraduationCap />,
      highlight: "Learn LLMs, LangChain, Prompt Design & More",
      content:
        "Master the fundamentals and advanced tools of Generative AI — applied to your own domain, not just coding. Learn how AI thinks.",
      image:
        "https://i.postimg.cc/tCnTNLY6/Image-3.png",
      bg: "from-blue-500 to-pink-500",
      iconColor: "text-pink-300",
    },
    {
      title: "Build",
      icon: <FaTools />,
      highlight: "Build GPTs, RAG bots, AI dashboards & robots",
      content:
        "Hands-on creation of real tools — for campus, startups, and communities. Learn by building working apps that matter.",
      image:
        "https://i.postimg.cc/0ygNWcwB/Image-2.png",
      bg: "from-green-500 to-teal-500",
      iconColor: "text-green-300",
    },
    {
      title: "Launch",
      icon: <FaRocket />,
      highlight: "Go public with apps, expos, & impact reports",
      content:
        "Showcase your innovation. Build a strong portfolio. Deliver institution-level value with launch-ready AI tools.",
      image:
        "https://i.postimg.cc/CMJGj4Cp/Image-1-3.png",
      bg: "from-yellow-500 to-orange-500",
      iconColor: "text-yellow-300",
    },
  ];

  return (
    <section className="bg-zinc-900 py-24 px-6 md:px-12 relative">
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
      <h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-20"
        data-aos="fade-up"
      >
        The <span className="text-pink-500">AI.Risezonic</span> Ecosystem
      </h2>

      <div className="space-y-24 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Text Section */}
            <div className="flex-1 bg-white/10 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl">
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.bg} flex items-center justify-center mb-6 shadow-lg`}
              >
                <div className={`text-2xl ${step.iconColor}`}>{step.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-lg font-semibold text-pink-300 mb-2">
                {step.highlight}
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                {step.content}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative group">
              <div className="overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500">
                <img
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-full h-72 md:h-80"
                />
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 opacity-20 backdrop-blur-sm group-hover:opacity-30 transition"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemSection;
