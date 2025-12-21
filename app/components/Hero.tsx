"use client";

import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const profileImage = "/profileImage.png";

 
/* ------------------------- Typing Animation Hook ------------------------- */
function useTypewriter(text: unknown, speed = 90) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplay(String(text).slice(0, index + 1));
      index++;
      if (index === String(text).length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return display;
}

/* ------------------------- Graphic Shapes (Framer Motion) ------------------------- */
const GraphicShapes = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-10">

    <motion.img
      src="/strokes.png"
      alt="Top Right Abstract Graphic"
      className="absolute top-4 right-5 opacity-90 z-10 w-20 h-20"
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

    <motion.img
      src="/strokes4.png"
      alt="Bottom Left Abstract Graphic"
      className="absolute bottom-4 left-48 opacity-80 z-10 w-20 h-20"
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
  </div>
);

/* --------------------------- Main Component --------------------------- */
export default function Hero() {
  const circleRef = useRef(null);
  const fullName = useTypewriter("Manuela\nManuel", 150);


const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxOffset = 6;
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
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power1.out",
      onComplete: () => {
        gsap.set(button, { "--react-shadow": "0 0 0 rgba(0,0,0,0)" });
      },
    });
  };


  /* GSAP entry animation */
  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);


  return (
    <section id="home" className="py-16 md:py-24 bg-primaryBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Column */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-xl sm:text-2xl text-deepNavy font-medium">Hello, I'm</p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter whitespace-pre-line">
            <span className="text-deepNavy">
              {fullName}
            </span>
          </h1>


          <p className="text-l sm:text-2xl text-deepNavy font-normal pt-2">
            A computer science student passionate in data science, machine learning,
            health and a bit of frontend development.
          </p>

                <Link href="#contact" legacyBehavior>
      <a
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          inline-block mt-8 px-8 py-3 rounded-lg shadow-lg
              transform hover:scale-[1.03] active:scale-[0.98] font-semibold text-lg
              bg-amber-200 text-buttonText
              contact-glow-button
          transition-all duration-100
          hover:bg-purple-700
          hover:text-white
        "
      >
        Contact Me
      </a>
    </Link>
        </div>

        {/* Image + Shapes */}
        <div className="flex justify-center md:justify-end relative">
          <div
            ref={circleRef}
            className="
              relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden
              border-4 border-deepNavy shadow-xl bg-primaryBg
            "
          >
            <img
              src={profileImage}
              alt="Manuela"
              className="w-full h-full object-cover grayscale-20 transition duration-500"
            />
          </div>

          <GraphicShapes />
        </div>

      </div>

      <div className="text-center mt-4 flex justify-center pt-4">
        <ArrowDown className="w-8 h-8 text-deepNavy animate-bounce" />
      </div>
    </section>
  );
}
