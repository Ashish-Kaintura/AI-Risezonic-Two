import {
  FaRocket,
  FaHandsHelping,
  FaSearch,
  FaGlobeAsia,
  FaBullseye,
  FaLightbulb,
  FaEye,
  FaLaptopCode,
  FaHandshake,
  FaUsers,
  FaRobot,
  FaMicroscope,
  FaGlobe,
  FaUniversity,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Video1 from "../video/WhatsApp Video 2025-07-09 at 4.14.40 PM.mp4";
import video2 from "../video/5436899_Coll_wavebreak_People_1920x1080.mp4";
import {
  HiMiniWrenchScrewdriver,
  HiMiniUserGroup,
  HiMiniRocketLaunch,
} from "react-icons/hi2";

import React, { useEffect } from "react";
import WhatWeDo from "../components/What We Do ";
import WhatWeDoAbout from "../components/WhatWeDoAbout";
const About = () => {
  const texts = React.useMemo(() => ["About AI.Risezonic"], []);
  const [displayedText, setDisplayedText] = React.useState("");
  const [textIndex, setTextIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1200;
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="font-sans text-gray-800"
      style={{
        backgroundColor: "#fdfdfd",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23000000' fill-opacity='0.13' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'/%3E%3C/svg%3E")`,
      }}
    >
      /* Hero Banner */
      <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden sm:mt-[129px]">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={Video1}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Static dark layer */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0  z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-2 text-pink-500 uppercase">
            <FaRocket className="inline text-blue-400" /> {displayedText}
          </h1>
          <p className="text-lg md:text-2xl">
            <span> Empowering</span> the next generation through AI-driven
            learning & innovation.
          </p>
        </div>
      </section>
      {/* Who We Are */}
      <section
        className="max-w-7xl mx-auto py-20 px-6 md:px-12 bg-white my-4 shadow-xl rounded-xl"
        data-aos="zoom-in"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              AI.Risezonic is a next-generation AI innovation company focused on
              democratizing access to Generative AI. We blend cutting-edge
              technology, real-world training, and practical product development
              to help students, institutions, and startups become AI-ready for
              the digital-first world.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed text-lg">
              At the intersection of education, AI development, and robotics, we
              deliver programs and products that are not only technologically
              advanced but also deeply human in purpose — designed to empower
              and uplift communities, classrooms, and creators.
            </p>
          </div>
          {/* <img
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
            alt="AI Team Collaboration"
            className="w-full rounded-xl shadow-lg"
          /> */}
          <div className="bg-black p-4 flex justify-center">
            <video src={video2} loop autoPlay></video>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section
        className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6 md:px-12"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 flex items-center justify-center gap-3">
            <FaEye className="text-blue-500" /> Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            To be India’s most impactful ecosystem for AI learning,
            experimentation, and innovation — empowering{" "}
            <strong className="text-blue-600">10,00,000+</strong> learners each
            year to build the AI-powered future.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaLightbulb className="text-2xl text-blue-600 mt-1" />
              <p className="text-gray-700 font-medium">
                Nurture{" "}
                <span className="text-blue-600 font-semibold">
                  GenAI talent
                </span>{" "}
                from small towns and tier-2/3 cities.
              </p>
            </div>
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <HiMiniWrenchScrewdriver className="text-2xl text-blue-600 mt-1" />
              <p className="text-gray-700 font-medium">
                Incubate{" "}
                <span className="text-blue-600 font-semibold">
                  AI-first startups
                </span>{" "}
                with mentorship and tools.
              </p>
            </div>
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaRobot className="text-2xl text-blue-600 mt-1" />
              <p className="text-gray-700 font-medium">
                Build a culture of{" "}
                <span className="text-blue-600 font-semibold">
                  AI-integrated education and robotics
                </span>{" "}
                (NEP 2025).
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section
        className="bg-black/90 py-20 px-6 md:px-12 shadow-inner rounded-xl max-w-7xl mx-auto my-12"
        data-aos="zoom-in"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6 flex justify-center items-center gap-3">
            <FaBullseye className="text-pink-600" /> Our Mission
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
            To bridge the gap between aspiration and AI capability through
            personalized education, scalable tools, and a community of practice
            around Generative AI.
          </p>
          <p className="text-lg md:text-xl text-white mb-10 leading-relaxed">
            We exist to make Generative AI{" "}
            <strong className="text-pink-600">
              understandable, accessible, and usable
            </strong>
            for every curious learner, educator, and innovator — regardless of
            background, language, or prior exposure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-left ">
            <div
              className="flex items-start gap-3 bg-white/90 p-3 rounded-lg  shadow-lg border-2"
              data-aos="fade-right"
            >
              <HiMiniUserGroup className="text-2xl text-pink-500 mt-1" />
              <p className="text-gray-700">
                <strong>Community-Driven:</strong> Building a scalable network
                of mentors, students, and educators.
              </p>
            </div>
            <div
              className="flex items-start gap-3 bg-white/90 p-3 rounded-lg  shadow-lg border-2"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <HiMiniWrenchScrewdriver className="text-2xl text-pink-500 mt-1" />
              <p className="text-gray-700">
                <strong>Project-First:</strong> Training that produces
                deployable, real-world AI products.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* why Ai rise zonic  */}
      <section
        className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-6 md:px-12"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 flex justify-center items-center gap-3">
            <FaLightbulb className="text-blue-600" /> Why AI.Risezonic?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            We don’t just teach AI — we help you live it, build with it, and
            lead with it.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* 1 - Project First */}
            <div
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <HiMiniRocketLaunch className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Project-First Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe people learn best when they build, not just watch.
                Every training, every workshop, every course ends with
                real-world applications.
              </p>
            </div>

            {/* 2 - GenAI beyond the hype */}
            <div
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaRobot className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                GenAI Beyond the Hype
              </h3>
              <p className="text-gray-600 leading-relaxed">
                While most are still talking about AI, we help you build with
                it. From LLM-powered Q&A bots to AI-driven exam evaluators, our
                solutions work.
              </p>
            </div>

            {/* 3 - Cross-disciplinary */}
            <div
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaLaptopCode className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Cross-Disciplinary Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We integrate AI + Software + Robotics + Education, helping you
                learn and apply across industries — not just teach prompts.
              </p>
            </div>

            {/* 4 - Responsible AI */}
            <div
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaHandshake className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Inclusive & Responsible AI
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Designed for multilingual, low-resource, and educator-friendly
                environments — ensuring AI is human-centered, not just elite
                tech.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhatWeDoAbout />
      {/* AI Innovation Lab */}
      {/* <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center flex items-center justify-center gap-3"
            data-aos="fade-up"
          >
            <FaMicroscope className="text-blue-600" /> AI Innovation Lab
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <FaLightbulb className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Hackathons & Incubation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Real-world project mentorship & startup incubation for students
              </p>
            </div>

            <div
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaRobot className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Student-led AI Products
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build & deploy real AI apps with institutional or startup
                support
              </p>
            </div>

            <div
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaGlobe className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Local Language R&D
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Explore GenAI for education in regional languages
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Our Community */}
      <section
        className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 border-t overflow-hidden"
        data-aos="fade-up"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full opacity-30 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 flex justify-center items-center gap-3">
            <FaUsers className="text-blue-600" /> Our Community
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            AI.Risezonic is more than a company — it's a growing movement of
            learners, educators, builders, and visionaries.
          </p>

          {/* Community Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Students building their first AI app",
              "Professors learning to teach LLMs",
              "Startups exploring GenAI applications",
              "Parents preparing children for the future",
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group bg-white border-l-4 border-blue-500 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="absolute top-3 right-3 opacity-10 text-5xl group-hover:opacity-20 transition">
                  <FaUsers />
                </div>
                <p className="text-blue-800 font-semibold text-md text-left">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Meet the Minds Behind Risezonic */}
      <section className="bg-blue-800 py-20 px-6 md:px-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <FaUniversity className="text-white" /> Meet the Minds Behind
            Risezonic
          </h2>
          <p className="text-white text-lg">
            B RJ · P G · P (Add detailed profiles here)
          </p>
        </div>
      </section>
      {/* Our Impact */}
      <section className="py-20 px-6 md:px-12 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-10">
            Our Impact (So Far)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div
              className="bg-blue-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <FaUsers className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                1,000+ Trained
              </h3>
              <p className="text-gray-600">
                Students completed hands-on GenAI training
              </p>
            </div>
            <div
              className="bg-blue-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaUniversity className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                20+ Institutions
              </h3>
              <p className="text-gray-600">
                Hosted our AI programs & workshops
              </p>
            </div>
            <div
              className="bg-blue-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaRobot className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                15+ AI Projects
              </h3>
              <p className="text-gray-600">
                Built & deployed by learners across domains
              </p>
            </div>
            <div
              className="bg-blue-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaHandshake className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                100% Positive Feedback
              </h3>
              <p className="text-gray-600">
                Loved by students & college partners
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-20 px-6 md:px-12" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Join the Movement
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            You’re not late to AI. You’re right on time. All you need is the
            right push, platform, and people — and that’s what AI.Risezonic is
            here to be.
          </p>
          <p className="text-gray-700 font-semibold text-lg">
            Your launchpad into the world of Generative AI.
          </p>
        </div>
      </section>
      {/* Let’s Build the AI Future Together */}
      <section
        className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-pink-50 overflow-hidden"
        data-aos="fade-up"
      >
        {/* Decorative Blurs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 opacity-20 rounded-full blur-3xl" />

        <div className="relative z-10 flex justify-around items-center  mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
              Let’s Build the AI Future Together
            </h2>
            <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether you're a college, a curious learner, or a visionary
              founder —
              <span className="font-semibold text-blue-700">
                {" "}
                AI.Risezonic{" "}
              </span>
              welcomes you to explore, learn, and co-create with us.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            {/* Email */}
            <div
              className="flex items-center gap-4 bg-white border border-blue-100 shadow-md p-4 rounded-xl hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h4 className="text-sm text-blue-800 font-semibold">Email</h4>
                <p className="text-gray-600 text-sm">info.risezonic.com</p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-center gap-4 bg-white border border-blue-100 shadow-md p-4 rounded-xl hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaPhone className="text-blue-600 text-2xl" />
              <div>
                <h4 className="text-sm text-blue-800 font-semibold">Phone</h4>
                <p className="text-gray-600 text-sm">+91 8178857250</p>
              </div>
            </div>

            {/* Location */}
            <div
              className="flex items-center gap-4 bg-white border border-blue-100 shadow-md p-4 rounded-xl hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <h4 className="text-sm text-blue-800 font-semibold">
                  Location
                </h4>
                <p className="text-gray-600 text-sm">India: Delhi.Gurugram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
