import LiveBackground from './components/LiveBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { useDarkMode } from './hooks/useDarkMode';

export default function App() {
  const { dark, toggle } = useDarkMode();

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      <LiveBackground dark={dark} />
      <Navbar dark={dark} toggleDark={toggle} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
