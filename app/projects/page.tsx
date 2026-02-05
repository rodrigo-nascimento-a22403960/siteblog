"use client";

import CardStack from "@/components/CardStack";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

// ✅ Sem “quadro” / moldura à volta (sem ring, sem bg, sem overflow recortado)
function ProjectImage({
  src,
  alt,
  maxW = 560,
}: {
  src: string;
  alt: string;
  maxW?: number;
}) {
  return (
    <div className="w-full flex items-center justify-center py-2">
      <div
        className="transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(124,255,103,0.25)]"
        style={{ width: `min(92vw, ${maxW}px)` }}
      >
        <Image
          src={src}
          alt={alt}
          width={maxW}
          height={maxW}
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 92vw, 560px"
          priority={alt === "4EmLinha"}
        />
      </div>
    </div>
  );
}

const projects = [
  {
    title: "4 in Line: Anti-Gravity",
    description:
      "A CLI strategy game built in Kotlin. Unlike classic Connect 4, pieces enter from the bottom. Features dynamic grid management and 'Explode' mechanics.",
    tags: ["Kotlin", "CLI", "Game Logic"],
    color: "from-purple-600 to-blue-900",
    visual: <ProjectImage src="/4EmLinha.png" alt="4EmLinha" />,
  },
  {
    title: "Naval Radar System",
    description:
      "Boat radar game developed in C. Low-level implementation focused on memory management, vector positioning, and real-time feedback.",
    tags: ["C Language", "Low-level", "Vectors"],
    color: "from-emerald-600 to-green-900",
    visual: <ProjectImage src="/radarBarco.png" alt="radarBarco" />,
  },
  {
    title: "Strategic Board Engine",
    description:
      "Complex board game developed in Java, strictly following OOP principles. Implements inheritance, polymorphism, and encapsulated states.",
    tags: ["Java", "OOP", "Design Patterns"],
    color: "from-orange-600 to-red-900",
    visual: <ProjectImage src="/JogoJava.png" alt="JogoJava" />,
  },
  {
    title: "Physics Simulation Engine",
    description:
      "A Java-based physics simulation utilizing laws of motion, collision detection, and vector mathematics to model real-world forces accurately.",
    tags: ["Java", "Physics", "Simulation", "Math"],
    color: "from-blue-600 to-indigo-900",
    visual: <ProjectImage src="/fisica.png" alt="Physics Engine" />,
  },
  {
    title: "High-Performance Game",
    description:
      "Action game developed in C++ for maximum performance. Features custom rendering loops, manual memory management, and optimized game physics.",
    tags: ["C++", "Game Dev", "Rendering", "Performance"],
    color: "from-red-700 to-rose-900",
    visual: <ProjectImage src="/game.png" alt="C++ Game" />,
  },
  {
    title: "Cinema Management System",
    description:
      "Robust Java application for managing movie databases. Implements complex sorting algorithms, search functionality, and object-oriented data persistence.",
    tags: ["Java", "Data Structures", "Algorithms"],
    color: "from-amber-600 to-orange-900",
    visual: <ProjectImage src="/movies.png" alt="Movies App" />,
  },
  {
    title: "AI-Powered Calculator",
    description:
      "Intelligent calculator integrated with AI (NLP) to interpret natural language queries and solve complex arithmetic patterns automatically.",
    tags: ["Python", "AI", "NLP"],
    color: "from-cyan-600 to-blue-900",
    visual: <ProjectImage src="/CalculadoraAI.png" alt="CalculadoraAI" maxW={380} />,
  },
  {
    title: "Relational Data System",
    description:
      "Comprehensive database architecture designed in SQL. Focus on data normalization (3NF), complex queries, and efficient relationship mapping.",
    tags: ["SQL", "Database", "Backend"],
    color: "from-slate-700 to-slate-900",
    visual: <ProjectImage src="/SQL.png" alt="SQL" />,
  },
  {
    title: "Dynamic API Store",
    description:
      "E-commerce frontend built with JavaScript. Consumes external APIs to fetch products dynamically, manage shopping cart state, and process interactions.",
    tags: ["JavaScript", "REST API", "Frontend"],
    color: "from-yellow-600 to-yellow-900",
    visual: <ProjectImage src="/lojaDeisi.png" alt="lojaDeisi" />,
  },
  
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
