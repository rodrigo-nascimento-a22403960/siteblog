"use client";

import CardStack from '@/components/CardStack';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Gravity Connect 4",
    // Baseado no CV
    description: "A 'Connect 4' game developed in Kotlin featuring a custom mechanic where pieces enter from below the board, simulating inverted gravity. Focused on creative logic and unique user experience.",
    tags: ['Kotlin', 'Game Logic', 'UI/UX', 'Algorithms'],
    color: "from-purple-600 to-blue-900",
    visual: (
       <div className="text-[80px] font-bold text-white/5 tracking-tighter">KOTLIN</div>
    )
  },
  {
    title: "Naval Radar System",
    // Baseado no CV
    description: "Boat radar game developed in C. Low-level implementation focused on memory management, vector positioning, and real-time radar-style feedback logic.",
    tags: ['C Language', 'Low-level', 'Memory Mgmt', 'Vectors'],
    color: "from-emerald-600 to-green-900",
    visual: (
       <div className="text-[80px] font-bold text-white/5 tracking-tighter">C-LANG</div>
    )
  },
  {
    title: "Strategic Board Engine",
    // Baseado no CV
    description: "Complete board game engine built in Java. Features robust Object-Oriented architecture, complex turn management, event mechanics, and strict rule encapsulation.",
    tags: ['Java', 'OOP', 'Design Patterns', 'System Arch'],
    color: "from-orange-600 to-red-900",
    visual: (
       <div className="text-[80px] font-bold text-white/5 tracking-tighter">JAVA</div>
    )
  },
  {
    title: "AI & IoT Systems",
    // Baseado no CV
    description: "Development of AI-powered website assistants for information retrieval and a Smart Parking System integrating sensor automation workflows.",
    tags: ['Python', 'AI / LLMs', 'IoT', 'Automation'],
    color: "from-cyan-600 to-blue-900",
    visual: (
       <div className="text-[80px] font-bold text-white/5 tracking-tighter">AI+IoT</div>
    )
  },
  {
    title: "Let's work together?",
    description: "I'm ready to bring this technical versatility (Java, Kotlin, C, Web) to your next big project.",
    tags: ['Contact', 'Email', 'LinkedIn'],
    color: "from-white to-gray-500",
    visual: (
       <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
          CONTACT ME <ArrowUpRight />
       </Link>
    )
  }
];

export default function Projects() {
  return (
    <main className="bg-[#050505] min-h-screen text-white relative">
      <div className="pt-32 px-4 text-center mb-10">
         <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            ACADEMIC <span className="text-[#7cff67]">PROJECTS</span>
         </h1>
         <p className="text-gray-400">Engineering, Algorithms, and Creative Development</p>
      </div>

      <div className="pb-[50vh]"> 
        <CardStack items={projects} />
      </div>
    </main>
  );
}