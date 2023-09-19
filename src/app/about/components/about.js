/* eslint-disable react/no-unescaped-entities */
// src/pages/about.js

import Header from "@/app/components/Header";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Header />
  
      <div className="flex items-center justify-center h-96">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-semibold mb-6 text-cyan-900">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        This Blog site belongs to Omar Azhar; professional with a background
            in software engineering. He's an experienced web developer. Kindly
            visit the{" "}
            <Link
              target="_blank"
              className="text-blue-500 hover:underline"
              href="https://www.linkedin.com/in/omar-a-malik"
            >
              Linkedin
            </Link>{" "}
            profile for more details.
        </p>
     
        <Link href="/">
          <span className="text-blue-500 hover:underline">Back to Home</span>
        </Link>
      </div>
    </div>

    </>
  );
}
