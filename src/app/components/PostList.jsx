"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ ...newPost, authorId: 1 }), // Replace with the actual authorId
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPosts([data, ...posts]);
    setNewPost({ title: "", content: "" });
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center ">
        Omar Azhar's (EMP-ID: 32211) (Assignment 1 of NextJS by Qasim Zaib) - Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Title"
          className="w-full px-3 py-2 border rounded-md mb-2"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          required
          placeholder="Content"
          className="w-full px-3 py-2 border rounded-md mb-2"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-auto block"
        >
          Add Post
        </button>
      </form>
      <ul>
        <h3>Posts are displayed here (both statically and Dynamically)</h3>
        {posts.map((post) => (
          <li key={post.id} className="bg-white shadow-md rounded-lg p-4 my-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
