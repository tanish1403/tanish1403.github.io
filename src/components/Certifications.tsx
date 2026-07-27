import { FiExternalLink, FiAward } from 'react-icons/fi';
import { certifications, type Certification } from '../data';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  'AI & ML':      { bg: 'bg-indigo-500/10 dark:bg-indigo-500/10', border: 'border-indigo-300 dark:border-indigo-700', text: 'text-indigo-700 dark:text-indigo-300', dot: 'bg-indigo-500' },
  'Data Science': { bg: 'bg-sky-500/10 dark:bg-sky-500/10',       border: 'border-sky-300 dark:border-sky-700',       text: 'text-sky-700 dark:text-sky-300',       dot: 'bg-sky-500' },
  'Programming':  { bg: 'bg-emerald-500/10',                        border: 'border-emerald-300 dark:border-emerald-700', text: 'text-emerald-700 dark:text-emerald-300', dot: 'bg-emerald-500' },
};

export default function Certifications() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="certifications" className="section-pad relative z-10 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-lg">
        <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications & Courses
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
            Verified courses and specializations completed in Deep Learning, Computer Vision, and Data Science.
          </p>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <CertCard key={cert.title + i} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert }: { cert: Certification }) {
  const color = CATEGORY_COLORS[cert.category] ?? CATEGORY_COLORS['AI & ML'];

  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-lg p-5 overflow-hidden">
      {/* Top row: icon + category badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
          {cert.icon ?? <FiAward className="text-indigo-500" size={20} />}
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${color.bg} ${color.border} ${color.text} flex-shrink-0`}>
          <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
          {cert.category}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1.5 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {cert.title}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
        {cert.issuer}
      </p>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
          Completed {cert.date}
        </span>
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            Verify <FiExternalLink size={12} />
          </a>
        )}
      </div>
    </article>
  );
}
