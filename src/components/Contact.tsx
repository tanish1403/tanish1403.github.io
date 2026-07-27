import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export default function Contact() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="contact" className="section-pad">
      <div className="container-lg">
        <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''}`}>
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-500 dark:text-accent-400 mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Let's connect
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
              Whether it's a research collaboration, a full-time opportunity, or just a conversation
              about computer vision — my inbox is always open.
            </p>

            {/* Email button */}
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-600 text-white font-medium text-sm hover:bg-accent-700 transition-colors shadow-sm mb-10"
            >
              <FiMail size={16} />
              {personal.email}
            </a>

            {/* Social row */}
            <div className="flex justify-center items-center gap-6 text-slate-500 dark:text-slate-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-sm hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                <FiGithub size={20} />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-sm hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                <FiLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="container-lg flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400 dark:text-slate-600">
          <p>© {new Date().getFullYear()} Tanish Jain. All rights reserved.</p>
          <p>Built with React + TypeScript + Tailwind CSS</p>
        </div>
      </footer>
    </section>
  );
}
