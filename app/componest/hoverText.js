'use client';

import { useState, useEffect } from 'react';

const HoverText = ({ text }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [textPosition, setTextPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovered) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  useEffect(() => {
    const textElement = document.getElementById('text-hover');
    if (textElement) {
      const rect = textElement.getBoundingClientRect();
      setTextPosition({
        left: rect.left,
        top: rect.top
      });
    }
  }, []);

  return (
    <article
      id="text-hover"
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`relative z-10 block text-lg leading-relaxed
        ${isHovered ? 'text-black' : 'text-white'}`}
      >
        {text}
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
  );
};

export default HoverText;