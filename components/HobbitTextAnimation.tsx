"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface HobbitTextAnimationProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function HobbitTextAnimation({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 80,
  pauseDuration = 2000,
}: HobbitTextAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    isPaused,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <div className={`hobbit-text-container ${className}`}>
      <AnimatePresence mode="popLayout">
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={`${currentTextIndex}-${index}`}
            className="inline-block"
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
      <motion.span className="cursor">|</motion.span>
    </div>
  );
}
