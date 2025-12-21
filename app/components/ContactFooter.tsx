"use client";
import Link from 'next/link';
import { Mail, Github, Dribbble, Twitter } from 'lucide-react';
import { Variants, motion } from 'framer-motion';

// Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactCTA() {
  const contactEmail = 'hephzibah.manuel@pau.edu.ng';

  return (
    <>
      {/* Contact Section (CTA) */}
      <motion.section 
        id="contact" 
        className="py-24 md:py-36 bg-primaryBg text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.h2 
            className="text-5xl sm:text-6xl font-extrabold text-deepNavy mb-8"
            variants={itemVariants}
          >
            Ready to collaborate?
          </motion.h2>
          
          <motion.p 
            className="text-buttonText text-xl max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            I'm currently seeking roles in Data Analysis and Software Development. Let's discuss your project or a potential opportunity.
          </motion.p>

          {/* Mailto CTA Link - Uses the custom button style */}
          <motion.a 
            href={`mailto:${contactEmail}`} 
            aria-label={`Email me at ${contactEmail}`}
            className={`
              inline-block mt-8 px-10 py-4 rounded-lg shadow-lg transition duration-300 
              transform hover:scale-[1.03] active:scale-[0.98] font-semibold text-xl
              bg-accentYellow text-buttonText
              contact-glow-button
            `}
            variants={itemVariants}
          >
            <Mail className="w-6 h-6 inline-block mr-2" /> Get In Touch
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}