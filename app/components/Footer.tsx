"use client";
import Link from 'next/link';
import { Github, Dribbble, Twitter } from 'lucide-react';
import React from 'react'; // React import is needed for functional components

export default function Footer() {
  const githubUrl = 'https://github.com/Hephmanuel/Projects.git';

  return (
    <footer className="bg-deepNavy py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-primaryBg">
        
        {/* Copyright */}
        <p className="text-sm order-2 md:order-1 mt-6 md:mt-0">
          &copy; {new Date().getFullYear()} Hephzibah Manuela Manuel. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-lg order-1 md:order-2">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile" 
            className="hover:text-accentYellow transition duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          {/* Placeholder Links */}
          <a href="#" aria-label="Dribbble" className="hover:text-accentYellow transition duration-200">
            <Dribbble className="w-6 h-6" />
          </a>
        
        </div>

      </div>
    </footer>
  );
}