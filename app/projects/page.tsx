"use client";

import CardStack from '@/components/CardStack';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// DADOS DOS PROJETOS
const projects = [
  {
    title: "Portfolio V1",
    description: "A minha casa digital. Um site focado em performance, interações fluidas e uma identidade visual forte, construído com as tecnologias mais modernas do ecossistema React.",
    tags: ['Next.js 14', 'TypeScript', 'Framer Motion', 'Tailwind'],
    color: "from-green-500 to-emerald-900", // Cor do fundo
    visual: (
       // O que aparece na "imagem" do cartão
       <div className="text-[100px] font-bold text-white/5 tracking-tighter">V1</div>
    )
  },
  {
    title: "Neural Net Classifier",
    description: "Modelo de Deep Learning para classificação de imagens. Treinado com um dataset personalizado de 50.000 imagens, atingindo 98.5% de precisão em testes.",
    tags: ['Python', 'TensorFlow', 'Keras', 'Docker'],
    color: "from-purple-500 to-indigo-900",
    visual: (
       <div className="text-[100px] font-bold text-white/5 tracking-tighter">AI</div>
    )
  },
  {
    title: "Sync Task Manager",
    description: "Aplicação móvel multiplataforma para gestão de produtividade. Sincronização em tempo real, modo offline e uma interface de utilizador premiada.",
    tags: ['Flutter', 'Firebase', 'Dart', 'iOS/Android'],
    color: "from-blue-500 to-cyan-900",
    visual: (
       <div className="text-[100px] font-bold text-white/5 tracking-tighter">APP</div>
    )
  },
  {
    title: "Vamos trabalhar?",
    description: "Se tens um projeto interessante ou queres apenas dizer olá, envia-me uma mensagem.",
    tags: ['Contact', 'Email', 'LinkedIn'],
    color: "from-white to-gray-500",
    visual: (
       <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
          FALE COMIGO <ArrowUpRight />
       </Link>
    )
  }
];

export default function Projects() {
  return (
    <main className="bg-[#050505] min-h-screen text-white relative">
        
      {/* Título da Página */}
      <div className="pt-32 px-4 text-center mb-10">
         <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            PROJETOS <span className="text-[#7cff67]">SELECIONADOS</span>
         </h1>
         <p className="text-gray-400">Role para baixo para explorar o arquivo</p>
      </div>

      {/* O Componente da Pilha */}
      <div className="pb-[50vh]"> {/* Padding no fundo para dar espaço ao último card */}
        <CardStack items={projects} />
      </div>

    </main>
  );
}