"use client";
import { useState, useEffect } from 'react';

export default function About() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [textPosition, setTextPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const textElement = document.getElementById('text-hover');
    if (textElement) {
      const rect = textElement.getBoundingClientRect();
      setTextPosition({
        left: rect.left,
        top: rect.top + window.scrollY
      });
    }
  }, []);

  return (
    <>
      <main className="flex flex-col ml-5 items-center mt-44 min-h-screen font-serif">
        <h1 className="text-6xl">
          WHO AM I?
        </h1>
        <article
          id="text-hover"
          className="mt-4 w-96 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={`relative z-10 transition-colors duration-300 ${isHovered ? 'text-black' : 'text-gray-900'}`}>
            I am Felix, a third semester Informatics Engineering student at Multi Data University Palembang. 
            I have a great interest in software development, especially in web programming and other technologies. 
            I enjoy solving problems, and exploring new things.
          </span>
          
          {isHovered && (
            <div
              className="absolute bg-yellow-300 opacity-90 w-32 h-8 rounded-lg transition-all duration-100 ease-out pointer-events-none"
              style={{
                left: `${cursorPosition.x - textPosition.left - 64}px`,
                top: `${cursorPosition.y - textPosition.top - 16}px`,
              }}
            />
          )}
        </article>
      </main>
    </>
  );
}