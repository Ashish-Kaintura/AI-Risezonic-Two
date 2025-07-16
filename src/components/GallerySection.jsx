import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";

const images = [
  "https://www.powerschool.com/wp-content/uploads/2024/06/Strengths-Based-Accountability-blog-thumbnail-060424.jpg",
  "https://source.unsplash.com/random/400x300?robotics",
  "https://source.unsplash.com/random/400x300?technology",
  "https://source.unsplash.com/random/400x300?education",
  "https://source.unsplash.com/random/400x300?science",
  "https://source.unsplash.com/random/400x300?innovation",
];

const GallerySection = () => {
  const [preview, setPreview] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow hover:shadow-xl transition-all">
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-52 object-cover rounded-xl transform group-hover:scale-105 transition duration-300"
                onClick={() => setPreview(src)}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaSearchPlus className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Modal */}
        {preview && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-3xl w-full relative animate-fade-in">
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-3xl"
                onClick={() => setPreview(null)}
              >
                &times;
              </button>
              <img src={preview} alt="Preview" className="w-full h-auto" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
