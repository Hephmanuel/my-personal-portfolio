import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manuela Manuel's Portfolio",
  description: "A website showcasing her skills and projects.",
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Frontend', 'Portfolio', 'Designer'],
};

// Next.js 15 uses a separate viewport export to control scaling and dimensions
// This is critical for ensuring the site doesn't feel "too big" or incorrectly scaled on mobile/desktop
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-cream 
          text-gray-900 
          font-sans 
          min-h-screen 
          selection:bg-navy 
          selection:text-white
          max-w-[1920px] 
          mx-auto
        `}
      >
        {children}
      </body>
    </html>
  );
}