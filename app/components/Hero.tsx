"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

const profileImage = "/profileImage.png";

/* ------------------------- Typing Animation Hook ------------------------- */
function useTypewriter(text: string, speed = 90) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return display;
}

/* ------------------------- Graphic Shapes (Framer Motion) ------------------------- */
const GraphicShapes = () => (
  <>
    {/* Top Right Abstract Graphic */}
    <motion.img
      src="/strokes.png"
      alt="Top Right Abstract Graphic"
      className="absolute top-0 right-0 md:top-0 md:-right-3 opacity-90 z-20 w-16 h-16 md:w-20 md:h-20 pointer-events-none"
      animate={{
        y: [0, -12, 0],
        rotate: [0, 6, -6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Bottom Left Abstract Graphic */}
    <motion.img
      src="/strokes4.png"
      alt="Bottom Left Abstract Graphic"
      className="absolute bottom-0 left-0 md:-bottom-3 md:-left-3 opacity-80 z-20 w-16 h-16 md:w-20 md:h-20 pointer-events-none"
      animate={{
        y: [0, 14, 0],
        rotate: [0, -4, 4, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </>
);


/* --------------------------- Main Component --------------------------- */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fullName = useTypewriter("Manuela\nManuel", 150);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxOffset = 8;
    const offsetX = Math.max(Math.min((x - centerX) / 5, maxOffset), -maxOffset);
    const offsetY = Math.max(Math.min((y - centerY) / 5, maxOffset), -maxOffset);

    gsap.to(button, {
      x: offsetX,
      y: offsetY,
      "--react-shadow": `${-offsetX}px ${-offsetY}px 35px rgba(0,0,0,0.45)`,
      duration: 0.25,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;
    
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(button, { "--react-shadow": "0 0 0 rgba(0,0,0,0)" });
      },
    });
  };

  /* GSAP entrance animation - now scales the entire image+shapes group */
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section id="home" className="py-16 md:py-24 bg-primaryBg px-4 md:px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Column */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-xl sm:text-2xl text-deepNavy font-medium">Hello, I'm</p>

          <h1 className="text-7xl sm:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter whitespace-pre-line">
            <span className="text-deepNavy">
              {fullName}
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-deepNavy font-normal pt-2">
            A computer science student passionate in data science, machine learning,
            health and a bit of frontend development.
          </p>

          <Link href="#contact" passHref legacyBehavior>
            <motion.a
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-block mt-8 px-10 py-4 rounded-lg shadow-lg
                font-semibold text-xl
                bg-accentYellow text-buttonText
                contact-glow-button
                transition-colors duration-200
                hover:bg-purple-700
                hover:text-white
                cursor-pointer
              "
            >
              Contact Me
            </motion.a>
          </Link>
        </div>

        {/* Image + Shapes Section */}
        <div className="flex justify-center md:justify-end">
          {/* The 'containerRef' is now on the outermost wrapper.
              This ensures that the image and shapes are treated as one unit.
              The 'relative' class here acts as the anchor point for the absolute shapes.
          */}
          <div 
            ref={containerRef}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
          >
            {/* Profile Image Circle */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-deepNavy shadow-xl bg-primaryBg relative z-10">
              <img
                src={profileImage}
                alt="Manuela"
                className="w-full h-full object-cover grayscale-20 transition duration-500"
              />
            </div>

            {/* Floating Shapes - anchored to the container corners */}
            <GraphicShapes />
          </div>
        </div>

      </div>

      <div className="text-center mt-4 flex justify-center pt-4">
        <ArrowDown className="w-8 h-8 text-deepNavy animate-bounce" />
      </div>
    </section>
  );
}