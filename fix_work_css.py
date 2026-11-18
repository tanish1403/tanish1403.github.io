with open(r'C:\Users\tanis\OneDrive\Desktop\port\style.css', 'r', encoding='utf-8') as f:
    content = f.read()

old_css = '''/* ── Work ───────────────────────────────────────────────── */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2.25rem;
}

.featured {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(0, 1fr);
  gap: clamp(1.4rem, 3vw, 2.5rem);
  align-items: start;
  padding-bottom: clamp(2rem, 4vw, 3rem);
  border-bottom: 1px solid var(--rule);
}

.featured-media {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 11;
  padding: 0;
  border: 1px solid var(--rule);
  border-radius: 10px;
  overflow: hidden;
  background: var(--plate-bg);
  cursor: pointer;
}
.featured-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.08) brightness(0.97);
  transition: filter 0.8s var(--ease-io), transform 1.1s var(--ease);
}
.featured-media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--signal);
  mix-blend-mode: color;
  opacity: 0.22;
  transition: opacity 0.8s var(--ease-io);
  pointer-events: none;
}
.featured-media:hover img { filter: grayscale(0) contrast(1.02); transform: scale(1.025); }
.featured-media:hover::after { opacity: 0; }

.featured-media.is-contain { background: var(--paper-2); }
.featured-media.is-contain img {
  object-fit: contain;
  padding: clamp(0.5rem, 1.2vw, 0.9rem);
  filter: none;
}
.featured-media.is-contain:hover img { transform: none; }
.featured-media.is-contain::after { opacity: 0; }

.featured-media.is-empty {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: clamp(1.1rem, 2.4vw, 1.9rem);
  background: var(--surface-ink);
  border-color: var(--surface-ink);
  color: var(--on-ink);
  cursor: default;
}
.featured-media.is-empty::after { content: none; }
.plate-kicker {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.05em;
  color: var(--on-ink-muted);
}
.plate-words {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3.4vw, 2.6rem);
  font-weight: 650;
  line-height: 1.02;
  letter-spacing: -0.03em;
  max-width: 18ch;
  text-wrap: balance;
}
.plate-foot {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.05em;
  color: #9AA6FF;
}

.feat-meta-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.feat-meta {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.feat-status {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.04em;
  color: var(--muted);
  white-space: nowrap;
}
.feat-status::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  flex: none;
}
.feat-status.is-live { color: var(--signal); }

.feat-title {
  font-size: clamp(1.45rem, 2.4vw, 1.95rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.028em;
  margin-bottom: 0.8rem;
}

.feat-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--ink-soft);
  max-width: 46ch;
}

.feat-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 1.4rem 0 1.25rem;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.feat-metrics > div { padding: 0.7rem 0.5rem 0.7rem 0; }
.feat-metrics dt {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.05em;
  color: var(--faint);
}
.feat-metrics dd {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  margin-top: 0.1rem;
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.tags li {
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--rule);
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 0.64rem;
  line-height: 1.6;
  color: var(--ink-soft);
  transition: border-color 0.2s var(--ease-io), color 0.2s var(--ease-io);
}
.feat-body:hover .tags li { border-color: var(--rule); }

.feat-actions { margin-top: 1.5rem; }

/* work index rows */
.work-list { list-style: none; }

.work-row { border-bottom: 1px solid var(--rule-soft); }
.work-row:first-child { border-top: 0; }

.work-btn {
  display: grid;
  grid-template-columns: 2.1rem minmax(0, 1fr) 10.5rem 1.4rem;
  align-items: center;
  gap: clamp(0.75rem, 1.6vw, 1.35rem);
  width: 100%;
  padding: 0.95rem 0.15rem;
  background: none;
  border: 0;
  text-align: left;
  cursor: pointer;
  color: inherit;
  position: relative;
}
.work-btn::before {
  content: '';
  position: absolute;
  left: -0.9rem;
  top: 12%;
  bottom: 12%;
  width: 2px;
  background: var(--signal);
  transform: scaleY(0);
  transform-origin: center;
  transition: transform 0.3s var(--ease);
}
.work-btn:hover::before { transform: scaleY(1); }

.work-num {
  font-family: var(--font-mono);
  font-size: 0.64rem;
  color: var(--faint);
  transition: color 0.2s var(--ease-io);
}
.work-btn:hover .work-num { color: var(--signal); }

.row-preview {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 70;
  width: clamp(180px, 17vw, 250px);
  aspect-ratio: 4 / 3;
  border: 1px solid var(--rule);
  border-radius: 6px;
  overflow: hidden;
  background: var(--plate-bg);
  box-shadow: 0 24px 50px -22px rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  will-change: transform;
  transition: opacity 0.22s var(--ease-io);
}
.row-preview.is-on { opacity: 1; }
.row-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.04);
}

.work-name {
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
  min-width: 0;
}
.work-title {
  font-family: var(--font-display);
  font-size: 1.02rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
  transition: color 0.2s var(--ease-io);
}
.work-btn:hover .work-title { color: var(--signal); }
.work-sub {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--faint);
  letter-spacing: 0.02em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.work-meta {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--muted);
  text-align: right;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.work-arrow {
  color: var(--faint);
  justify-self: end;
  transition: color 0.2s var(--ease-io), transform 0.3s var(--ease);
}
.work-btn:hover .work-arrow { color: var(--signal); transform: translateX(3px); }

.work-empty {
  padding: 2rem 0;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
}'''

new_css = '''/* ── Work ───────────────────────────────────────────────── */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2.25rem;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: clamp(1rem, 2.5vw, 1.75rem);
}

.work-card {
  display: grid;
  grid-template-rows: auto 1fr;
  border: 1px solid var(--rule);
  border-radius: 12px;
  overflow: hidden;
  background: var(--paper-2);
  transition: border-color 0.3s var(--ease-io), box-shadow 0.3s var(--ease-io), transform 0.2s var(--ease);
}
.work-card:hover {
  border-color: var(--signal);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.3);
  transform: translateY(-4px);
}
.work-card.is-featured {
  grid-column: span 1;
}

.work-card-media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--plate-bg);
}
.work-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.3) contrast(1.05);
  transition: filter 0.6s var(--ease-io), transform 0.8s var(--ease);
}
.work-card:hover .work-card-media img {
  filter: grayscale(0) contrast(1.02);
  transform: scale(1.03);
}
.work-card-media .no-cover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--faint);
  background-image: repeating-linear-gradient(
    135deg,
    transparent 0 8px,
    color-mix(in srgb, var(--ink) 8%, transparent) 8px 9px
  );
}

.work-card-status {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.04em;
  background: rgba(8, 10, 7, 0.7);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  color: #ECEDE5;
  z-index: 1;
}
.work-card-status.is-live { color: var(--signal); }
.work-card-status::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: 0.4em;
  border-radius: 50%;
  background: currentColor;
  vertical-align: 0.1em;
}

.work-card-body {
  padding: clamp(1rem, 2vw, 1.4rem);
  display: flex;
  flex-direction: column;
}

.work-card-meta {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.04em;
  color: var(--faint);
  margin-bottom: 0.5rem;
}

.work-card-title {
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  font-weight: 650;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.work-card-desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--ink-soft);
  margin-bottom: 0.85rem;
  flex: 1;
}

.work-card-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 0.5rem 0 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--rule-soft);
}
.work-card-metrics > div { padding: 0.4rem 0.25rem; }
.work-card-metrics dt {
  font-family: var(--font-mono);
  font-size: 0.52rem;
  letter-spacing: 0.05em;
  color: var(--faint);
}
.work-card-metrics dd {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-top: 0.1rem;
}

.work-card-tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin: 0.5rem 0 1rem;
}
.work-card-tags li {
  padding: 0.15rem 0.45rem;
  border: 1px solid var(--rule);
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 0.58rem;
  line-height: 1.5;
  color: var(--ink-soft);
  transition: border-color 0.2s var(--ease-io), color 0.2s var(--ease-io);
}
.work-card:hover .work-card-tags li { border-color: var(--rule); }

.work-card-btn {
  width: 100%;
  justify-content: center;
}

.work-empty {
  grid-column: 1 / -1;
  padding: 3rem 0;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
}

/* Responsive */
@media (max-width: 1080px) {
  .work-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (max-width: 780px) {
  .work-grid {
    grid-template-columns: 1fr;
  }
}'''

if old_css in content:
    content = content.replace(old_css, new_css)
    with open(r'C:\Users\tanis\OneDrive\Desktop\port\style.css', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS: Work CSS updated')
else:
    print('FAILED: Could not find exact match')