import React from "react";
import {
  FaRobot,
  FaMagic,
  FaCogs,
  FaComments,
  FaFileAlt,
  FaTools,
} from "react-icons/fa";
// import video1 from "../video/custom chat gpt animation.mp4";
// import video2 from "../video/Automate Business Workflows to Boost Productivity (1).mp4";
// import video3 from "../video/Comp 1 (1).mp4";
// import video4 from "../video/Accelerate Business Research & Document Creation.mp4";
// import video5 from "../video/Generate & Automate Marketing Copy & Campaign Assets with AI.mp4";
// import video6 from "../video/Build No-Code Websites, Apps, Tools & Games Using AI.mp4";
const aiSolutions = [
  {
    icon: <FaRobot className="text-white text-2xl" />,
    title: "Creation of Custom Chat Gpt with Ai",
    points: [
      "Craft tailored prompt flows that mirror your business logic or support",
      "Achieve instant, consistent responses 24/7.",
      "Reduce manual effort in handling FAQs.",
    ],
    video:
      "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/video/custom%20chat%20gpt%20animation.mp4", // ✅ use the imported variable here
    img: "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/coverimg/transform1.png",
  },
  {
    icon: <FaCogs className="text-white text-2xl" />,
    title: "Automate Business Workflows to Boost Productivity",
    points: [
      "Connect apps & trigger tasks with no-code AI workflows.",
      "Streamline outreach, CRM updates, and follow-ups.",
      "Scale processes with less effort and more consistency.",
    ],
    video:
      "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/video/Automate%20Business%20Workflows%20to%20Boost%20Productivity%20(1).mp4",
    img: "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/coverimg/transform2.png",
  },
  {
    icon: <FaComments className="text-white text-2xl" />,
    title: "Automate Conversations with AI Chatbots & Voice Assistants",
    points: [
      "Automate customer support and internal queries.",
      "Ensure faster, 24/7 responses with consistent messaging.",
      "Reduce manual effort & improve resolution time.",
    ],
    video:
      "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/video/Comp%201%20(1).mp4",
    img: "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/coverimg/transform3.png",
  },
  {
    icon: <FaFileAlt className="text-white text-2xl" />,
    title: "Accelerate Business Research & Document Creation",
    points: [
      "Cut research and summarization time.",
      "Use AI to spot trends & extract insights.",
      "Improve content accuracy and decisions.",
    ],
    video:
      "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/video/Accelerate%20Business%20Research%20%26%20Document%20Creation.mp4",
    img: "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/coverimg/transform4.png",
  },
  {
    icon: <FaMagic className="text-white text-2xl" />,
    title: "Generate & Automate Marketing Copy & Campaign Assets with AI",
    points: [
      "Develop high-converting copy, emails, and ads in minutes.",
      "Test and iterate messaging faster across platforms.",
      "Drive better engagement while lowering creative bottlenecks.",
    ],
    video:
      "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/video/Generate%20%26%20Automate%20Marketing%20Copy%20%26%20Campaign%20Assets%20with%20AI.mp4",
    img: "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/coverimg/transform5.png",
  },
  {
    icon: <FaTools className="text-white text-2xl" />,
    title: "Build No-Code Websites, Tools & Games Using AI",
    points: [
      "Launch digital products without developers.",
      "Prototype fast, iterate faster.",
      "Empower teams to ship independently.",
    ],
    video:
      "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/video/Build%20No-Code%20Websites%2C%20Apps%2C%20Tools%20%26%20Games%20Using%20AI.mp4",
    img: "https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/coverimg/transform6.png",
  },
];

const AISolutionsGrid = () => {
  return (
    <section className="py-16 bg-zinc-900 relative">
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl font-extrabold text-blue-700"
          >
            Transform Your Business{" "}
            <span
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text"
            >
              with AI
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white mt-2 text-sm max-w-2xl mx-auto"
          >
            Apply AI across business-first use cases — from automation & content
            to research & decision-making.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiSolutions.map((item, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              key={idx}
              className="bg-white border border-blue-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Bullet Points */}
              <ul className="text-gray-600 text-sm space-y-1 mb-4 list-disc pl-5 flex-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Video */}
              {/* <video src={item.video} autoPlay loop muted playsInline /> */}
              <video
                className="w-full h-40 object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="none" // don't preload until user interacts
                poster={item.img} // Add a light placeholder or loading image
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutionsGrid;
