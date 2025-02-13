"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimateInProps {
  children: React.ReactNode;
  initial?: { opacity: number; y: number };
  animate?: { opacity: number; y: number };
  delay?: number;
  duration?: number;
  once?: boolean;
}

const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  delay = 0,
  duration = 1.5,
  once = true,
  ...props
}) => {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once && ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ delay, duration, type: "spring" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIn;