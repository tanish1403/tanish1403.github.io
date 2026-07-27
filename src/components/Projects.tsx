import { useState, useEffect, useCallback } from 'react';
import { FiGithub, FiX, FiCheckCircle, FiZap, FiFileText, FiChevronRight } from 'react-icons/fi';
import { projects, type Project } from '../data';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const CATEGORIES = ['All', 'CV & Detection', 'Medical Imaging', 'GenAI & NLP', 'Tools & Systems'] as const;

const STATUS_COLORS: Record<string, string> = {
  'Completed': 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  'In Progress': 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30',
  'Research': 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
  'Published': 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
};

export default function Projects() {
  const { ref, visible } = useFadeInOnScroll();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => setModalVisible(true), 10);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setModalVisible(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = '';
    }, 350);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [closeModal]);

  const filtered = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <>
      <section id="projects" className="section-pad relative z-10 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="container-lg">
          <div ref={ref} className={`fade-in-section ${visible ? 'visible' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Research & Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
              Research implementations, computer vision models, and deep learning systems. Click any project to view details.
            </p>

            {/* Category filter tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeCategory === cat
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20'
                      : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Unified Projects Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title + i} project={project} onOpen={openModal} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-slate-400 dark:text-slate-500">
                No projects found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          visible={modalVisible}
          onClose={closeModal}
        />
      )}
    </>
  );
}

// ─── UNIFORM PROJECT CARD ───────────────────────────────────────────────────
function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const [imgFailed, setImgFailed] = useState(false);
  const coverImage = (project.images && project.images.length > 0) ? project.images[0] : undefined;
  const hasImage = Boolean(coverImage && !imgFailed);

  return (
    <article
      onClick={() => onOpen(project)}
      className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 cursor-pointer overflow-hidden"
    >
      {/* Image banner if present */}
      {hasImage ? (
        <div className="relative h-48 overflow-hidden bg-slate-950">
          <img
            src={coverImage}
            alt={project.title}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          {/* Status badge on image */}
          {project.status && (
            <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${STATUS_COLORS[project.status] ?? ''}`}>
              {project.status}
            </span>
          )}
          {/* Year badge */}
          {project.year && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 text-white/90 backdrop-blur-sm border border-white/10">
              {project.year}
            </span>
          )}
        </div>
      ) : (
        <div className="h-2 rounded-t-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500" />
      )}

      <div className="flex flex-col flex-1 p-6">
        {/* Category + status header if no image */}
        {!hasImage && (
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              {project.category}
            </span>
            <div className="flex items-center gap-2">
              {project.status && (
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${STATUS_COLORS[project.status] ?? ''}`}>
                  {project.status}
                </span>
              )}
              {project.year && (
                <span className="text-xs text-slate-400 dark:text-slate-500">{project.year}</span>
              )}
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Metrics summary if present */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 leading-none">{m.value}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Card Footer Links */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                <FiGithub size={14} /> Code
              </a>
            )}
          </div>
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
            View details <FiChevronRight size={13} />
          </span>
        </div>
      </div>
    </article>
  );
}

// ─── TAG COMPONENT ────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
      {label}
    </span>
  );
}

// ─── PROJECT MODAL ────────────────────────────────────────────────────────────
function ProjectModal({
  project,
  visible,
  onClose,
}: {
  project: Project;
  visible: boolean;
  onClose: () => void;
}) {
  const validImages = project.images ?? [];
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [imgFailedMap, setImgFailedMap] = useState<Record<number, boolean>>({});

  const isCurrentImgFailed = imgFailedMap[activeImgIndex];
  const hasValidActiveImg = validImages.length > 0 && !isCurrentImgFailed;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center transition-all duration-350 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-modal="true"
      role="dialog"
      aria-label={project.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        className={`relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 transition-transform duration-350 ${
          visible ? 'translate-y-0' : 'translate-y-8'
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 dark:bg-slate-800/80 text-white dark:text-slate-200 hover:bg-black/60 dark:hover:bg-slate-700 transition-colors backdrop-blur-sm border border-white/20 dark:border-slate-700"
        >
          <FiX size={18} />
        </button>

        {/* Hero image header if valid image exists */}
        {hasValidActiveImg ? (
          <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-3xl bg-slate-950 flex-shrink-0">
            <img
              src={validImages[activeImgIndex]}
              alt={project.title}
              onError={() => setImgFailedMap((prev) => ({ ...prev, [activeImgIndex]: true }))}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Badges & Title overlay */}
            <div className="absolute bottom-4 left-5 right-14">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {project.status && (
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${STATUS_COLORS[project.status] ?? ''}`}>
                    {project.status}
                  </span>
                )}
                {project.year && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
                    {project.year}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-600/80 text-white border border-indigo-500/50 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {project.title}
              </h2>
            </div>

            {/* Gallery thumbnails strip if multiple images */}
            {validImages.length > 1 && (
              <div className="absolute top-4 left-4 z-10 flex gap-1.5 p-1 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                {validImages.map((img, idx) => (
                  <button
                    key={img + idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-7 h-7 rounded overflow-hidden border transition-all ${
                      activeImgIndex === idx
                        ? 'border-indigo-400 scale-105 shadow-sm'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {/* Content body */}
        <div className="p-6 sm:p-8">
          {/* Header if NO image present */}
          {!hasValidActiveImg && (
            <div className="mb-6 pr-10 border-b border-slate-100 dark:border-slate-800 pb-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {project.status && (
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${STATUS_COLORS[project.status] ?? ''}`}>
                    {project.status}
                  </span>
                )}
                {project.year && (
                  <span className="text-xs text-slate-400 dark:text-slate-500">{project.year}</span>
                )}
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
            </div>
          )}

          {/* Metrics row */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{m.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <FiCheckCircle size={13} className="text-emerald-500" />
                Key Highlights & Results
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <FiZap size={13} className="text-amber-500" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${tech.color}`} />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <FiFileText size={13} className="text-indigo-500" />
              Keywords & Tags
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <FiGithub size={16} /> View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
