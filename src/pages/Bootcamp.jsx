import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BootcampData from "../data/bootcamp.json";
import { FaArrowRight } from "react-icons/fa";

const allTags = [...new Set(BootcampData.flatMap((p) => p.tags))];

const Bootcamp = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("az");
  const [Bootcamp, setBootcamp] = useState(BootcampData);

  useEffect(() => {
    let filtered = [...BootcampData];

    if (selectedTag !== "All") {
      filtered = filtered.filter((p) => p.tags.includes(selectedTag));
    }

    if (search.trim()) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "za") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "popular") {
      filtered.sort((a, b) => b.career.length - a.career.length);
    }

    setBootcamp(filtered);
  }, [selectedTag, search, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="min-h-screen bg-white pt-20 pb-32 px-4 text-gray-800 mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-transparent py-4 bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            AI Bootcamp
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Learn. Build. Lead the AI Revolution — Explore bootcamps, courses,
            and workshops designed for the future.
          </p>
        </div>

        {/* Filter/Search/Sort Bar */}
        {/* Filter/Search/Sort Bar */}
        <div className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-xl p-4 shadow-md mb-10 flex flex-col md:flex-row md:items-center gap-4 justify-between flex-wrap">
          {/* Search Box */}
          <input
            type="text"
            placeholder=" Search Bootcamp..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Sort Dropdown */}
          <select
            className="px-4 py-2 border rounded-lg shadow-sm text-gray-700 bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="az">Sort: A-Z</option>
            <option value="za">Sort: Z-A</option>
            <option value="popular">Sort: Most Popular</option>
          </select>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag("All")}
              className={`px-4 py-1.5 text-sm rounded-full border ${
                selectedTag === "All"
                  ? "bg-gray-600 text-white"
                  : "bg-white text-blue-600 border-blue-600"
              } hover:bg-blue-600 hover:text-white transition`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 text-sm text-gray-700 rounded-full border ${
                  selectedTag === tag
                    ? "bg-gray-600 text-white"
                    : "bg-white text-blue-600 border-gray-600"
                } hover:bg-blue-600 hover:text-white transition`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSearch("");
              setSelectedTag("All");
              setSortBy("az");
            }}
            className="text-sm px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            Clear Filters
          </button>
        </div>

        {/* Bootcamp Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Bootcamp.map((bootcamp, idx) => (
            <Link
              key={bootcamp.id}
              to={`/bootcamps/${bootcamp.id}`}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
              className="group bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={bootcamp.image}
                  alt={bootcamp.title}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-700 mb-1 group-hover:underline">
                  {bootcamp.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {bootcamp.overview}
                </p>

                <div className="text-xs text-gray-500 mb-1">
                  🎓 <strong>Certificate:</strong> {bootcamp.certificate}
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  💼 <strong>Careers:</strong> {bootcamp.career.join(", ")}
                </div>

                <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition font-medium">
                  Learn More <FaArrowRight className="text-xs mt-0.5" />
                </button>
              </div>
            </Link>
          ))}
        </div>

        {Bootcamp.length === 0 && (
          <div className="text-center text-gray-500 mt-16 text-lg">
            No Bootcamp found. Try another filter or search.
          </div>
        )}
      </div>
    </section>
  );
};

export default Bootcamp;
