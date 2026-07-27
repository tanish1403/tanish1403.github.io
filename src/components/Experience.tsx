import { experience } from '../data';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export default function Experience() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="experience" className="section-pad">
      <div className="container-lg">
        <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''}`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-500 dark:text-accent-400 mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12">
            Where I've worked
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"
            />

            <div className="space-y-10">
              {experience.map((job, idx) => (
                <ExperienceCard key={idx} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ job }: { job: (typeof experience)[number] }) {
  return (
    <div className="sm:pl-12 relative group">
      {/* Timeline dot */}
      <div
        aria-hidden="true"
        className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-accent-500 bg-white dark:bg-slate-950 hidden sm:block group-hover:bg-accent-500 transition-colors"
      />

      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 hover:border-accent-300 dark:hover:border-accent-600 transition-colors shadow-sm hover:shadow-md">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {job.role}
              </h3>
              {job.current && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mt-0.5">
              {job.company}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-sm text-slate-500 dark:text-slate-400">{job.period}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">{job.location}</p>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
