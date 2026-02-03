"use client";

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';

// Componente Individual do Cartão
const Card = ({
  i,
  title,
  description,
  tags,
  color,
  progress,
  range,
  targetScale,
  children
}: {
  i: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  children: React.ReactNode;
}) => {
  const container = useRef(null);
  
  // Animação de escala e opacidade baseada no scroll
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(5vh + ${i * 25}px)`, // Efeito de cascata no topo
        }}
        className="flex flex-col relative -top-[25%] h-[500px] w-full max-w-[1000px] rounded-[2rem] p-10 lg:p-14 origin-top border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Fundo com Gradiente dinâmico */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
        <div className="absolute inset-0 bg-[#0a0a0a] -z-10" />

        {/* Conteúdo do Cartão */}
        <div className="flex h-full gap-10">
            {/* Texto */}
            <div className="w-full lg:w-[45%] flex flex-col justify-between z-10 relative">
                <div>
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/80">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                {/* O link ou botão extra pode ser passado como children ou adicionado aqui */}
                <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-sm text-gray-500">0{i + 1} / PROJECT</span>
                </div>
            </div>

            {/* Imagem / Visual (Lado Direito) */}
            <div className="hidden lg:block w-[55%] relative rounded-2xl overflow-hidden bg-black/20 h-full border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                   {children}
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

// Componente Principal da Lista
export default function CardStack({ items }: { items: any[] }) {
  const container = useRef(null);
  
  // Controla o progresso do scroll no container inteiro
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={container} className="relative mt-[10vh]">
      {items.map((project, i) => {
        // Cálculo matemático para saber quando cada cartão deve encolher
        const targetScale = 1 - ((items.length - i) * 0.05);
        
        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          >
            {project.visual}
          </Card>
        );
      })}
    </div>
  );
}