import { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contactos`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, mensagem }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao enviar");
      }

      setStatus("success");
      setNome("");
      setEmail("");
      setMensagem("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-24 pb-40 relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-start relative z-10">
        <div>
          <h2 className="text-6xl font-bold mb-8">
            Vamos trabalhar <br />
            <span className="text-brand-purple">juntos?</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-md">
            Estou sempre em busca de novos desafios e parcerias inovadoras. Se v    ocê tem um projeto em mente, sinta-se à vontade para entrar em contato.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-purple/10 rounded-lg text-brand-purple">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-white/40 tracking-widest block font-bold mb-1">Meu EMAIL</span>
                <a href="mailto:cardosoemerson501@gmail.com" className="text-lg font-medium hover:text-brand-purple transition-colors">cardosoemerson501@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-teal/10 rounded-lg text-brand-teal">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-white/40 tracking-widest block font-bold mb-1">Localização</span>
                <p className="text-lg font-medium">Cidade de Maputo, Moçambique</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-white/60 hover:text-white">
                 <LinkedinIcon />
               </a>
               <a href="https://github.com/DevStore11" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-white/60 hover:text-white">
                 <GithubIcon />
               </a>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 border-white/10">
          {status === "success" ? (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-white">Mensagem enviada!</p>
              <p className="text-white/60 mt-2">Entrarei em contacto em breve.</p>
            </div>
          ) : (
           <form className="space-y-6" onSubmit={handleSubmit}>
             <div className="grid grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">NOME</label>
                 <input 
                   type="text"
                   name="nome"
                   placeholder="Seu nome"
                   value={nome}
                   onChange={(e) => setNome(e.target.value)}
                   className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple/50 transition-colors"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">EMAIL</label>
                 <input 
                   type="email"
                   name="email"
                   placeholder="seu@email.com"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple/50 transition-colors"
                 />
               </div>
             </div>
             <div className="space-y-2">
               <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">MENSAGEM</label>
               <textarea 
                 rows={5}
                 name="mensagem"
                 placeholder="Como posso ajudar?"
                 value={mensagem}
                 onChange={(e) => setMensagem(e.target.value)}
                 className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-purple/50 transition-colors resize-none"
               />
             </div>
             <button
               type="submit"
               disabled={status === "loading"}
               className="w-full py-4 bg-brand-purple text-dark-bg font-bold rounded-lg hover:bg-brand-purple/90 transition-all flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
             >
               {status === "loading" ? (
                 <>A enviar... <Loader2 className="w-4 h-4 animate-spin" /></>
               ) : (
                 <>Enviar Mensagem <Send className="w-4 h-4" /></>
               )}
             </button>
             {status === "error" && (
               <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                 <AlertCircle className="w-4 h-4 shrink-0" />
                 <span>Não foi possível enviar. Tenta novamente ou usa o email directamente.</span>
               </div>
             )}
           </form>
          )}
        </div>
      </div>
    </section>
  );
}