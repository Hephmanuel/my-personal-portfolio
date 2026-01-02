"use client";
import Link from 'next/link';
import { ChevronLeft, CheckCircle, Code, MessageSquare, BookOpen, Link as LinkIcon, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from './../components/Footer'; // Adjusted relative path to match typical Next.js structure

// --- Static Data for Spiritual Gifts Web Application Project ---
const project = {
  name: 'Spiritual Gifts Web Application',
  fullDescription:
    'A custom-built web application that helps users identify and understand their spiritual gifts through an interactive questionnaire and a personalized profile dashboard. The application emphasizes clear user flow, intuitive interactions, and responsive design.',
  problemSolved:
    'Existing spiritual gift assessment tools are often static, text-heavy, and lack meaningful user interaction or personalization. Many do not provide a clear user flow, secure user accounts, or a way for users to revisit past results. This project addresses these gaps by delivering an interactive, structured assessment experience with secure authentication, personalized profiles, and accessible test history—making spiritual self-discovery more engaging, intuitive, and reusable over time.',
  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Axios',
    'REST APIs',
    'JWT Authentication',
  ],
  features: [
    'Interactive Multi-Step Quiz: Guides users through a structured spiritual gifts assessment.',
    'Profile & Results Dashboard: Displays user details, test history, and identified gifts.',
    'Authentication & Protected Routes: Secure login and profile access using JWT.',
    'Responsive Design: Optimized for both mobile and desktop devices.',
  ],
  lessonsLearned:
    'This project strengthened my understanding of frontend architecture, API integration, and authentication flows. It also highlighted the importance of clear communication between frontend and backend systems and thoughtful user-flow design.',
  liveLink: 'https://giftsofthespirit.netlify.app/',
  githubLink: 'https://github.com/Hephmanuel/Projects.git',
};


// --- Framer Motion Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// --- Main Component ---
export default function Project1Page() {
  return (
    <div className="min-h-screen bg-primaryBg "> 
      
      {/* Fixed Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-deepNavy py-4 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-accentYellow text-xl font-bold flex items-center hover:text-accentYellow/80 transition">
            <ChevronLeft className="w-5 h-5 mr-2" /> Back to Portfolio
          </Link>
        </div>
      </header>
      
      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-10 sm:px-10 lg:px-8 py-16 md:py-24">
        
        {/* Project Title and Overview */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-deepNavy mb-12 px-12">
            {project.name}
          </h1>
          <p className="text-xl text-buttonText max-w-3xl mx-auto">
            {project.fullDescription}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {/* GitHub Link Button (Left - Yellow) */}
            <motion.a 
              href="https://github.com/Hephmanuel/spiritualgiftsweb"
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-3 rounded-full bg-accentYellow text-buttonText font-bold shadow-lg hover:shadow-xl transition-all border border-deepNavy/10"
            >
              <Code className="w-5 h-5 mr-2" /> View Code
            </motion.a>

            {/* Live Link Button */}
            <motion.a 
              href={project.liveLink}
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-3 rounded-full bg-deepNavy text-primaryBg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <LinkIcon className="w-5 h-5 mr-2" /> Live Demo
            </motion.a>
          </div>
        </motion.header>

        {/* Section 1: Screenshots / Visuals (*/}
        <motion.section 
          className="mb-20 "
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-deepNavy mb-8 text-center flex items-center justify-center">
            <ImageIcon className="w-6 h-6 mr-3 text-accentYellow" /> Screenshots & Mockups
          </h2>
          
          {/* Creative Grid Layout for Screenshots*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-2xl border-2 border-deepNavy/10">
            
            {/* Primary Screenshot*/}
            <div className="h-64 rounded-lg overflow-hidden border-4 border-accentYellow/50 shadow-inner">
              <img 
                src={'/spigifts.png'}
                alt="Main Page Screenshot" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Secondary Screenshot */}
            <div className="h-64 rounded-lg overflow-hidden border-2 border-deepNavy/10 shadow-inner">
               <img src="/s2.png" alt="Mobile View" className="w-full h-full object-cover" /> 
            </div>
            
            {/* Tertiary Screenshot */}
            <div className="h-64 rounded-lg overflow-hidden border-2 border-deepNavy/10 shadow-inner md:col-span-2 md:max-w-md md:mx-auto">
               <img src="/s3.png" alt="Dashboard View" className="w-full h-full object-cover" /> 
            </div>
            
          </div>
        </motion.section>

        {/* Section 2: Problem Solved & Features */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* Problem Solved */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-xl border border-deepNavy/10"
          >
            <h2 className="text-3xl font-bold text-deepNavy mb-6 flex items-center border-b pb-2 border-accentYellow">
              <MessageSquare className="w-6 h-6 mr-3 text-accentYellow" /> Problem Solved
            </h2>
            <p className="text-lg text-buttonText leading-relaxed">
              {project.problemSolved}
            </p>
          </motion.section>

          {/* Key Features */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-xl border border-deepNavy/10"
          >
            <h2 className="text-3xl font-bold text-deepNavy mb-6 flex items-center border-b pb-2 border-accentYellow">
              <CheckCircle className="w-6 h-6 mr-3 text-accentYellow" /> Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-lg text-buttonText">
                  <span className="text-deepNavy font-extrabold mr-3 mt-1">&#10003;</span> {feature}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Section 3: Technologies Used & Lessons Learned in a horizontal split */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Technologies Used */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-deepNavy mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3 text-accentYellow" /> Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3 p-6 bg-white rounded-lg shadow-md border border-gray-100">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 text-md font-medium text-deepNavy bg-accentYellow rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* What I Learned */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-deepNavy mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-accentYellow" /> Lessons Learned
            </h2>
            <p className="text-lg text-buttonText leading-relaxed bg-white p-6 rounded-lg shadow-md border border-gray-100">
              {project.lessonsLearned}
            </p>
          </motion.section>
        </div>

      </main>

      {/* FOOTER  */}
      <Footer /> 
    </div>
  );
}