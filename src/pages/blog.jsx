import React, { useState, useEffect } from 'react';
import blogs from '../../blog.json';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogs);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">Latest Blog Posts</h1>
      <button className="align-start justify-left px-5 py-2 text-white bg-blue-600 rounded-full font-semibold text-sm hover:bg-blue-700 transition">
          Add new blog
      </button>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                By {post.author} on {post.date}
              </p>
              <p className="text-gray-700">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;