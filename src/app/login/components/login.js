// src/app/pages/login.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user || user.password !== password) {
        alert('Invalid credentials');
        return;
      }

      // Redirect to the dashboard or another page after successful login
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
       {/* Back Arrow and Homepage Link */}
       <div className="flex justify-between items-center mb-4">
          <Link href="/">
            <span className="text-blue-500 hover:underline cursor-pointer">
              <span className="text-xl">&larr;</span> Home
            </span>
          </Link>
          <h2 className="text-2xl font-semibold text-center text-blue-400 mb-4  py-2 rounded-t-lg">
       Sign in
      </h2>
        </div>
    
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>

      {/* Registration and Forgot Password Links/Buttons */}
      <div className="flex justify-between mt-4">
      <Link href="/forgot-password">
            <span className="text-blue-500 hover:underline cursor-pointer">Forgot Password</span>
          </Link>
          <Link href="/register">
            <span className="text-blue-500 hover:underline cursor-pointer">Register</span>
          </Link>
        
        </div>
    </div>
  </div>
  );
}
