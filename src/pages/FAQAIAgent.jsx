import React, { useState } from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaUserTie,
  FaMoneyBillWave,
  FaProjectDiagram,
} from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { motion } from "framer-motion";

const services = [
  {
    title: "Library",
    desc: "Access a wide range of AI & tech resources, e-books, and research papers.",
    icon: <MdOutlineLibraryBooks className="text-4xl text-blue-600" />,
    tags: ["resources", "books", "library"],
  },
  {
    title: "Course Details",
    desc: "Explore comprehensive course structures and detailed curriculum.",
    icon: <FaBook className="text-4xl text-green-600" />,
    tags: ["course", "curriculum", "study"],
  },
  {
    title: "Faculty Details",
    desc: "Meet our expert faculty members who bring industry knowledge to the classroom.",
    icon: <FaChalkboardTeacher className="text-4xl text-purple-600" />,
    tags: ["faculty", "teachers", "mentors"],
  },
  {
    title: "Career Options",
    desc: "Unlock global career opportunities with AI, Data, and Robotics expertise.",
    icon: <FaUserTie className="text-4xl text-orange-600" />,
    tags: ["career", "jobs", "opportunities"],
  },
  {
    title: "Fee Structure",
    desc: "Affordable and flexible fee plans designed to fit your learning needs.",
    icon: <FaMoneyBillWave className="text-4xl text-teal-600" />,
    tags: ["fees", "pricing", "payment"],
  },
  {
    title: "Custom Courses",
    desc: "Tailored learning paths designed for institutions & professionals.",
    icon: <FaProjectDiagram className="text-4xl text-pink-600" />,
    tags: ["custom", "training", "courses"],
  },
];

const FAQAIAgent = () => {
  const [search, setSearch] = useState("");

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.desc.toLowerCase().includes(search.toLowerCase()) ||
      service.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-6 pt-48 overflow-hidden">
      {/* 🔮 Animated AI Background Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-400/10 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ask Our AI Agent
        </motion.h1>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Have a question about{" "}
          <span className="font-semibold text-indigo-400">AI Risezonic</span>{" "}
          facilities? Simply select a tab below that matches your query, and our
          AI Agent will provide you with instant answers.
        </p>
        {/* 🔍 Search Bar */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search Query (e.g. library, faculty, fees)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ rotate: [0, 2, -2, 0] }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{service.desc}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-200/20 border border-gray-500 rounded-full text-gray-300 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-lg">
              No services found. Try searching for another keyword.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQAIAgent;
