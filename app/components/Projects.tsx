"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Define a type for a single project item
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; 
  href: string; 
}

// Mock Data for Projects
const projectsData: Project[] = [
  {
    id: 1,
    title: 'Staff Shift and Attendance System',
    description: 'Built a full-working attendance system for staff capturing fingerprints, allowing for roster uploads and more fulfilling school assignment',
    tags: ['Java', 'Apache Netbeans'],
    imageUrl: '/sas.png',
    href: '', // No link
  },
  {
    id: 2,
    title: 'Full Data Analysis Dashboard',
    description: 'Created a comprehensive dashboard for data visualization and reporting, applying analytical skills to transform raw data into actionable insights.',
    tags: ['PowerBI', 'SQL', 'Data Cleaning'],
    imageUrl: '/datavis.png',
    href: '', // No link
  },
  {
    id: 3,
    title: 'Spiritual Gifts Web Application',
    description: 'Built a web application focusing on the user experience to help individuals discover and understand their spiritual gifts.',
    tags: ['TypeScript', 'NextJS 15', 'Tailwind CSS'],
    imageUrl: '/spigifts.png',
    href: '/project1', // Clickable link for Project 3
  },
];

const projectContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const isClickable = project.href !== '';

  const cardContent = (
    <div className={`h-full bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 ${isClickable ? 'group hover:shadow-2xl hover:-translate-y-1 cursor-pointer' : 'cursor-default'}`}>
      {/* Image Container */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gray-200">
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isClickable ? 'group-hover:scale-105' : ''}`}
        />
      </div>

      {/* Header - Arrow icon removed to avoid misleading users */}
      <div className="mb-2">
        <h3 className={`text-2xl font-bold text-deepNavy ${isClickable ? 'group-hover:underline' : ''}`}>
          {project.title}
        </h3>
      </div>

      <p className="text-buttonText mb-4 text-md">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 text-sm font-medium text-deepNavy bg-accentYellow/50 rounded-full border border-accentYellow/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div variants={projectCardVariants}>
      {isClickable ? (
        <a href={project.href} className="block no-underline">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
};

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-24 md:py-36 bg-primaryBg"
      variants={projectContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl sm:text-6xl font-extrabold text-deepNavy mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          latest work.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}