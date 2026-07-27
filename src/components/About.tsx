import { personal } from '../data';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export default function About() {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <section id="about" className="section-pad bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-lg">
        <div
          ref={ref}
          className={`fade-in-section ${visible ? 'visible' : ''}`}
        >
          {/* Section label */}
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">
            Research & Background
          </h2>

          <div className="grid md:grid-cols-5 gap-10 items-start">
            {/* Bio text */}
            <div className="md:col-span-3 space-y-4">
              {personal.bio.map((para, i) => (
                <p key={i} className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick-facts card */}
            <aside className="md:col-span-2 space-y-6">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-sm">
                <h3 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">
                  Quick Facts
                </h3>
                {[
                  { label: 'Degree', value: 'M.Tech — Signal & Image Processing' },
                  { label: 'Institute', value: 'NIT Rourkela' },
                  { label: 'GPA', value: '9.7 / 10' },
                  { label: 'Recent Role', value: 'Software Developer Intern @ Samsung R&D' },
                  { label: 'Location', value: 'Bangalore / Rourkela, India' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{label}</span>
                    <span className="text-sm text-slate-800 dark:text-slate-200 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
