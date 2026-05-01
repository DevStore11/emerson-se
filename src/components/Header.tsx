import { Mail } from "lucide-react";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Tecnologias", href: "#tecnologias" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="container-custom flex justify-between items-center h-20">
        <a href="#" className="text-xl font-display font-bold tracking-tighter">
          Architect<span className="text-brand-purple">.</span>dev
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-white/60 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </button>
          <button className="hidden sm:flex px-5 py-2 bg-brand-purple text-dark-bg text-xs font-bold rounded-md hover:bg-brand-purple/90 transition-all uppercase tracking-wider">
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}