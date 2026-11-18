with open(r'C:\Users\tanis\OneDrive\Desktop\port\script.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_func = '''function renderWork(filter) {
  const featured = $('#work-featured');
  const list = $('#work-list');
  const items = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  if (!items.length) {
    featured.innerHTML = '';
    list.innerHTML = '<li class="work-empty">No projects in this area yet.</li>';
    return;
  }

  const [lead, ...rest] = items;

  const cover = coverOf(lead);
  const media = cover
    ? `<button class="featured-media${lead.fit ? ` is-${esc(lead.fit)}` : ''}" type="button" data-open="${esc(lead.id)}" aria-label="Open ${esc(lead.title)}">
         <img src="${esc(cover)}" alt="${esc(lead.title)}" loading="lazy" />
       </button>`
    : `<div class="featured-media is-empty" aria-hidden="true">
         <span class="plate-kicker">Fig. ${pad(PROJECTS.indexOf(lead) + 1)} — no figure on file</span>
         <span class="plate-words">${esc(lead.title)}</span>
         <span class="plate-foot">${esc(lead.category)}</span>
       </div>`;

  featured.innerHTML = `
    ${media}
    <div class="feat-body">
      <div class="feat-meta-row">
        <p class="feat-meta">${esc(lead.category)} · ${esc(lead.year)}</p>
        <span class="feat-status ${statusClass(lead.status)}">${esc(lead.status)}</span>
      </div>
      <h3 class="feat-title">${esc(lead.title)}</h3>
      <p class="feat-desc">${esc(lead.description)}</p>
      <dl class="feat-metrics">
        ${lead.metrics.map((m) => `<div><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join('')}
      </dl>
      ${tagsMarkup(lead.techStack)}
      <div class="feat-actions">
        <button class="btn btn-line" type="button" data-open="${esc(lead.id)}">
          <span>Open case study</span>
          <svg class="icon"><use href="#i-arrow" /></svg>
        </button>
      </div>
    </div>
  `;

  list.innerHTML = rest.map((p, i) => {
    const img = coverOf(p);
    const preview = img ? ` data-preview="${esc(img)}"` : '';

    return `
      <li class="work-row" data-anim style="--ad:${0.04 + i * 0.03}s">
        <button class="work-btn" type="button" data-open="${esc(p.id)}"${preview}>
          <span class="work-num">${pad(i + 2)}</span>
          <span class="work-name">
            <span class="work-title">${esc(p.title)}</span>
            <span class="work-sub">${esc(p.techStack.slice(0, 3).join(' · '))}</span>
          </span>
          <span class="work-meta">${esc(p.category)} · ${esc(p.year)}</span>
          <svg class="icon work-arrow"><use href="#i-arrow" /></svg>
        </button>
      </li>
    `;
  }).join('');
}'''

new_func = '''function renderWork(filter) {
  const grid = $('#work-grid');
  const items = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  if (!items.length) {
    grid.innerHTML = '<div class="work-empty">No projects in this area yet.</div>';
    return;
  }

  grid.innerHTML = items.map((p, i) => {
    const img = coverOf(p);
    const preview = img ? ` data-preview="${esc(img)}"` : '';
    const isFeatured = i === 0;

    return `
      <article class="work-card${isFeatured ? ' is-featured' : ''}" data-anim style="--ad:${i * 0.04}s">
        <div class="work-card-media">
          ${img ? `<img src="${esc(img)}" alt="${esc(p.title)}" loading="lazy" />` : '<span class="no-cover"></span>'}
          <span class="work-card-status ${statusClass(p.status)}">${esc(p.status)}</span>
        </div>
        <div class="work-card-body">
          <p class="work-card-meta">${esc(p.category)} · ${esc(p.year)}</p>
          <h3 class="work-card-title">${esc(p.title)}</h3>
          <p class="work-card-desc">${esc(p.description)}</p>
          <dl class="work-card-metrics">
            ${p.metrics.map((m) => `<div><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join('')}
          </dl>
          ${tagsMarkup(p.techStack, 'work-card-tags')}
          <button class="btn btn-line btn-sm work-card-btn" type="button" data-open="${esc(p.id)}"${preview}>
            <span>Open case study</span>
            <svg class="icon"><use href="#i-arrow" /></svg>
          </button>
        </div>
      </article>
    `;
  }).join('');
}'''

if old_func in content:
    content = content.replace(old_func, new_func)
    with open(r'C:\Users\tanis\OneDrive\Desktop\port\script.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS: renderWork function updated')
else:
    print('FAILED: Could not find exact match')