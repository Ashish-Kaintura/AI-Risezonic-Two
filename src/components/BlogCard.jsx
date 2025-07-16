import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoUrl = blog.video || blog.Video;
  const isYouTube =
    videoUrl &&
    (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be"));

  const getYouTubeEmbedURL = (url) => {
    if (!url) return null;
    const videoId = url.includes("watch?v=")
      ? url.split("watch?v=")[1].split("&")[0]
      : url.includes("youtu.be/")
      ? url.split("youtu.be/")[1].split("?")[0]
      : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const embedUrl = getYouTubeEmbedURL(videoUrl);

  return (
    <>
      <div className="relative block group">
        <Link to={`/blog/${blog.slug}`}>
          <div className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
            {embedUrl ? (
              <div className="w-full h-48 bg-black">
                <iframe
                  src={embedUrl}
                  title={blog.title}
                  className="w-full h-full object-cover pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500">{blog.intro}</p>
              <p className="mt-2 text-xs text-gray-400">
                {blog.date} · {blog.readTime}
              </p>
            </div>
          </div>
        </Link>

        {embedUrl && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-3 py-1 rounded hover:bg-indigo-700 transition"
          >
            Expand Video
          </button>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-2xl bg-black rounded-xl shadow-lg">
            <iframe
              src={embedUrl}
              title="Expanded Video"
              className="w-full h-[400px] rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-sm rounded hover:bg-gray-200"
            >
              Close ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
