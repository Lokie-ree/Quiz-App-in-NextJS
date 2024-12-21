import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 text-white">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Activate Your Potential.</h1>
          <h2 className="text-2xl font-semibold">Ace the ACT.</h2>
          <p className="py-4 text-lg">
            Dynamic AI-powered quizzes, real-time feedback, and progress
            tracking.
          </p>
          <Link
            href="/"
            className="btn btn-primary bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 hover:from-yellow-400 hover:to-yellow-300"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
