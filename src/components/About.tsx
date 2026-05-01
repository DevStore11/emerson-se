import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "ANOS DE EXPERIÊNCIA" },
  { value: "6+", label: "PROJECTOS ENTREGUES" },
  { value: "4+", label: "TECNOLOGIAS PRINCIPAIS" },
  { value: "100%", label: "PRODUTOS EM PRODUÇÃO" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white/[0.02]">
      <div className="container-custom grid md:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-teal mb-6 block">MANIFESTO</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Um dev que gosta de <br/> construir coisas.
          </h2>
          <div className="space-y-6 text-white/60 leading-relaxed">
            <p>
              Com foco em performance e design centrado no usuário, minha abordagem une a robustez do backend com a elegância do frontend.
            </p>
            <p>
              Acredito que o código deve ser tão limpo quanto a interface que o sustenta. Cada projeto é uma oportunidade de elevar o padrão da web moderna.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card p-8 flex flex-col justify-between aspect-square"
            >
              <span className="text-5xl font-bold text-brand-purple">{stat.value}</span>
              <span className="text-[10px] leading-tight tracking-[0.2em] text-white/40 font-bold uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}