import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-40 pb-20 overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-10">
            Olá, eu sou <br />
            <span className="text-brand-purple">Emerson.</span> <br />
            Desenvolvedor <br />
            <span className="text-brand-teal">Full Stack.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-lg mb-10 leading-relaxed">
            Transformando lógica complexa em experiências digitais fluidas. 
            Especialista em arquitetar sistemas escaláveis com estética editorial.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Contact Me <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button className="btn-outline">
              Download CV <Download className="w-4 h-4 ml-1" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 bg-brand-purple/20 rounded-3xl blur-[100px]" />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
            alt="Emerson Portrait" 
            className="relative z-10 w-full h-full object-cover rounded-3xl grayscale brightness-110 contrast-125"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
      <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-purple to-transparent" />
          </div>
      </div>
    </section>
  );
}