import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGraduationCap,
  FaComments,
  FaRobot,
  FaFlask,
  FaLightbulb,
} from "react-icons/fa";

const tabContent = [
  {
    icon: <FaGraduationCap className="text-pink-300 text-2xl" />,
    title: "Generative AI Training",
    content: [
      "Hands-on workshops, bootcamps, and mentoring for students and professionals",
      "LangChain, Prompt Engineering, OpenAI, Claude, Groq, Gemini, Llama3",
      "Faculty development programs and AI curriculum advisory",
    ],
  },
  {
    icon: <FaComments className="text-pink-300 text-2xl" />,
    title: "Conversational AI Solutions",
    content: [
      "Custom chatbots with memory, role, multilingual support",
      "RAG-based document assistants (PDF, DOCX, CSV)",
      "Embedding pipelines and fast retrieval systems",
    ],
  },
  {
    icon: <FaRobot className="text-pink-300 text-2xl" />,
    title: "AI + Robotics + IoT",
    content: [
      "Voice-controlled robots powered by LLMs",
      "AI-enabled devices with NLP and vision models",
      "Robotics competitions and classroom projects",
    ],
  },
  {
    icon: <FaFlask className="text-pink-300 text-2xl" />,
    title: "AI Innovation Lab",
    content: [
      "Hackathons, incubation, and project mentorship",
      "Student-led AI products with real-world deployment",
      "R&D in local language AI and education use cases",
    ],
  },
];

const WhatWeDoAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-24 px-4 md:px-12 text-white overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-pink-400 mb-8 flex items-center justify-center gap-3"
          data-aos="fade-up"
        >
          <FaLightbulb className="text-pink-300" /> What We Do
        </h2>

        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {tabContent.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border border-white text-white text-xl transition duration-300 hover:bg-pink-500 hover:text-white ${
                activeTab === idx ? "bg-pink-600 text-white" : "bg-white/10"
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        <div
          className="bg-white/10 rounded-2xl p-8 shadow-xl border border-white/10 backdrop-blur-lg max-w-3xl mx-auto text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-2xl font-semibold text-pink-300 mb-4 flex items-center gap-2 ">
            {tabContent[activeTab].icon} {tabContent[activeTab].title}
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-white/90">
            {tabContent[activeTab].content.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoAbout;
