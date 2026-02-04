"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, Code, Server, Terminal, Cpu } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';
import TextReveal from '@/components/TextReveal';
import { useRouter } from 'next/navigation';

// --- DATA (UPDATED FROM CV [cite: 16-22]) ---
const skillCategories = [
  {
    title: "Core Engineering",
    icon: <Cpu className="text-[#7cff67]" />,
    // As tuas linguagens principais do CV
    skills: ["Java", "C_Language", "C++", "Kotlin", "Python", "Algorithms"] 
  },
  {
    title: "Web & Frontend",
    icon: <Code className="text-purple-400" />,
    skills: ["React", "JavaScript", "HTML5", "Next.js", "Tailwind_CSS", "Framer_Motion"]
  },
  {
    title: "Systems & Tools",
    icon: <Terminal className="text-blue-400" />,
    skills: ["Git", "Linux", "Docker", "IntelliJ", "VS_Code", "OOP_Design"]
  },
  {
    title: "Soft Skills",
    icon: <Server className="text-orange-400" />,
    skills: ["Problem_Solving", "Strategic_Thinking", "Team_Leadership", "English_(Advanced)"]
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
      
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#7cff67] opacity-[0.03] blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600 opacity-[0.03] blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="min-h-screen flex flex-col justify-center relative">
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
                    
                    {/* Mission Statement do CV [cite: 5-6] */}
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
                    title="Computer Engineer"
                    handle="rodrigo.dev"
                    avatarUrl="/images/me.jpg"
                    status="Coding"
                    contactText="Hire Me"
                    onContactClick={() => router.push('/contact')}
                    enableTilt={true}
                    behindGlowColor="#7cff67"
                />
            </motion.div>
            </div>
        </div>

        <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="py-32">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-16 text-center">Tech Stack</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-[#7cff67]/30 transition-colors duration-300 group min-h-[200px] flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#7cff67]/10 transition-colors text-white">{cat.icon}</div>
                  <h3 className="text-xl font-bold tracking-tight">{cat.title}</h3>
                </div>
                <div className="mt-auto">
                    <TextReveal className="text-sm md:text-base font-mono text-gray-300 leading-relaxed">
                        {cat.skills.join(" • ").replace(/_/g, " ")} 
                    </TextReveal>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-[#1a1a1a] to-black border border-white/10 rounded-2xl p-10 text-center relative overflow-hidden mb-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#7cff67]/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Want to know more?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10 text-sm">
            My resume details my professional experience, academic background, and projects in depth. Feel free to download it.
          </p>
          <div className="flex justify-center relative z-10">
            <Link href="/cv.pdf" target="_blank" download className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-[#7cff67] transition-all duration-300 hover:scale-105 text-sm">
              <Download size={18} className="group-hover:animate-bounce" />
              <span>DOWNLOAD RESUME</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}