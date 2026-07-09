import { motion } from "framer-motion";

const stats = [
  { value: "Estudante", label: "EM FORMAÇÃO DESDE 2024" },
  { value: "1+", label: "PROJECTOS ENTREGUES" },
  { value: "4+", label: "TECNOLOGIAS PRINCIPAIS" },
  { value: "40%", label: "PRODUTOS EM PRODUÇÃO" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white/[0.02]">
      <div className="container-custom grid md:grid-cols-2 gap-16 lg:gap-24">
        <div>
  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-6 block">MANIFESTO</span>
  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
    Um dev que constrói <br /> coisas que importam.
  </h2>
  <div className="space-y-6 text-white/60 leading-relaxed">
    <p>
      Fullstack por escolha, não por acaso. Gosto de ter controlo de ponta a ponta desde a arquitectura da API até ao detalhe da interface que o utilizador vai tocar.
    </p>
    <p>
      Cada projecto é uma oportunidade de resolver um problema real. Sem over-engineering, sem abstrações desnecessárias só o que precisa de estar lá para funcionar.
    </p>
  </div>
</div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card p-4 md:p-8 flex flex-col justify-between aspect-square"
            >
              <span className="text-2xl font-bold
               text-brand-purple break-word">
          
                {stat.value}</span>
              <span className="text-[10px] leading-tight tracking-[0.2em] text-white/40 font-bold uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}