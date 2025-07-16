import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs.json";
import { FaRobot } from "react-icons/fa";
import BlogCard from "../components/BlogCard";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);
  const relatedPosts = blogs.filter((b) => b.id !== id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extract video URL if available
  const videoUrl = blog?.video || blog?.Video;

  // Convert YouTube URL to embeddable format
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

  if (!blog) return <p className="p-6 text-red-600">Blog not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 pt-48">
      {/* Back Link */}
      <Link
        to="/blogs"
        className="inline-flex items-center gap-2 text-indigo-600 hover:underline mb-8"
      >
        &larr; Back to Blog
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-indigo-600 text-4xl font-bold mb-2">
          <FaRobot />
          <h1>{blog.title}</h1>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <span>By {blog.author}</span>
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>

        {/* Video or Image */}
        {embedUrl ? (
          <div className="rounded-xl overflow-hidden mb-6">
            <iframe
              src={embedUrl}
              title={blog.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64"
            ></iframe>
          </div>
        ) : (
          <img
            src={blog.coverImage}
            alt={blog.title}
            loading="lazy"
            className="rounded-xl w-full h-64 object-cover mb-6"
          />
        )}

        <p className="text-lg text-gray-700 leading-relaxed">{blog.intro}</p>
      </div>

      {/* Sections */}
      {blog.sections?.map((section, i) => (
        <div
          key={i}
          className="mb-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            {section.heading}
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {section.points.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Conclusion */}
      <div className="mt-10 pt-6 border-t">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">{blog.conclusion}</p>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center">
        <h3 className="text-lg font-medium text-indigo-800">{blog.cta}</h3>
        <Link
          to="/contact"
          className="inline-block mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Related Posts */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          📚 Related Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((related) => (
            <BlogCard key={related.id} blog={related} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
