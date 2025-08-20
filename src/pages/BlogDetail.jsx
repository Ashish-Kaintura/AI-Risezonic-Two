import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs.json";
import { FaRobot } from "react-icons/fa";
import BlogCard from "../components/BlogCard";
import { Helmet } from "react-helmet";

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
    <div className="max-w-6xl mx-auto p-6 text-gray-800 pt-48">
      <Helmet>
        <meta name="keywords" content={blog.metaKeyword} />
        <title>{blog.metatitle}</title>
        <meta name="description" content={blog.metadec} />
        <link
          rel="canonical"
          href={`https://ai.risezonic.com/blog/${blog.slug}`}
        />
      </Helmet>
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
            className="rounded-xl w-full h-[450px] object-cover mb-6"
          />
        )}

        <p className="text-lg text-gray-700 leading-relaxed">{blog.intro}</p>
      </div>

      {/* Sections */}
      {blog.content?.map((section, i) => (
        <div
          key={i}
          className="mb-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            {section.section}
          </h2>

          {/* Main text */}
          {section.text && (
            <p className="text-gray-700 leading-relaxed mb-4">{section.text}</p>
          )}

          {/* Points list */}
          {section.points && (
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          )}

          {/* Steps list */}
          {section.steps && (
            <ol className="list-decimal pl-6 text-gray-700 space-y-4">
              {section.steps.map((stepItem, j) => (
                <li key={j}>
                  <p className="font-semibold">{stepItem.step}</p>
                  <p className="text-gray-600">{stepItem.description}</p>
                </li>
              ))}
            </ol>
          )}

          {/* Methods list */}
          {section.methods && (
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {section.methods.map((method, j) => (
                <li key={j}>{method}</li>
              ))}
            </ul>
          )}

          {/* Benefits list */}
          {section.benefits && (
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {section.benefits.map((benefit, j) => (
                <li key={j}>{benefit}</li>
              ))}
            </ul>
          )}

          {/* Additional text */}
          {section.additional_text && (
            <p className="text-gray-600 mt-4">{section.additional_text}</p>
          )}

          {/* Closing text */}
          {section.closing_text && (
            <p className="text-gray-600 mt-4">{section.closing_text}</p>
          )}
        </div>
      ))}

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
