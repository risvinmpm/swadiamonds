'use client';

import { useEffect, useState } from 'react';

interface AutoTypingTextProps {
  words: string[];
  typeSpeed?: number;
  pause?: number;
}

const AutoTypingText = ({
  words,
  typeSpeed = 50,
  pause = 1500,
}: AutoTypingTextProps) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
    } else {
      timeout = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setCharIndex(0);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex, words, typeSpeed, pause]);

  return (
    <span className="whitespace-nowrap transition-all duration-300 ease-out text-base font-light">
      <span className="inline-block animate-fade">{text}</span>
      <span className="ml-1 animate-pulse font-bold">_</span>
    </span>
  );
};

export default AutoTypingText;
