// import React from "react";
// import {
//   FaChalkboardTeacher,
//   FaRobot,
//   FaBuilding,
//   FaUsers,
//   FaLaptopCode,
//   FaCertificate,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
// export default function Workshops() {
//   return (
//     <div className="bg-white text-gray-900 px-6 md:px-16 py-12 space-y-14 sm:mt-48">
//       <Helmet>
//         <meta name="keywords" content="AI Workshop" />
//         <title>Artificial Intelligence Workshop | AI. Risezonic.</title>
//         <meta
//           name="description"
//           content="Join our exclusive hands-on AI workshop to learn the latest in artificial intelligence. Learn from experts at AI Risezonic and unlock AI’s potential."
//         />
//         <link rel="canonical" href="https://ai.risezonic.com/workshop" />
//       </Helmet>
//       <header className="text-center space-y-3">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
//           Host a Workshop
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto">
//           Bring future-ready learning to your campus or workplace with
//           expert-led, hands-on workshops in AI, Robotics, Data Science, IoT,
//           Power BI, and more.
//         </p>
//       </header>

//       <section className="grid md:grid-cols-2 gap-12 items-start">
//         <div>
//           <h2 className="text-2xl font-semibold text-blue-700 mb-2">
//             For Colleges & Universities
//           </h2>
//           <p className="mb-4">
//             Empower your students with skill-based, industry-aligned workshops
//             that complement academic learning.
//           </p>
//           <ul className="list-disc ml-6 space-y-1">
//             <li>Generative AI in Education</li>
//             <li>Robotics & IoT Bootcamps</li>
//             <li>AI/ML for Beginners</li>
//             <li>Python for Data Science</li>
//             <li>Power BI Mastery</li>
//           </ul>
//           <p className="mt-3 italic text-sm text-gray-600">
//             Ideal for: B.Tech, BCA, MCA, BSc (CS/IT), MBA, and interdisciplinary
//             streams
//           </p>
//           <p className="text-sm text-gray-600">
//             Includes: Certificates, project kits (if applicable), career
//             orientation
//           </p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-blue-700 mb-2">
//             For Schools (Grades 9–12)
//           </h2>
//           <p className="mb-4">
//             Make STEM exciting with age-appropriate, hands-on tech workshops
//             designed to spark curiosity and creativity.
//           </p>
//           <ul className="list-disc ml-6 space-y-1">
//             <li>Introduction to AI & ChatGPT</li>
//             <li>Build Your First Robot</li>
//             <li>Coding with Python</li>
//             <li>IoT for Young Innovators</li>
//           </ul>
//           <p className="mt-3 italic text-sm text-gray-600">
//             Aligned with NEP & CBSE Skill Education Goals
//           </p>
//           <p className="text-sm text-gray-600">
//             Includes: Worksheets, demo kits, participation certificates
//           </p>
//         </div>
//       </section>

//       <section className="grid md:grid-cols-2 gap-12 items-start">
//         <div>
//           <h2 className="text-2xl font-semibold text-blue-700 mb-2">
//             For Corporate Teams & Professionals
//           </h2>
//           <p className="mb-4">
//             Upskill your workforce with customized, ROI-focused training in
//             emerging technologies and tools.
//           </p>
//           <ul className="list-disc ml-6 space-y-1">
//             <li>Generative AI for Business</li>
//             <li>Power BI for Decision Makers</li>
//             <li>Automating Workflows with Python & AI</li>
//             <li>Data-Driven Leadership</li>
//           </ul>
//           <p className="mt-3 italic text-sm text-gray-600">
//             Customizable for tech, non-tech, HR, marketing, and leadership teams
//           </p>
//           <p className="text-sm text-gray-600">
//             Includes: Live demos, Q&A, use-case labs, and takeaway toolkits
//           </p>
//         </div>

//         <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
//           <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center gap-2">
//             <FaCertificate /> What We Provide
//           </h3>
//           <ul className="list-disc ml-6 space-y-2 text-gray-800">
//             <li>Expert Instructors with Industry + Academic Experience</li>
//             <li>Tailored Content for Audience Level (Beginner to Advanced)</li>
//             <li>Live Demos, Hands-On Practice & Real-World Use Cases</li>
//             <li>Workshop Materials + Certificates for All Participants</li>
//             <li>On-site or Virtual Delivery Options Available</li>
//           </ul>
//         </div>
//       </section>

//       <div className="text-center mt-12">
//         <Link to="/contact">
//           <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md">
//             Request a Workshop
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
const WorkshopPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    },[]);
  return (
    <div className="bg-white text-gray-800 mt-32">
      <Helmet>
        <meta name="keywords" content="AI Workshop" />
        <title>Artificial Intelligence Workshop | AI. Risezonic.</title>
        <meta
          name="description"
          content="Join our exclusive hands-on AI workshop to learn the latest in artificial intelligence. Learn from experts at AI Risezonic and unlock AI’s potential."
        />
        <link rel="canonical" href="https://ai.risezonic.com/workshop" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-16 px-6 text-center h-[550px] flex items-center"
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/workshop/Banner.webp`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Host a Workshop
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            For Colleges, Schools & Corporate Teams – Bring future-ready
            learning to your campus or workplace
          </p>
          {/* <div className="mt-8">
            <iframe
              className="rounded-xl mx-auto w-full md:w-[560px] h-[315px] shadow-lg"
              src="https://www.youtube.com/embed/LlWBSGgWZ2g"
              title="AI Workshop Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* Colleges & Universities */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-purple-600">
              For Colleges & Universities
            </h2>
            <p className="mb-4 text-lg">
              Empower your students with skill-based, industry-aligned workshops
              that complement academic learning.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Generative AI in Education</li>
              <li>Robotics & IoT Bootcamps</li>
              <li>AI/ML for Beginners</li>
              <li>Python for Data Science</li>
              <li>Power BI Mastery</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              <strong>Ideal for:</strong> B.Tech, BCA, MCA, BSc (CS/IT), MBA,
              and interdisciplinary streams
              <br />
              <strong>Includes:</strong> Certificates, project kits (if
              applicable), career orientation
            </p>
          </div>
          <img
            src="https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/workshop/workshop%20for%20For%20Colleges.webp"
            alt="College Workshop"
            className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform"
          />
        </div>

        {/* Schools */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/workshop/workshope%20For%20Schools.webp"
            alt="School Workshop"
            className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform"
          />
          <div>
            <h2 className="text-2xl font-bold mb-3 text-pink-600">
              For Schools (Grades 9–12)
            </h2>
            <p className="mb-4 text-lg">
              Make STEM exciting with age-appropriate, hands-on tech workshops
              designed to spark curiosity and creativity.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Introduction to AI & ChatGPT</li>
              <li>Build Your First Robot</li>
              <li>Coding with Python</li>
              <li>IoT for Young Innovators</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              <strong>Aligned with:</strong> NEP & CBSE Skill Education Goals
              <br />
              <strong>Includes:</strong> Worksheets, demo kits, participation
              certificates
            </p>
          </div>
        </div>

        {/* Corporates */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-blue-600">
              For Corporate Teams & Professionals
            </h2>
            <p className="mb-4 text-lg">
              Upskill your workforce with customized, ROI-focused training in
              emerging technologies and tools.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Generative AI for Business</li>
              <li>Power BI for Decision Makers</li>
              <li>Automating Workflows with Python & AI</li>
              <li>Data-Driven Leadership</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              <strong>Customizable for:</strong> tech, non-tech, HR, marketing,
              and leadership teams
              <br />
              <strong>Includes:</strong> Live demos, Q&A, use-case labs,
              takeaway toolkits
            </p>
          </div>
          <img
            src="https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/image/workshop/chatbot-software-application-modish-online-business.webp"
            alt="Corporate Workshop"
            className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform"
          />
        </div>

        {/* What We Provide */}
        <div className="bg-gray-50 rounded-xl shadow p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            What We Provide
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-sm text-gray-700">
            <li>Expert Instructors with Industry + Academic Experience</li>
            <li>Tailored Content for Audience Level (Beginner to Advanced)</li>
            <li>Live Demos, Hands-On Practice & Real-World Use Cases</li>
            <li>Workshop Materials + Certificates for All Participants</li>
            <li>On-site or Virtual Delivery Options Available</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WorkshopPage;
