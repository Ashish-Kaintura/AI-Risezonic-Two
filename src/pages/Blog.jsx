import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs.json";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const allTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags))).sort();
  const allAuthors = Array.from(new Set(blogs.map((blog) => blog.author)));

  useEffect(() => {
    window.scrollTo(0, 0);
    applyFilters();
  }, [searchQuery, selectedTags, selectedAuthor, sortOrder, currentPage]);

  const applyFilters = () => {
    let results = [...blogs];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.tags.join(" ").toLowerCase().includes(query)
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      results = results.filter((blog) =>
        selectedTags.every((tag) => blog.tags.includes(tag))
      );
    }

    // Filter by author
    if (selectedAuthor) {
      results = results.filter((blog) => blog.author === selectedAuthor);
    }

    // Sort
    results.sort((a, b) =>
      sortOrder === "desc"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

    setFilteredBlogs(results);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleAuthorChange = (e) => {
    setSelectedAuthor(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedAuthor("");
    setSortOrder("desc");
    setCurrentPage(1);
  };

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);

  return (
    <div className="pt-24 pb-16 bg-[#f9fafc] min-h-screen mt-[86px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text py-4 text-transparent mb-3">
            Risezonic Blog
          </h1>
          <p className="text-lg text-gray-600">
            Stay updated with AI innovations, student success, and latest builds.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4 justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by title or tag..."
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={selectedAuthor}
            onChange={handleAuthorChange}
            className="px-4 py-2 border rounded-lg bg-white shadow-sm"
          >
            <option value="">All Authors</option>
            {allAuthors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="px-4 py-2 border rounded-lg bg-white shadow-sm"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>

          <button
            onClick={clearFilters}
            className="text-red-500 text-sm underline"
          >
            Clear Filters
          </button>
        </div>

        {/* Tag Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-4 py-1 rounded-full text-sm border transition ${
                selectedTags.includes(tag)
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blogs */}
        {filteredBlogs.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {paginatedBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-10 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`px-3 py-1 rounded-md border ${
                      num === currentPage
                        ? "bg-indigo-600 text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No blog posts match your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
