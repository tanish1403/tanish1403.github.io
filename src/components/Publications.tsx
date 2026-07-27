import { publications, awards } from '../data';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export default function Publications() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="publications" className="section-pad">
      <div className="container-lg">
        <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''}`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-500 dark:text-accent-400 mb-3">
            Research
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12">
            Publications & Awards
          </h2>

          {/* Publications */}
          <div className="mb-14">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-6">
              Publications
            </h3>
            <ol className="space-y-5">
              {publications.map((pub, i) => (
                <li
                  key={i}
                  className="flex gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-accent-300 dark:hover:border-accent-600 transition-colors shadow-sm"
                >
                  {/* Number */}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-100 dark:bg-accent-900/40 text-accent-600 dark:text-accent-400 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-snug">
                        {pub.title}
                      </h4>
                      {pub.award && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700 whitespace-nowrap">
                          {pub.award}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium text-accent-600 dark:text-accent-400">
                        {pub.venue}
                      </span>
                      <span>·</span>
                      <span>{pub.year}</span>
                      <span>·</span>
                      <span
                        className={
                          pub.status === 'Accepted' || pub.status === 'Published'
                            ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                            : 'text-amber-600 dark:text-amber-400 font-medium'
                        }
                      >
                        {pub.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Awards & Honours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-6">
              Achievements
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm text-center hover:border-accent-300 dark:hover:border-accent-600 transition-colors"
                >
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                    {award.title}
                  </p>
                  <p className="text-xs font-medium text-accent-600 dark:text-accent-400 mb-2">
                    {award.event}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
