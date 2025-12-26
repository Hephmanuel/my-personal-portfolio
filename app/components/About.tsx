"use client";
import { motion, Variants } from 'framer-motion';
import { User, Code, Lightbulb } from 'lucide-react';

// Framer Motion variants for the overall section container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Slower stagger for simple, sequential paragraphs
    },
  },
};

// Framer Motion variants for the individual headings/paragraphs
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Data structured to fit the three required sections 
const aboutData = [
  {
    icon: User,
    title: "Who I Am",
    content: "I am **Hephzibah Manuela Manuel**, a highly motivated Computer Science student at Pan-Atlantic University, Lagos. I approach every project with dedication, demonstrating strong reputation for hard work, punctuality, and eager pursuit of new technical challenges and knowledge.",
    tags: ["High-Achiever", "Team Player", "Eager Learner"],
  },
  {
    icon: Code,
    title: "What I Do",
    content: "I focus on developing robust, efficient software solutions using C++ and Python (e.g., the lecturer-standard CBT System I developed). I also apply foundational knowledge in data analysis to transform complex raw data into actionable insights through visualization and structured reporting.",
    tags: ["Software Development", "Data Analysis", "Python/C++ Coding", "System Design"],
  },
  {
    icon: Lightbulb,
    title: "My Focus Areas (Interests)",
    content: "My primary passion lies in **Data Science**, **Machine Learning**, and solving real-world problems. I am also keenly interested in contributing to the **Global Health Technology** sector and continuously expanding my skills in **Frontend Development** (React/Next.js).",
    tags: ["Data Science", "Machine Learning", "Health Tech", "Frontend Dev"],
  },
];

const AboutSectionItem: React.FC<typeof aboutData[0]> = ({ icon: Icon, title, content, tags }) => (
  <motion.div 
    className="mb-12 last:mb-0"
    variants={itemVariants}
  >
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-deepNavy mr-3" />
      <h3 className="text-3xl font-bold text-deepNavy">
        {title}
      </h3>
    </div>
    
    <p 
      className="text-lg text-buttonText leading-relaxed max-w-4xl mb-4"
      // Using dangerouslySetInnerHTML to correctly render the markdown formatting (e.g., **bold**)
      dangerouslySetInnerHTML={{ __html: content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
    />
    
    {/* Tags/Keywords (kept for visual context and keyword scanning) */}
    <div className="flex flex-wrap gap-2 pt-2">
      {tags.map((tag, index) => (
        <span 
          key={index}
          className="px-3 py-1 text-xs font-medium text-deepNavy bg-accentYellow/50 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 md:py-12 bg-primaryBg px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Triggers animation when section enters view
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.h2 
          className="text-5xl sm:text-6xl font-extrabold text-deepNavy mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          about me.
        </motion.h2>

        {/* Single Column Structure for Requirements (Who, What, Focus) */}
        <div className="max-w-4xl mx-auto">
          {aboutData.map((data, index) => (
            <AboutSectionItem key={index} {...data} />
          ))}
        </div>
        
      </div>
    </motion.section>
  );
}