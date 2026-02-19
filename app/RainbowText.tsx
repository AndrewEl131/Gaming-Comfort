// components/RainbowText.tsx
'use client';

import { useEffect, useState } from 'react';

interface RainbowTextProps {
  text?: string;
  className?: string;
  animationSpeed?: number; // in milliseconds
  colors?: string[];
}

const RainbowText: React.FC<RainbowTextProps> = ({
  text = "Make your own comfort",
  className = "",
  animationSpeed = 200,
  colors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3'  // Violet
  ]
}) => {
  const [colorIndexes, setColorIndexes] = useState<number[]>([]);

  useEffect(() => {
    // Initialize color indexes for each character
    setColorIndexes(text.split('').map((_, i) => i % colors.length));
    
    const interval = setInterval(() => {
      setColorIndexes(prev => 
        prev.map(index => (index + 1) % colors.length)
      );
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [text, colors.length, animationSpeed]);

  return (
    <div className={`rainbow-text-container text-4xl ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            color: colors[colorIndexes[index] || 0],
            transition: `color ${animationSpeed}ms ease-in-out`,
            display: 'inline-block'
          }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default RainbowText;