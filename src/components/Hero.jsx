import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import leftface from "../video/leftface.mp4";
// import rightface from "../video/rightface.mp4";
const Hero = () => {
  // Typing animation logic
  const texts = React.useMemo(() => ["AI.Risezonic"], []);
  const [displayedText, setDisplayedText] = React.useState("");
  const [textIndex, setTextIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1200; // Pause before deleting
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentText.substring(0, charIndex - 1)
          : currentText.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section className="relative rounded-lg shadow-xl overflow-hidden pt-28 h-[750px] sm:mt-[120px] items-center">
      {/* Animated background */}
      {/* <div className="absolute inset-0 z-0">
        <div className="w-full h-full animate-gradient bg-[linear-gradient(270deg,#60a5fa,#a7f3d0,#f472b6,#60a5fa)] bg-[length:400%_400%] opacity-80 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-transparent"></div>
      </div> */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        // src="https://s7d1.scene7.com/is/content/kyndryl/kyn-ai-landing-hero"
        src={leftface}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-center  h-full text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-500 drop-shadow-lg tracking-tight min-h-[70px]">
          <span className="text-white">{displayedText}</span>
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-2xl md:text-3xl text-white font-medium max-w-2xl mx-auto">
          Empowering the Future with{" "}
          <span className="bg-gradient-to-r from-white/70 via-white/80 to-white/90 bg-clip-text text-transparent font-bold">
            Generative AI
          </span>
        </p>
        <p className="text-lg text-white">Learn. Build. Innovate.</p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="bg-white/80 border border-blue-200 px-4 py-2 rounded-full shadow text-base font-medium flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-lg" /> GenAI Training
          </span>
          <span className="bg-white/80 border border-blue-200 px-4 py-2 rounded-full shadow text-base font-medium flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-lg" /> Custom AI Apps
          </span>
          <span className="bg-white/80 border border-blue-200 px-4 py-2 rounded-full shadow text-base font-medium flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-lg" /> Robotics + AI
          </span>
          <span className="bg-white/80 border border-blue-200 px-4 py-2 rounded-full shadow text-base font-medium flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-lg" /> AI for
            Education
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Link
            to="/painpoint"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/ai-solution-and-product"
            className="px-8 py-3 border-2 border-blue-600 text-blue-700 font-semibold rounded-full bg-white/80 shadow hover:bg-blue-50 hover:scale-105 transition-transform duration-200"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      <style>
        {`
                @keyframes gradientBG {
                    0% {background-position:0% 50%}
                    50% {background-position:100% 50%}
                    100% {background-position:0% 50%}
                }
                .animate-gradient {
                    animation: gradientBG 10s ease infinite;
                }
            `}
      </style>
    </section>
  );
};

export default Hero;
