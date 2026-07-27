import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { personal } from '../data';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Content */}
          <div className="md:col-span-8">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/80 dark:bg-indigo-950/40 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 tracking-wide">
                Available for full-time roles & research collaborations
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 leading-tight">
              {personal.name}
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-5">
              {personal.title}
            </p>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
              {personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-md shadow-indigo-500/20"
              >
                View Projects
              </a>
              <a
                href={personal.resumePdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                <FiDownload size={15} />
                Download Résumé
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FiGithub size={19} />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FiLinkedin size={19} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FiMail size={19} />
                <span className="hidden sm:inline">{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-500 opacity-40 group-hover:opacity-75 blur-md transition duration-500" />

              {/* Image Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src={profileImg}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 animate-bounce">
        <FiArrowDown size={18} />
      </div>
    </section>
  );
}
