import React, { useEffect } from "react";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const resourcesPost = [
  {
    id: 1,
    title: "Blogs & Case Studies",
    excerpt: [
      "RAG vs Traditional Search",
      "Prompt Engineering Best Practices",
      "LLMs in Rural Education",
      "LangChain vs LlamaIndex",
    ],
    author: "Ashish Kaintura",
    date: "June 25, 2025",
    image:
      "https://images.prismic.io/codiste-website/ZzNYiK8jQArT0wm3_AIinMobileAppDevelopmentRealCaseStudiesandBenefits.webp?auto=format,compress",
    link: "/blogs",
  },
  {
    id: 2,
    title: "Templates & Starters",
    excerpt: [
      "RAG Starter Code (Python + LangChain)",
      "Prompt Engineering Playbook",
      "Custom Agent Bot Template",
    ],
    author: "Risezonic Team",
    date: "June 22, 2025",
    image:
      "https://meta-l.cdn.bubble.io/cdn-cgi/image/w=512,h=293,f=auto,dpr=2.5,fit=contain,q=75/f1694513118913x343444911606520800/AI%20Dashboard%20Template.png",
  },
];

const ResourcesCard = ({ post }) => (
  <div className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        {post.title}
      </h3>
      <ul className="list-disc list-inside text-gray-700 text-base mb-4 space-y-1">
        {post.excerpt.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {/* <div className="flex items-center text-xs text-gray-500 gap-6 mb-4">
                <span className="flex items-center gap-1">
                    <FaUser /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {post.date}
                </span>
            </div> */}
      <Link
        to={post.link}
        className="inline-flex items-center gap-2 text-blue-600 text-sm
        font-medium hover:underline"
      >
        {" "}
        Read More <FaArrowRight />
      </Link>
    </div>
  </div>
);

const Resources = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto font-sans text-gray-800 bg-gray-50 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
          Resources
        </h1>
        <p className="text-lg text-gray-600">
          Stay updated with AI innovations, student success stories, and project
          updates.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {resourcesPost.map((post) => (
          <ResourcesCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
