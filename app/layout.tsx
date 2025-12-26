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

// This prevents the user from accidentally zooming in or horizontal scrolling
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
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
          w-full
          max-w-[1920px] 
          mx-auto
          overflow-x-hidden
        `}
      >
        {/* Adding 'overflow-x-hidden' to both html and body is the 
          standard way to stop horizontal scrolling on mobile caused 
          by entrance animations or wide components.
        */}
        {children}
      </body>
    </html>
  );
}