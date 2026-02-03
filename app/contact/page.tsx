"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rodrigo.nascimento@email.com"; // COLOCA O TEU EMAIL AQUI

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    // ALTERAÇÕES: 
    // 1. Mudei 'pt-40' para 'pt-32' (espaço ideal para o menu não tapar).
    // 2. Removi 'justify-center' para o conteúdo não fugir para cima em ecrãs pequenos.
    // 3. Adicionei 'pb-10' para margem no fundo.
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center relative overflow-hidden px-6 pt-32 pb-10">
      
      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7cff67] opacity-[0.05] blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600 opacity-[0.05] blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        
        {/* --- CABEÇALHO --- */}
        <motion.div 
          initial="initial" 
          animate="animate" 
          variants={fadeInUp} 
          className="text-center mb-10" // Reduzi de mb-16 para mb-10
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <span className="h-px w-8 bg-[#7cff67]"></span>
             <span className="text-[#7cff67] font-mono tracking-widest uppercase text-xs">Get in Touch</span>
             <span className="h-px w-8 bg-[#7cff67]"></span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Let's work <br/>
            <span className="text-gray-500">together.</span>
          </h1>
          
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da tua visão.
          </p>
        </motion.div>


        {/* --- ÁREA DO EMAIL (Mais compacta) --- */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10 flex justify-center" // Reduzi de mb-16 para mb-10
        >
            <button 
                onClick={handleCopy}
                className="group relative flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#7cff67]/50 rounded-full px-8 py-4 transition-all duration-300 hover:bg-white/10 w-full md:w-auto justify-between md:justify-start"
            >
                <div className="p-2 bg-white/5 rounded-full text-[#7cff67]">
                    <Mail size={20} />
                </div>
                
                <div className="text-left mr-8">
                    <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-0.5">Email Me</div>
                    <div className="text-sm md:text-xl font-bold font-mono truncate">{email}</div>
                </div>

                <div className="text-gray-500 group-hover:text-white transition-colors">
                    {copied ? <Check size={18} className="text-[#7cff67]" /> : <Copy size={18} />}
                </div>

                {copied && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -40 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 bg-[#7cff67] text-black text-[10px] font-bold px-2 py-1 rounded-full pointer-events-none"
                    >
                        COPIED!
                    </motion.div>
                )}
            </button>
        </motion.div>


        {/* --- LINKS SOCIAIS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* LINKEDIN */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Link 
                    href="https://linkedin.com/in/SEU-LINKEDIN" 
                    target="_blank"
                    className="flex items-center justify-between bg-[#0a0a0a] border border-white/10 p-5 rounded-xl hover:border-blue-500/50 group transition-all duration-300"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <h3 className="text-base font-bold">LinkedIn</h3>
                            <p className="text-xs text-gray-500">Connect profissionalmente</p>
                        </div>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

            {/* GITHUB */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Link 
                    href="https://github.com/SEU-GITHUB" 
                    target="_blank"
                    className="flex items-center justify-between bg-[#0a0a0a] border border-white/10 p-5 rounded-xl hover:border-[#7cff67]/50 group transition-all duration-300"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-lg text-white group-hover:scale-110 transition-transform">
                            <Github size={20} />
                        </div>
                        <div>
                            <h3 className="text-base font-bold">GitHub</h3>
                            <p className="text-xs text-gray-500">Veja o meu código</p>
                        </div>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

        </div>

        <footer className="mt-12 text-center text-gray-600 text-xs">
            <p>© {new Date().getFullYear()} Rodrigo Nascimento. Built with Next.js & Coffee.</p>
        </footer>

      </div>
    </main>
  );
}