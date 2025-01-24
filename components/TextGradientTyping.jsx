import React, { useState, useEffect } from "react";

const TextGradientTyping = ({
  firstText,
  secondText,
  className = "",
  classSpan = "",
}) => {
  const [displayFirstText, setDisplayFirstText] = useState("");
  const [displaySecondText, setDisplaySecondText] = useState("");
  const [isFirstTyping, setIsFirstTyping] = useState(true);
  const [isSecondTyping, setIsSecondTyping] = useState(false);
  const [isTypingComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isFirstTyping) {
      const timer = setTimeout(() => {
        if (displayFirstText.length < firstText.length) {
          setDisplayFirstText(firstText.slice(0, displayFirstText.length + 1));
        } else {
          setIsFirstTyping(false);
          setIsSecondTyping(true);
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    if (isSecondTyping) {
      const timer = setTimeout(() => {
        if (displaySecondText.length < secondText.length) {
          setDisplaySecondText(
            secondText.slice(0, displaySecondText.length + 1)
          );
        } else {
          setIsSecondTyping(false);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [displayFirstText, displaySecondText, isFirstTyping, isSecondTyping]);

  return (
    <h1 className={`${className}`}>
      {displayFirstText}{" "}
      {isFirstTyping && (
        <span className="border-r-2 border-gray-400 animate-blink inline-block">
          &nbsp;
        </span>
      )}
      <span className={`text-gradient ${classSpan}`}>
        {displaySecondText}{" "}
        {isSecondTyping && (
          <span className="border-r-2 border-gray-400 animate-blink inline-block">
            &nbsp;
          </span>
        )}
      </span>
    </h1>
  );
};

export default TextGradientTyping;
