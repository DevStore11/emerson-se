import { Layers, Code2, Database, Wrench } from "lucide-react";

const technologies = [
  {
    category: "FRONTEND",
    icon: <Layers className="w-5 h-5 text-brand-teal" />,
    items: ["React", "Next.js", "TailwindCSS", "TypeScript"]
  },
  {
    category: "BACKEND",
    icon: <Code2 className="w-5 h-5 text-brand-purple" />,
    items: ["Node.js", "Express", "Python", "NestJS"]
  },
  {
    category: "DATABASE",
    icon: <Database className="w-5 h-5 text-brand-teal" />,
    items: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "TOOLS",
    icon: <Wrench className="w-5 h-5 text-brand-purple" />,
    items: ["Docker", "Git", "Figma", "AWS"]
  }
];

export function Toolkit() {
  return (
    <section id="tecnologias" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-purple mb-4 block font-bold">TOOLKIT</span>
          <h2 className="text-4xl md:text-5xl font-bold">Tecnologias que uso no dia a dia</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <div key={i} className="glass-card p-6 border-white/10 hover:border-white/20 transition-colors">
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-white/5 rounded-xl">
                  {tech.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{tech.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-white/5 rounded text-xs text-white/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}