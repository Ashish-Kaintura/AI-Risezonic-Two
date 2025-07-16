import React from "react";
import { FaUsers } from "react-icons/fa";

// Add AOS import
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
// https://postimg.cc/gallery/qvfNJGW
const teamMembers = [
  {
    name: "Rajshree",
    image: "https://i.postimg.cc/m2cDShmV/Rajshree.jpg",
    role: "Founder & CEO",
  },
  {
    name: "Bhavesh",
    image: "https://i.postimg.cc/sX1Qd1D6/Bhavesh.jpg",
    role: "Lead Developer",
  },
  {
    name: "Praveen",
    image: "https://i.postimg.cc/W1PkF2Xz/praveen.jpg",
    role: "UI/UX Designer",
  },
  {
    name: "Preeti",
    image: "https://i.postimg.cc/1tJtvFx7/preti.jpg",
    role: "Marketing Head",
  },
  {
    name: "Gaurav",
    image: "https://i.postimg.cc/zD2vWTFV/gorav.jpg",
    role: "Product Manager",
  },
];

const TeamSection = () => {
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
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col items-center border border-indigo-50 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
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
              {/* <p className="text-indigo-600 text-sm mt-1 font-medium">
                {member.role}
              </p> */}
              <div className="mt-4 flex gap-2">
                {/* Example social icons */}
                {/* <a href="#" className="text-gray-400 hover:text-indigo-600 transition">
                                    <svg width="20" height="20" fill="currentColor" className="inline"><circle cx="10" cy="10" r="10"/></svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-indigo-600 transition">
                                    <svg width="20" height="20" fill="currentColor" className="inline"><rect width="20" height="20" rx="5"/></svg>
                                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
