"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const CircleBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="circles"
        x="0"
        y="0"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="50" cy="50" r="20" fill="rgba(25, 89, 172, 0.1)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circles)" />
  </svg>
);

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#D2DCFF] flex items-center justify-center px-4 overflow-hidden relative">
      <CircleBackground />
      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-[200px] font-bold text-[#1959AC] leading-none font-heading relative inline-block">
            4
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              0
            </motion.span>
            4
          </h1>
        </motion.div>
        <motion.h2
          className="text-4xl font-semibold mb-4 text-gray-800 font-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! Page not found
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-8 font-sans max-w-md mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#1959AC] text-white font-medium rounded-lg transition-all duration-300 hover:bg-[#0546D2] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:ring-opacity-50 transform hover:-translate-y-1"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-[#1959AC] opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-10 right-10 w-16 h-16 rounded-full bg-[#0546D2] opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
