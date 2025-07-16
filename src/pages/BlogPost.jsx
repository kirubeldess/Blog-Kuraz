import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../blog.json';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const blogPost = blogs.find((p) => p.id === parseInt(id));
    setPost(blogPost);
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        By {post.author} on {post.date}
      </p>
      <div className="prose lg:prose-xl">
        {post.content}
      </div>
    </div>
  );
}

export default BlogPost;