"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import Aurora from '@/components/Aurora'; // IMPORTAR O NOVO COMPONENTE

export default function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem('hasVisitedHome');
    if (visited) {
      setShouldAnimate(false);
    } else {
      sessionStorage.setItem('hasVisitedHome', 'true');
      setShouldAnimate(true);
    }
  }, []);

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 100, filter: 'blur(20px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, letterSpacing: '0em' },
    visible: { 
      opacity: 1, 
      letterSpacing: '0.2em',
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" } 
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 1 } 
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 overflow-hidden relative bg-black">
      
      {/* --- NOVO EFEITO AURORA --- */}
      {/* Substitui as bolas antigas por isto */}
      <div className="absolute inset-0 z-0">
        <Aurora 
          colorStops={["#7cff67", "#5227FF", "#000000"]} // Verde, Roxo e Preto
          blend={0.7}
          amplitude={1.2}
          speed={0.5}
        />
      </div>

      <div className="z-10 flex flex-col items-center text-center relative pointer-events-none"> 
        {/* Adicionei pointer-events-none ao container de texto, mas pointer-events-auto nos botoes */}
        
        <motion.h1 
          className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6"
          initial={shouldAnimate ? "hidden" : "visible"}
          animate="visible"
          variants={titleVariants}
        >
          Rodrigo Nascimento
        </motion.h1>

        <motion.p 
          className="text-[#7cff67] font-mono text-sm md:text-xl font-bold uppercase mb-12"
          initial={shouldAnimate ? "hidden" : "visible"}
          animate="visible"
          variants={subtitleVariants}
        >
          Computer Engineer
        </motion.p>

        <motion.div 
          className="flex gap-6 pointer-events-auto" // IMPORTANTE: pointer-events-auto para os botões funcionarem
          initial={shouldAnimate ? "hidden" : "visible"}
          animate="visible"
          variants={buttonVariants}
        >
          <Link 
            href="/projects" 
            className="px-8 py-4 bg-white text-black font-bold text-sm tracking-widest hover:bg-[#7cff67] transition-colors duration-300"
          >
            VIEW PROJECTS →
          </Link>
          
          <Link 
            href="/contact" 
            className="px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
          >
            CONTACT
          </Link>
        </motion.div>
      </div>
    </main>
  );
}