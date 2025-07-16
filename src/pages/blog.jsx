import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import initialBlogs from "../../blog.json";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs) {
      setBlogPosts(storedBlogs);
    } else {
      localStorage.setItem("blogs", JSON.stringify(initialBlogs));
      setBlogPosts(initialBlogs);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold">Latest Blog Posts</h1>
        <Link to="/add-blog">
          <button className="px-5 py-2 text-white bg-blue-600 rounded-full font-semibold text-sm hover:bg-blue-700 transition">
            Add New Blog
          </button>
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700">
                  {post.content.substring(0, 100)}...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
