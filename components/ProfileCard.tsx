"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface ProfileCardProps {
  name: string;
  title?: string; // Tornar opcional, já que não vamos usar visualmente
  handle?: string; // Tornar opcional
  avatarUrl: string;
  status?: string;
  contactText?: string;
  onContactClick?: () => void;
  enableTilt?: boolean;
  behindGlowColor?: string;
}

export default function ProfileCard({
  name,
  avatarUrl,
  status = "Available",
  contactText = "Let's Talk",
  onContactClick,
  enableTilt = true,
  behindGlowColor = "#7cff67",
}: ProfileCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !enableTilt) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * 1.5;
    const mouseY = (e.clientY - rect.top) * 1.5;
    const rX = (mouseY / height - 0.5) * 10 * -1;
    const rY = (mouseX / width - 0.5) * 10;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: enableTilt ? transform : "none",
      }}
      className="group relative w-full h-full min-h-[450px] rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,255,103,0.15)]"
    >
      {/* GLOW EFFECT */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 50%, ${behindGlowColor}, transparent 70%)` }}
      />

      {/* --- FOTO --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src={avatarUrl}
          alt={name}
          fill
          priority
          className="object-cover opacity-90 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
        />
        
        {/* GRADIENTE */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 opacity-90" />
      </div>

      {/* --- CONTEÚDO --- */}
      <div 
        className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8"
        style={{ transform: "translateZ(20px)" }}
      >
        
        {/* PARTE DE CIMA: APENAS O NOME */}
        <div className="pt-2 flex justify-between items-start w-full">
            {/* Nome com tamanho aumentado para destaque */}
            <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-md leading-none">
              {name}
            </h2>

            {/* Mantive o Status Badge no canto (opcional, se quiseres tirar apaga esta div) */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg shrink-0">
               <span className="relative flex h-2.5 w-2.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
               </span>
               <span className="text-xs font-medium text-white/90">{status}</span>
            </div>
        </div>

        {/* PARTE DE BAIXO: BOTÕES */}
        <div className="flex items-center gap-4">
           <button 
             onClick={onContactClick}
             className="flex-1 bg-white text-black py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#7cff67] transition-colors duration-300"
           >
             {contactText} <ArrowUpRight size={18} />
           </button>

           <div className="flex gap-2">
              <a href="https://github.com" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/20 transition-all text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/20 transition-all text-white">
                <Linkedin size={20} />
              </a>
           </div>
        </div>

      </div>
    </motion.div>
  );
}