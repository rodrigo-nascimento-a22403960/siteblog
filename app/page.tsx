import Aurora from '@/components/Aurora';
import DecryptedText from '@/components/DecryptedText';
import Link from 'next/link';
// Ícones opcionais, se não tiveres instalado o lucide-react, avisa-me que eu removo.

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden font-sans">
      
      {/* 1. O Background Aurora */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* 2. Conteúdo Central (Hero Section) */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4">
         <div className="text-center space-y-8"> {/* Aumentei o space-y para dar ar */}
             
             {/* SEU NOME */}
             <div className="text-white text-6xl md:text-8xl font-extrabold tracking-tighter drop-shadow-lg">
                <DecryptedText
                  text="Rodrigo Nascimento"
                  animateOn="view"
                  revealDirection="center"
                  speed={100}
                  maxIterations={20}
                  characters="ABCD1234!?"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="text-gray-400"
                />
             </div>

             {/* CARGO */}
             <div className="text-xl md:text-2xl font-mono tracking-[0.2em] uppercase text-white/80">
                <DecryptedText
                  text="Computer Engineer"
                  animateOn="view"
                  revealDirection="start"
                  speed={50}
                  maxIterations={15}
                  characters="01010101"
                  className="text-green-400 font-bold"
                  encryptedClassName="text-white/30"
                />
             </div>

             {/* 3. OS BOTÕES (Novidade) */}
             <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center items-center animate-fade-in-up">
                
                {/* Botão 1: Principal (Ver Projetos) */}
                <Link 
                  href="/projects" 
                  className="group relative px-8 py-3 bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-[#7cff67] transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Ver Projetos
                    {/* Seta simples feita com texto se não quiseres ícones: -> */}
                    <span>→</span> 
                  </span>
                </Link>

                {/* Botão 2: Secundário (Contactar) */}
                <Link 
                  href="/contact" 
                  className="group px-8 py-3 border border-white/30 text-white font-bold tracking-widest uppercase text-sm hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Contactar
                  </span>
                </Link>

             </div>

         </div>
      </div>
      
    </main>
  );
}