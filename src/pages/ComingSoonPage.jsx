import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ComingSoonPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }),
    [];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-100 to-pink-100 px-6 text-center pt-32">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4 drop-shadow-sm">
        🚧 Coming Soon
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-md mb-6">
        This page is under construction. We're working hard to bring it to life.
        Stay tuned!
      </p>
      <Link
        to="/"
        className="inline-block bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoonPage;
