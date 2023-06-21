'use client'
import React, { useState, useEffect } from 'react';
import './Typewriter.css'; // Create this file for custom styles

interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the typing speed here (milliseconds)

    return () => clearInterval(intervalId);
  }, [text]);

  return <div className="typewriter">{currentText}</div>;
};

export default Typewriter;
