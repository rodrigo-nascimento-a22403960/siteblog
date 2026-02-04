import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm pointer-events-none">
      
      {/* --- LOGO --- */}
      <div className="flex items-center pointer-events-auto">
        <Link href="/" className="group transition-opacity duration-300">
          <Logo 
            // O Logo.tsx que fizemos antes não aceita width/height props diretamente se for o SVG, 
            // mas se for a versão Image ou se ajustaste o SVG para aceitar props, isto funciona.
            // Se o logo ficar pequeno/grande demais, ajusta aqui ou na classe w-24 do Logo.tsx
             className="text-white group-hover:text-[#7cff67] transition-colors duration-300 w-12 h-12" 
          />
        </Link>
      </div>

      {/* --- LINKS DE NAVEGAÇÃO --- */}
      <ul className="flex gap-8 text-sm font-medium tracking-widest pointer-events-auto">
        <li>
          <Link 
            href="/" 
            // ALTERAÇÃO AQUI: Cor verde fixa (#7cff67) e bold
            className="text-[#7cff67] font-bold hover:opacity-80 transition-opacity duration-300"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-white/70 hover:text-white transition-colors duration-300">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white/70 hover:text-white transition-colors duration-300">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white/70 hover:text-white transition-colors duration-300">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}