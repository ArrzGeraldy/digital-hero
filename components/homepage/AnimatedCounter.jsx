import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const target = 1000;
  const duration = 2000;
  const steps = 50;
  const increment = target / steps;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    let current = 0;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, intervalTime);
  };

  return (
    <h1
      ref={counterRef}
      className="2xl:text-[140px] xl:text-9xl lg:text-8xl text-6xl font-bold text-center"
    >
      {count < target ? Math.floor(count) : "1000+"}
    </h1>
  );
};

export default AnimatedCounter;
