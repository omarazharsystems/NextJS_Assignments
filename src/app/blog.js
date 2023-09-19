/* eslint-disable react/no-unescaped-entities */
// src/app/pages/blog.js

import Link from 'next/link';
import Header from './components/Header';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Blog Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }, {
    id: 3,
    title: 'Blog Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }, {
    id: 4,
    title: 'Blog Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }, {
    id: 5,
    title: 'Blog Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
     <Header/>

      {/* Blog Posts */}
      <div className="container mx-auto mt-8 px-4 cursor-pointer">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white text-cyan-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>

   {/* Sticky Footer */}
   {/* <footer className="bg-blue-500 py-4 text-white">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Omar's Blog Site. All rights reserved.
        </div>
      </footer> */}
    </div>
  );
}
