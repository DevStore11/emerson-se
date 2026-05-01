
export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg relative z-10">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
        <p>© 2026 DIGITAL ARCHITECT. BUILT WITH STRUCTURED FLUIDITY.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-white transition-colors">TWITTER</a>
          <a href="#" className="hover:text-white transition-colors">SOURCE CODE</a>
        </div>
      </div>
    </footer>
  );
}