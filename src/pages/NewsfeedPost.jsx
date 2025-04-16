import React, { useEffect, useState } from 'react';
import NewsFeedPost from '../components/NewsfeedPost';

const NewsFeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/v1/posts');
        const data = await res.json();

        // If your backend returns { posts: [...] }, use data.posts
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          News Feed
        </h1>

        {loading ? (
          <div className="text-center text-gray-500">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-500">No posts available.</div>
        ) : (
          posts.map((post, index) => (
            <NewsFeedPost
              key={post._id || index}
              name={post.name}
              title={post.title}
              body={post.body}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewsFeedPage;
