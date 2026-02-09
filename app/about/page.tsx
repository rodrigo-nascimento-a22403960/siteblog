"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; 
import { Download, Code, Server, Terminal, Cpu, Lightbulb, Users, Globe } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';
import { useRouter } from 'next/navigation';

// --- DADOS DAS SKILLS ---
const skillCategories = [
  {
    title: "Core Engineering",
    icon: <Cpu className="text-[#7cff67]" />, 
    skills: [
        { name: "Java", file: "iconjava.png" },
        { name: "Kotlin", file: "iconkotlin.png" },
        { name: "C", file: "iconc.png" },
        { name: "C++", file: "iconc++.png" },
        { name: "Python", file: "iconpython.png" },
       
    ]
  },
  {
    title: "Web & Frontend",
    icon: <Code className="text-purple-400" />,
    skills: [
        { name: "React", file: "iconreact.png" },
        { name: "JavaScript", file: "iconjs.png" },
        { name: "Next.js", file: "iconnext.png" },
        { name: "HTML/CSS", file: "iconhtml.png" },
        
    ]
  },
  {
    title: "Systems & Tools",
    icon: <Terminal className="text-blue-400" />,
    skills: [
        { name: "Git", file: "icongit.png" },
        { name: "Linux", file: "iconlinux.png" },
        { name: "Docker", file: "icondocker.png" },
        { name: "VS Code", file: "iconvscode.png" },
        
    ]
  },
  {
    title: "Soft Skills",
    icon: <Server className="text-orange-400" />,
    skills: [
        { name: "Problem Solving", icon: Lightbulb, color: "text-yellow-400" },
        { name: "Leadership", icon: Users, color: "text-green-400" },
        { name: "English (C1)", icon: Globe, color: "text-blue-400" },
        { name: "Strategy", icon: Cpu, color: "text-purple-400" },
    ]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#7cff67] selection:text-black">
      
      {/* Background Blobs (Estáticos e Suaves) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#7cff67] opacity-[0.03] blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600 opacity-[0.03] blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="min-h-screen flex flex-col justify-center relative pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-[#7cff67]"></span>
                    <span className="text-[#7cff67] font-mono tracking-widest uppercase text-xs">Who am I</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Engineer, Creative & <br/>
                    <span className="text-gray-500">Problem Solver.</span>
                </h1>
                
                <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                    <p>
                        Hello! I'm <strong className="text-white">Rodrigo Nascimento</strong>, a Computer Engineering Student passionate about building the digital future.
                    </p>
                    
                    <blockquote className="border-l-2 border-[#7cff67] pl-4 py-1 text-white/90 italic">
                        To work strategically in the development of innovative technological
                        solutions that positively impact the lives of millions of people. I want to
                        grow as a Computer Engineer in a high-performance environment, leading
                        projects in Artificial Intelligence and cloud computing.
                    </blockquote>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative w-full max-w-[340px] h-[450px] mx-auto lg:ml-auto z-10">
                <ProfileCard 
                    name="Rodrigo Nascimento"
                    // Sem title e handle conforme pediste
                    avatarUrl="/myphoto.jpeg"
                    status="Coding"
                    contactText="Let's Talk"
                    onContactClick={() => router.push('/contact')}
                    enableTilt={true}
                    behindGlowColor="#7cff67"
                />
            </motion.div>
            </div>
        </div>

        {/* --- TECH STACK SECTION --- */}
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="py-20">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-16 text-center">Tech Stack</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-[#7cff67]/30 transition-colors duration-300 group flex flex-col">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#7cff67]/10 transition-colors text-white">
                      {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{cat.title}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                   {cat.skills.map((skill: any, skillIdx) => (
                      <div key={skillIdx} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:scale-105 group/skill cursor-default">
                          
                          {skill.file ? (
                             <div className="relative w-10 h-10 transition-transform group-hover/skill:scale-110 drop-shadow-lg">
                                <Image 
                                    src={`/${skill.file}`}
                                    alt={skill.name}
                                    fill
                                    className="object-contain"
                                    unoptimized={true}
                                />
                             </div>
                          ) : (
                             <div className={`w-8 h-8 ${skill.color} transition-transform group-hover/skill:scale-110`}>
                                 {skill.icon && <skill.icon />}
                             </div>
                          )}

                          <span className="text-xs font-mono text-gray-400 group-hover/skill:text-white text-center">
                              {skill.name}
                          </span>
                      </div>
                   ))}
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- DOWNLOAD RESUME (ATUALIZADO PARA CV.pdf) --- */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-[#1a1a1a] to-black border border-white/10 rounded-2xl p-10 text-center relative overflow-hidden mb-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#7cff67]/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Want to know more?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10 text-sm">
            My resume details my professional experience, academic background, and projects in depth. Feel free to download it.
          </p>
          <div className="flex justify-center relative z-10">
            <Link 
                href="/CV.pdf" // <--- CAMINHO EXATO DO FICHEIRO
                target="_blank" // Abre num separador novo
                // O 'download' força o download em vez de abrir, se preferires podes tirar
                // Mas geralmente é bom para CVs
                download="CV_Rodrigo_Nascimento.pdf" 
                className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-[#7cff67] transition-all duration-300 hover:scale-105 text-sm"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span>DOWNLOAD RESUME</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}