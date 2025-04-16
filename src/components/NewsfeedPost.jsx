import React from 'react';

const NewsFeedPost = ({ name, title, body }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-4 w-full">
      <div className="text-sm text-gray-500 mb-1">
        Posted by <span className="font-semibold text-gray-700">{name}</span>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-800">{body}</p>
    </div>
  );
};

export default NewsFeedPost;
