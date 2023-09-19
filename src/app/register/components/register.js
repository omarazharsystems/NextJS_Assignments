// src/pages/register.js
"use client";

// import Header from '@/app/components/Header';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Add this state
  const router = useRouter();

  // Function to update error states when input values change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    try {
      // Reset previous error messages
      setUsernameError("");
      setPasswordError("");
      setConfirmPasswordError("");

      // Check if the passwords match
      if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
        return;
      }

      // Check if the username and password are not empty
      if (!username.trim() || !password.trim()) {
        if (!username.trim()) {
          setUsernameError("Username is required");
        }
        if (!password.trim()) {
          setPasswordError("Password is required");
        }
        return;
      }

      // Create a new user
      const user = await prisma.user.create({
        data: {
          username,
          password,
        },
      });

      alert(`Registration successful for user: ${user.username}`);

      // Redirect to the login page or another page after successful registration
      router.push("/login");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full md:w-3/4 lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-950 text-center">
            Register
          </h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full p-2 mb-2 border rounded"
          />
          {usernameError && (
            <div className="text-red-500 text-sm mb-2">{usernameError}</div>
          )}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password' here
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {passwordError && (
            <div className="text-red-500 text-sm mb-2">{passwordError}</div>
          )}
          <input
            type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password' here
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full p-2 mb-2 border rounded"
          />
          {confirmPasswordError && (
            <div className="text-red-500 text-sm mb-2">
              {confirmPasswordError}
            </div>
          )}
          <button
            onClick={handleRegister}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
