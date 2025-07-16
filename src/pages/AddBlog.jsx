import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now(),
      title,
      content,
      author: 'User', 
      date: new Date().toISOString().split('T')[0],
    };

    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = [...existingBlogs, newBlog];
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    alert('Blog post added successfully!');
    navigate('/blog');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">Add a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 text-lg font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 text-lg font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;
