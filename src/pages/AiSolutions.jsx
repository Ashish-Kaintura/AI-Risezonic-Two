import React, { useEffect } from "react";
import {
  FaRobot,
  FaLaptopCode,
  FaBookOpen,
  FaUniversity,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import WelcomeSection from "../components/WelcomeSection";
const AiSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="font-sans text-gray-00 pt-[62px]"
      style={{
        backgroundColor: "#fdfdfd",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23000000' fill-opacity='0.13' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden sm:mt-[86px]"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/08/84/99/81/360_F_884998169_tBj5tPnoqJyV2jqCvWioWe77ciNzFcy9.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/90 z-0"></div>
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
            style={{ top: "10%", left: "50%", animationDelay: "4s" }}
          ></div>
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 uppercase"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <FaRobot className="inline text-blue-400" />
            <span className="text-pink-600"> AI Solutions</span>{" "}
            <span className="text-blue-700"> & </span>Products
          </h1>
          <p
            className="text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Explore the AI tools we build to revolutionize learning, automation,
            and innovation.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            💡 Software & AI Products
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            At <span className="text-pink-600 font-semibold">AI.Risezonic</span>
            , we craft intelligent systems that work for you.
            <br className="hidden md:block" />
            Forget bulky ERPs and dashboards no one opens. Our AI-native tools
            understand your domain, speak your language, and automate 90% of
            your manual tasks—so your team can focus on what matters.
          </p>
        </div>

        {/* Product Grid */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">
            Our Core AI Product Suite
          </h3>
          <div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[
              {
                title: "Custom GPT Platform",
                desc: "Your private, domain-specific AI trained on your documents, tone, and workflows.",
                highlights: [
                  "Acts like your AI teammate",
                  "Remembers your language and decisions",
                  "Works for Principals, Startups, Students",
                ],
                color: "from-blue-100 to-blue-50",
              },
              {
                title: "AI Document Assistant",
                desc: "Upload PDFs and get precise answers using RAG-powered search.",
                highlights: [
                  "Support in Hindi + English",
                  "Instant answers with citations",
                  "Ideal for Admins, HR, Students",
                ],
                color: "from-pink-100 to-pink-50",
              },
              {
                title: "AI Department Assistants",
                desc: "Smart 24/7 bots for Admission, Fees, Exams, Support.",
                highlights: [
                  "WhatsApp + Website Integration",
                  "Trained on your FAQs & Policies",
                  "90% query resolution rate",
                ],
                color: "from-yellow-100 to-yellow-50",
              },
              {
                title: "AI Tutor with Personalized Learning",
                desc: "A tutor that understands your syllabus, learning pace, and language.",
                highlights: [
                  "Explain complex topics in simple terms",
                  "Generate quizzes, viva questions",
                  "Context-aware assistance",
                ],
                color: "from-green-100 to-green-50",
              },
              {
                title: "Smart Report Generator (AI Analyst)",
                desc: "Turn raw data (Excel, CSV) into charts, insights, and summaries.",
                highlights: [
                  "Ask: Which class had lowest attendance?",
                  "AI auto-generates visual analytics",
                  "Save hours every week",
                ],
                color: "from-indigo-100 to-indigo-50",
              },
              {
                title: "VoiceBot with Reasoning",
                desc: "Speak in Hindi or English and get real answers or actions.",
                highlights: [
                  "Smart Kiosk & Robot control ready",
                  "Voice + LLM + Real Action",
                  "Used in Robotics Labs & Smart Desks",
                ],
                color: "from-purple-100 to-purple-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} rounded-2xl shadow-lg p-7 border border-blue-100 hover:shadow-2xl transition group`}
              >
                <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-pink-600 transition">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="list-disc list-inside text-sm text-blue-700 space-y-1 text-left pl-2">
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-24 px-6 md:px-16">
        {/* Custom Modules */}
        <div
          className="mt-20 max-w-5xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 flex items-center justify-center gap-2">
            <span className="inline-block bg-blue-100 rounded-full p-2 shadow-md">
              <FaLaptopCode className="text-blue-600 text-2xl" />
            </span>
            Custom AI Add-ons
          </h3>
          <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Supercharge your workflows with modular AI tools, tailored for your
            campus or business. Integrate with APIs, dashboards, or full-stack
            solutions—no extra hassle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                name: "Auto Circular Writer (Principal GPT)",
                icon: <FaBookOpen className="text-pink-500" />,
              },
              {
                name: "Attendance Insight GPT",
                icon: <FaUniversity className="text-blue-500" />,
              },
              {
                name: "AI-Powered Question Generator",
                icon: <FaRobot className="text-yellow-500" />,
              },
              {
                name: "Project Idea Recommender",
                icon: <FaLaptopCode className="text-green-500" />,
              },
              {
                name: "Student Performance Predictor",
                icon: <FaBookOpen className="text-indigo-500" />,
              },
              {
                name: "Internal Q&A Portal",
                icon: <FaUniversity className="text-purple-500" />,
              },
              {
                name: "Feedback Sentiment Analyzer",
                icon: <FaRobot className="text-pink-600" />,
              },
              {
                name: "RAG for University Notices",
                icon: <FaBookOpen className="text-blue-600" />,
              },
            ].map((mod, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-white border border-blue-200 shadow hover:shadow-lg px-6 py-3 rounded-full text-base font-semibold transition-all duration-200 hover:bg-blue-50"
              >
                <span>{mod.icon}</span>
                {mod.name}
              </span>
            ))}
          </div>
        </div>
        <div
          className="mt-20 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center flex items-center justify-center gap-2">
            <span className="inline-block bg-blue-100 rounded-full p-2 shadow">
              🧩
            </span>
            What Makes Us Different?
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow bg-white">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="bg-blue-100 text-blue-900 text-base">
                  <th className="px-4 py-3 font-bold">Feature</th>
                  <th className="px-4 py-3 font-bold">AI.Risezonic</th>
                  <th className="px-4 py-3 font-bold">Traditional Software</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Works in Natural Language", "✅ Yes", "❌ Form-based"],
                  [
                    "Context-aware Memory",
                    "✅ LangChain Enabled",
                    "❌ Stateless Logic",
                  ],
                  [
                    "Personalization",
                    "✅ Trained on Your Tone",
                    "❌ Generic Workflows",
                  ],
                  ["Voice + Text + Docs", "✅ Multimodal", "❌ Text Only"],
                  ["Deployment Time", "✅ 7 Days", "❌ 3–6 Months"],
                  ["Hindi Language Support", "✅ Yes", "❌ English Only"],
                  [
                    "AI Debug & Trace",
                    "✅ Langfuse Observability",
                    "❌ Not Available",
                  ],
                ].map(([feature, ours, theirs], i) => (
                  <tr key={i} className="border-t hover:bg-blue-50 transition">
                    <td className="px-4 py-3 font-medium">{feature}</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">
                      {ours}
                    </td>
                    <td className="px-4 py-3 text-red-500 font-semibold">
                      {theirs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="mt-20 max-w-3xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3 className="text-3xl font-bold text-blue-800 mb-4">
            💬 Let's Talk AI
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Want a GPT that talks like your college? A smart tutor for your
            students? A robot that teaches?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full shadow hover:bg-pink-700 transition"
          >
            Contact Us → Let's Build Together
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AiSolutions;
