import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";

// Add AOS import
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
// https://postimg.cc/gallery/qvfNJGW

const teamMembers = [
  {
    name: "Rajshree Singh",
    image: "https://i.postimg.cc/m2cDShmV/Rajshree.jpg",
    role: "Director of Business Development & Marketing",
    bio: `Rajshree Singh is an MBA in Sales & Marketing with a powerhouse of credentials in Six Sigma, ISO, CPRE, and PMP. She has earned certifications from Google, Meta, HubSpot, and Microsoft in digital marketing, analytics, content, SEO, and advertising. Having served leadership roles at HCL, American Express, and Google, she now leads AI Risezonic, bringing deep marketing expertise to AI-powered growth strategies and business scaling with real ROI.`,
  },
  {
    name: "Bhavesh Chaturvedi",
    image: "https://i.postimg.cc/sX1Qd1D6/Bhavesh.jpg",
    role: "Director of AI Strategy & Consulting",
    bio: `Bhavesh Chaturvedi is a Tourism Graduate and MBA professional with over 20 years of leadership across global business, diplomatic relations, and government collaborations. A strategic consultant and AI leader, he helms AI Risezonic and Risezonic Travel, offering innovative AI software solutions and high-level travel services. His work bridges corporate and government sectors with a focus on impactful, tech-driven outcomes.`,
  },
  {
    name: "Praveen Kumar",
    image:
      "https://i.postimg.cc/gJyw7m2t/Whats-App-Image2025-07-19at17-31-28-Photoroom.png",
    role: "Director of Technology & Operational Excellence",
    bio: `Praveen Kumar is a seasoned tech expert with over a decade of experience in AI, IoT, Machine Learning, and Data Science. He has worked at top MNCs like TCS, Fidelity, and Nagarro. Known for delivering global workshops and FDPs, his strength lies in bridging theory with real-world application. Passionate about innovation and education, he leads technical operations and empowers learners globally through hands-on learning.`,
  },
  {
    name: "Preeti Kaushik",
    image: "https://i.postimg.cc/1tJtvFx7/preti.jpg",
    role: "Director of Creative & UX",
    bio: `Preeti Kaushik is a Senior IT Professional with a B.Tech in Computer Science and 10+ years of experience in the tech industry. She specializes in Java, AI, UI/UX Design, and Technical Documentation. As an AI trainer and mentor at Reviving India, she’s guided students and professionals in real-world projects across education, e-commerce, and healthcare sectors—bridging academia and industry with excellence in design and training.`,
  },
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="py-20 " id="team">
      <div className="max-w-7xl mx-auto px-4 text-center py-12 rounded-3xl shadow-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Heading */}
        <div
          className="flex items-center justify-center gap-3 mb-12"
          data-aos="fade-down"
        >
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 shadow-lg">
            <FaUsers className="text-indigo-600 text-3xl" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight">
            Our <span className="text-pink-600"> Core Team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center border border-indigo-50 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-indigo-200 shadow-xl"
                />
                {/* <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span> */}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-indigo-600 text-sm mt-1 font-medium">
                {member.role}
              </p>
              {/* <div className="mt-4 flex gap-2">
              
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="inline"
                  >
                    <circle cx="10" cy="10" r="10" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="inline"
                  >
                    <rect width="20" height="20" rx="5" />
                  </svg>
                </a>
              </div> */}
            </div>
          ))}
          {/* Modal */}
          {selectedMember && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
                <button
                  className="absolute top-3 right-4 text-gray-600 text-xl hover:text-red-500"
                  onClick={() => setSelectedMember(null)}
                >
                  ×
                </button>
                <div className="flex flex-col items-center rounded-lg">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-96 h-64 object-contain rounded-lg  mb-4"
                  />
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedMember.name}
                  </h2>
                  <p className="text-indigo-600 font-medium mb-2">
                    {selectedMember.role}
                  </p>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
