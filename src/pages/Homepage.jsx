import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllPosts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/posts`);
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">📰 NewsFeed</h1>
        <Link
          to="/create/post"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Create Post
        </Link>
      </nav>

      {/* Posts Section */}
      <div className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Posts</h2>

        {loading ? (
          <div className="text-center text-gray-500">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-500">No posts found.</div>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-md rounded-2xl p-4 mb-6"
            >
              <div className="text-sm text-gray-500 mb-1">
                Posted by <span className="font-semibold text-gray-700">{post.name}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-800">{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
