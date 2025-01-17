import React, { useState, useEffect } from "react";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const typingSpeed = 60;

  useEffect(() => {
    let timeoutId;
    let currentPosition = 0;

    const typeNextCharacter = () => {
      if (currentPosition <= text.length) {
        setDisplayedText(text.substring(0, currentPosition));
        currentPosition++;
        timeoutId = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        setIsTypingComplete(true);
      }
    };

    typeNextCharacter();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <p className="2xl:text-4xl xl:text-2xl text-xl text-gray-300 w-3/4 mx-auto mt-8 text-center montserrat">
      {displayedText}
      {!isTypingComplete && (
        <span className="border-r-2 border-gray-400 animate-blink">&nbsp;</span>
      )}
    </p>
  );
};

export default TypingText;
