import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  initial?: { opacity: number; y: number };
  animate?: { opacity: number; y: number };
  delay?: number;
  duration?: number;
  once?: boolean;
}

export const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  initial = { opacity: 0, y: 24 },
  animate = { opacity: 1, y: 0 },
  delay = 0,
  duration = 0.6,
  once = true,
  ...props
}) => {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          once && observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
