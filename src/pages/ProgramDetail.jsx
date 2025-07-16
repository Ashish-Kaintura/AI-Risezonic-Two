import React from "react";
import { useParams, Link } from "react-router-dom";
import programs from "../data/programs.json";
import { FaArrowLeft, FaAward, FaBriefcase } from "react-icons/fa";

const ProgramDetail = () => {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return (
      <p className="p-10 text-red-600 text-center">❌ Program not found</p>
    );
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white text-gray-800 min-h-screen mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition mb-6 text-sm font-medium"
        >
          <FaArrowLeft /> Back to Programs
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
              {program.title}
            </h1>
            <p className="text-gray-700 text-lg mb-6">{program.overview}</p>

            {/* Learn List */}
            {program.details && (
              <>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  What You'll Learn:
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-5 text-sm">
                  {program.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Modules */}
            {program.modules && (
              <>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Key Modules:
                </h3>
                <ol className="list-decimal ml-6 text-gray-700 space-y-1 mb-5 text-sm">
                  {program.modules.map((mod, i) => (
                    <li key={i}>{mod}</li>
                  ))}
                </ol>
              </>
            )}

            {/* Capstone */}
            {program.capstone && (
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  Capstone Project:
                </h3>
                <p className="text-gray-700 text-sm">{program.capstone}</p>
              </div>
            )}

            {/* Extras */}
            {program.extras && (
              <div className="mb-5 text-green-600 font-medium bg-green-50 border border-green-200 px-4 py-2 rounded-lg text-sm">
                🎁 {program.extras}
              </div>
            )}

            {/* Certificate */}
            <div className="flex items-center gap-2 mb-2 text-sm">
              <FaAward className="text-yellow-500" />
              <span className="font-medium text-gray-700">
                Certificate:{" "}
                <span className="text-blue-600">{program.certificate}</span>
              </span>
            </div>

            {/* Careers */}
            <div className="flex items-start gap-2 text-sm">
              <FaBriefcase className="text-gray-600 mt-1" />
              <span className="font-medium text-gray-700">
                Career Outcomes:{" "}
                <span className="text-blue-700">
                  {program.career.join(", ")}
                </span>
              </span>
            </div>
          </div>

          {/* Video Content */}
          <div
            className="overflow-hidden rounded-2xl shadow-xl border border-gray-300 bg-black max-h-[400px]"
            data-aos="fade-left"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl"
            >
              <source
                src="https://raw.githubusercontent.com/Ashish-Kaintura/AI-Risezonic-Two/main/src/video/5436899_Coll_wavebreak_People_1920x1080.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetail;
