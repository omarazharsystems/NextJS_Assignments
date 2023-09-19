/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-blue-500 p-4">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-white text-2xl font-bold">Omar's Blog Site</h1>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4">
        <li>
            <Link href="/">
              <span className="text-white hover:underline cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-white hover:underline cursor-pointer">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-white hover:underline cursor-pointer">Contact</span>
            </Link>
          </li>
          {/* <li>
            <Link href="/signup">
              <span className="text-white hover:underline cursor-pointer">Signup</span>
            </Link>
          </li> */}
          <li>
            <Link href="/login">
              <span className="text-white hover:underline cursor-pointer">Sign In</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
