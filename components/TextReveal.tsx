"use client";
import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
}

export default function TextReveal({ children, className = "" }: TextRevealProps) {
  const words = children.split(" ");

  // ADICIONADO ": Variants" AQUI
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.05 },
    },
  };

  // ADICIONADO ": Variants" AQUI
  const child: Variants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(5px)", 
      y: 5 
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }} 
      className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}