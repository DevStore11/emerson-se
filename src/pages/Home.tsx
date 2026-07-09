import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/Sobre";
import { Toolkit } from "../components/Toolkit";
import { Projects } from "../components/Projectos";
import { Contact } from "../components/Contactos";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Toolkit />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}