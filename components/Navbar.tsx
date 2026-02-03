import Link from 'next/link';
import Logo from './Logo'; // Importamos o nosso novo SVG

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      
     {/* --- LOGO SVG (Transparente e Vetorial) --- */}
      <div className="flex items-center">
        <Link href="/" className="group transition-opacity duration-300">
          <Logo 
            width={50}  // <-- Mudei de 60 para 50
            height={50} // <-- Mudei de 60 para 50
            className="text-white group-hover:text-[#7cff67] transition-colors duration-300" 
          />
        </Link>
      </div>

      {/* Links de Navegação */}
      <ul className="flex gap-8 text-sm font-medium tracking-widest text-white/70">
        <li>
          <Link href="/" className="hover:text-white transition-colors duration-300">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-white transition-colors duration-300">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white transition-colors duration-300">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-white transition-colors duration-300">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}