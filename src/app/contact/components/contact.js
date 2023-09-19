import Header from '@/app/components/Header'
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from "next/link";

export default function Contact() {
  return (
    <>
    <Header />
    <div className="flex items-center justify-center h-96">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-semibold mb-6 text-cyan-900">Contact Us</h1>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-blue-600 hover:text-blue-700">
            <FaFacebook size={32} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <FaTwitter size={32} />
          </a>
          <a href="#" className="text-red-600 hover:text-red-700">
            <FaInstagram size={32} />
          </a>
        </div>

        {/* Additional Contact Information */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          You can also reach us at  <a href="mailto:omar.azharmalik@systemsltd.com" className="text-blue-500 hover:underline">
              omar.azharmalik@systemsltd.com
            </a>{' '}
            or by phone at{' '}
            <a href="tel:+923438904400" className="text-blue-500 hover:underline">
              +92 (343) 890-4400
            </a>.
        </p>

        <Link href="/home">
          <span className="text-blue-500 hover:underline">Back to Home</span>
        </Link>
      </div>
    </div>
    </>
  )
}
