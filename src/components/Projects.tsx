import { motion } from "framer-motion";
import {  ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    tag: "E-LEARNING HIGH-END",
    title: "Academia de FIFA",
    description: "Plataforma de e-learning focada em performance competitiva. Arquitetura robusta para gestão de lives, cursos e analytics em tempo real.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tech: ["REACT", "NODE.JS", "POSTGRESQL"],
    link: "#",
    github: "#"
  },
  {
    id: "02",
    tag: "TOURISM & CULTURE",
    title: "Bela África Austral",
    description: "Experiência imersiva de turismo digital. Foco total em estética editorial, performance de carregamento e UX fluida para reservas complexas.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200",
    tech: ["NEXT.JS", "TAILWINDCSS", "PRISMA"],
    link: "#",
    github: "#"
  }
];


const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);


export function Projects() {
  return (
    <section id="projetos" className="py-24 bg-white/[0.02]">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-4 block font-bold">PORTFOLIO DE ELITE</span>
            <h2 className="text-5xl md:text-7xl font-bold">
              Projetos <span className="text-white/30 italic font-medium">Selecionados</span>
            </h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold">
            Arquivo Completo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl aspect-[4/3] group"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <span className="text-[10px] text-brand-purple font-mono tracking-widest block mb-4">
                    {project.id} / {project.tag}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h3>
                  <p className="text-white/60 text-lg max-w-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                   {project.tech.map(t => (
                     <span key={t} className="px-3 py-1 border border-white/10 text-[10px] font-bold tracking-widest bg-white/5">
                       {t}
                     </span>
                   ))}
                </div>

                <div className="flex items-center gap-8 pt-4 text-xs font-bold uppercase tracking-widest">
                   <a href={project.link} className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                     Ver Projeto <ArrowRight className="w-4 h-4" />
                   </a>
                   <a href={project.github} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                     GitHub <GithubIcon />
                   </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}