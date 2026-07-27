import { useState } from 'react';
import { FiCode, FiCpu, FiEye, FiTerminal, FiZap } from 'react-icons/fi';
import { skillGroups } from '../data';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const CATEGORY_ICONS: Record<string, JSX.Element> = {
  'Languages': <FiCode className="text-indigo-500" size={20} />,
  'Deep Learning Frameworks': <FiCpu className="text-purple-500" size={20} />,
  'CV & Imaging': <FiEye className="text-sky-500" size={20} />,
  'Dev Tools & Data': <FiTerminal className="text-emerald-500" size={20} />,
};

export default function Skills() {
  const { ref, visible } = useFadeInOnScroll();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillGroups.map((g) => g.category)];

  const filteredGroups = skillGroups.filter(
    (g) => activeCategory === 'All' || g.category === activeCategory
  );

  return (
    <section id="skills" className="section-pad relative z-10 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-lg">
        <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
                Technical Stack
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Skills & Technologies
              </h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Hands-on tools and deep learning frameworks powering my computer vision and AI research.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20 scale-105'
                    : 'border-slate-300 dark:border-slate-700/80 text-slate-600 dark:text-slate-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white/60 dark:bg-slate-900/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Group Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {filteredGroups.map((group) => {
              const icon = CATEGORY_ICONS[group.category] ?? <FiZap className="text-amber-500" size={20} />;

              return (
                <div
                  key={group.category}
                  className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  {/* Subtle top corner gradient accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                  {/* Group Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 group-hover:scale-105 transition-transform duration-200">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                        {group.category}
                      </h3>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                        {group.skills.length} skills listed
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills — Uniform Style */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100/90 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Highlight Banner */}
          <div className="rounded-2xl border border-indigo-100 dark:border-indigo-900/40 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent p-5 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/20">
                <FiZap size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Core Specialization
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  PyTorch, Oriented Object Detection, 3D Medical Segmentation, CLIP Vision-Language Models & C/C++ ISP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
