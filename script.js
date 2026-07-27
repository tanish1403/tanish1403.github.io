/* ============================================================
   script.js — Portfolio Logic & Data Renderer
   ============================================================ */

// ─────────────────────────────────────────────────────────────
// DATA OBJECTS
// ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'ship-detection',
    title: 'Object Detection in Optical Aerial Images',
    category: 'CV & Detection',
    year: '2025–2026',
    status: 'Research',
    images: ['public/projects/ship-detection/cover.png'],
    description: 'Robust object detection in complex optical satellite scenes using oriented bounding boxes for small ships under fog, sea clutter, and occlusion.',
    longDescription: 'Researched robust image processing and object detection in complex satellite scenes using oriented bounding boxes for small ships under severe fog, sea clutter, and heavy occlusion. Designed multiple lightweight, computationally efficient architectures (GeoStatNet & GFCR-Net) with frequency isolation, contextual reasoning, and efficient feature fusion to reduce processing overhead. Evaluated on SCCOS, FGSRCS, and HRSC2016 benchmark datasets using AP and Recall, outperforming CVPR, AAAI, and IEEE TGRS baselines.',
    tags: ['Object Detection', 'Oriented Bounding Boxes', 'PyTorch', 'Satellite Imagery', 'Feature Fusion'],
    techStack: ['PyTorch', 'Python', 'CUDA', 'OpenCV'],
    highlights: [
      'GeoStatNet accepted at IEEE SPACE 2026',
      'GFCR-Net submitted to IEEE GRSL (under major revisions)',
      'Evaluated on SCCOS, FGSRCS, and HRSC2016 benchmark datasets',
      'Outperforms CVPR, AAAI, and IEEE TGRS baselines',
      'Frequency domain feature isolation for degraded maritime scenes'
    ],
    metrics: [
      { label: 'Datasets', value: '3' },
      { label: 'Papers', value: '2' },
      { label: 'Framework', value: 'PyTorch' }
    ]
  },
  {
    id: 'liver-segmentation',
    title: 'Liver and Tumor Segmentation in CT Scans',
    category: 'Medical Imaging',
    year: '2023–2024',
    status: 'Published',
    images: [
      'public/projects/liver-segmentation/cover.png',
      'public/projects/liver-segmentation/FlowDiagram.png',
      'public/projects/liver-segmentation/Liver_Compare.png',
      'public/projects/liver-segmentation/MAE-UNET.png',
      'public/projects/liver-segmentation/Tumor_comparison.png'
    ],
    description: '3D volumetric segmentation model for liver and tumor analysis in abdominal CT scans (NIfTI format) using 3D feature pooling & attention.',
    longDescription: 'Researched liver and tumor segmentation from abdominal CT scan volumes stored in NIfTI (.nii/.nii.gz) format. Developed a 3D-UNet-style segmentation architecture incorporating a custom 3D feature pooling module and multi-scale attention mechanisms. Trained and tested on the LiTS 2017 challenge dataset, achieving Dice scores of 0.92 for liver and 0.70 for tumor segmentation, outperforming U-Net, V-Net, and MA-Net baselines. Published at CVIP 2024 (Springer).',
    tags: ['3D Segmentation', 'TensorFlow', 'Medical Imaging', 'Attention Mechanism', 'LiTS 2017'],
    techStack: ['TensorFlow', 'Python', 'nibabel', 'SimpleITK', 'NumPy'],
    highlights: [
      'Published at CVIP 2024, Springer (pp. 457–468)',
      'Dice score 0.92 for volumetric liver segmentation',
      'Dice score 0.70 for tumor segmentation',
      'Outperforms U-Net, V-Net, and MA-Net baselines',
      'Handles NIfTI (.nii / .nii.gz) 3D abdominal volumes'
    ],
    metrics: [
      { label: 'Liver Dice', value: '0.92' },
      { label: 'Tumor Dice', value: '0.70' },
      { label: 'Benchmark', value: "LiTS'17" }
    ],
    github: 'https://github.com/tanish1403/Liver_tumor_segmentation'
  },
  {
    id: 'neuralflow',
    title: 'NeuralFlow',
    category: 'Tools & Systems',
    year: '2024',
    status: 'Completed',
    images: [
      'public/projects/neuralflow/NF1.png',
      'public/projects/neuralflow/NF2.png',
      'public/projects/neuralflow/NF3.png',
      'public/projects/neuralflow/cover.png'
    ],
    description: 'No-code / low-code visual drag-and-drop platform for constructing deep learning architectures with GenAI layer suggestions.',
    longDescription: 'NeuralFlow is a visual deep learning pipeline builder that democratizes ML model construction. Users drag and drop layer blocks (Conv, Pooling, LSTM, Attention, etc.) onto a React Flow canvas, connect them, and generate training-ready TensorFlow/PyTorch code. A GenAI backend analyzes the pipeline structure and suggests optimal layer configurations and hyperparameters.',
    tags: ['TensorFlow', 'TypeScript', 'React Flow', 'GenAI', 'Low-Code'],
    techStack: ['TypeScript', 'React', 'React Flow', 'TensorFlow.js', 'FastAPI'],
    highlights: [
      'Drag-and-drop visual canvas for neural network construction',
      'GenAI-powered layer suggestions and hyperparameter tuning',
      'Auto-generates TensorFlow/PyTorch training code',
      'Export to Python notebook with one click'
    ],
    metrics: [
      { label: 'Layer Blocks', value: '20+' },
      { label: 'Code Gen', value: 'Auto' },
      { label: 'Frameworks', value: '2' }
    ],
    github: 'https://github.com/tanish1403/neuralflow-poc'
  },
  {
    id: 'android-camera-isp',
    title: 'C Android Camera ISP',
    category: 'CV & Detection',
    year: '2024',
    status: 'Completed',
    images: [
      'public/projects/android-camera-isp/ISP_1.png',
      'public/projects/android-camera-isp/ISP_2.png'
    ],
    description: 'Low-level C/C++ Android camera Image Signal Processing (ISP) pipeline for real-time mobile camera frame processing.',
    longDescription: 'Built a C/C++-based Android camera Image Signal Processing (ISP) project focused on low-level camera-frame processing and real-time imaging workflows. Implemented modular image-processing components for raw camera data, emphasizing efficient computation, low-level debugging, and embedded/mobile camera imaging constraints.',
    tags: ['C/C++', 'Android', 'ISP Pipeline', 'Image Processing', 'Real-Time'],
    techStack: ['C', 'C++', 'Android NDK'],
    highlights: [
      'Low-level raw frame camera ISP pipeline in C/C++',
      'Optimized for mobile and embedded hardware constraints',
      'Modular components for noise reduction, demosaicing, and color correction'
    ],
    metrics: [
      { label: 'Language', value: 'C/C++' },
      { label: 'Target', value: 'Android' },
      { label: 'Type', value: 'ISP' }
    ],
    github: 'https://github.com/tanish1403/C-Android-Camera-ISP'
  },
  {
    id: 'fashion-genai',
    title: 'Conversational Fashion GenAI',
    category: 'GenAI & NLP',
    year: '2023',
    status: 'Completed',
    images: [],
    description: 'LangChain agentic AI fashion chatbot providing context-aware, trend-informed outfit recommendations. Flipkart Grid 5.0 submission.',
    longDescription: 'Built an agentic fashion chatbot using LangChain and LLM agents for context-aware and trend-aware product recommendations. Scraped e-commerce websites and social media trend data to populate a trend-rated recommendation database. Submitted as a Flipkart Grid 5.0 team solution (National Finalist).',
    tags: ['LLMs', 'LangChain', 'Agentic AI', 'Web Scraping', 'Python'],
    techStack: ['Python', 'LangChain', 'LLMs', 'Web Scraping'],
    highlights: [
      'Flipkart Grid 5.0 National Hackathon Finalist',
      'Multi-agent LangChain architecture for trend-aware recommendations',
      'Automated e-commerce & social media trend scraping engine'
    ],
    metrics: [
      { label: 'Hackathon', value: 'Grid 5.0' },
      { label: 'Result', value: 'Finalist' },
      { label: 'Stack', value: 'LangChain' }
    ],
    github: 'https://github.com/tanish1403/fashionAIChatbot'
  },
  {
    id: 'face-attendance',
    title: 'Face Recognition Attendance System',
    category: 'CV & Detection',
    year: '2023',
    status: 'Completed',
    images: ['public/projects/face-attendance/FR1.png'],
    description: 'Automated classroom attendance tracking using FaceNet transfer learning deployed on lightweight edge hardware.',
    longDescription: 'Automated classroom attendance system using FaceNet-based face recognition with transfer learning. A lightweight inference backend processes live video streams to identify students and mark attendance in a real-time database with sub-200ms per-frame latency.',
    tags: ['FaceNet', 'Transfer Learning', 'OpenCV', 'Python', 'Edge AI'],
    techStack: ['Python', 'TensorFlow', 'OpenCV'],
    highlights: [
      '98.5% face recognition accuracy',
      'Sub-200ms per-frame real-time inference',
      'Automated attendance logging backend'
    ],
    metrics: [
      { label: 'Accuracy', value: '98.5%' },
      { label: 'Latency', value: '<200ms' },
      { label: 'Model', value: 'FaceNet' }
    ],
    github: 'https://github.com/tanish1403/Face-Recognition-Attendance-System'
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Prediction',
    category: 'GenAI & NLP',
    year: '2023',
    status: 'Completed',
    images: [
      'public/projects/heart-disease/HD_1.png',
      'public/projects/heart-disease/output.png'
    ],
    description: 'Comparative Machine Learning study evaluating SVM, XGBoost, Random Forest, and KNN for binary cardiac risk classification.',
    longDescription: 'A rigorous comparative study of classical ML classifiers for heart disease prediction on clinical health datasets. Evaluated SVM, XGBoost, Random Forest, Logistic Regression, and KNN with extensive hyperparameter tuning via GridSearchCV.',
    tags: ['Scikit-learn', 'XGBoost', 'Data Analysis', 'Python'],
    techStack: ['Python', 'Scikit-learn', 'XGBoost'],
    highlights: [
      'XGBoost best model: 87.2% accuracy, 0.91 AUC-ROC',
      '5 classifiers benchmarked with GridSearchCV hyperparameter tuning'
    ],
    metrics: [
      { label: 'Accuracy', value: '87.2%' },
      { label: 'AUC-ROC', value: '0.91' },
      { label: 'Best Model', value: 'XGBoost' }
    ],
    github: 'https://github.com/tanish1403/heart-disease-prediction-using-machine-learning'
  },
  {
    id: 'query-engine',
    title: 'LLM-based Automatic Query Engine',
    category: 'GenAI & NLP',
    year: '2024',
    status: 'Completed',
    images: ['public/projects/query-engine/demo.jpg'],
    description: 'Natural-language RAG query engine over tabular CSV data using Qdrant vector similarity search and LLM synthesis.',
    longDescription: 'A RAG-powered query engine allowing natural language questions over CSV and tabular datasets. Table rows are embedded into Qdrant vector DB; retrieved contexts are passed to OpenAI LLM for natural language answer synthesis with citations.',
    tags: ['LLM', 'Qdrant', 'OpenAI', 'RAG', 'Python'],
    techStack: ['Python', 'OpenAI', 'Qdrant', 'LangChain'],
    highlights: [
      'RAG pipeline with Qdrant vector similarity retrieval',
      'Supports complex natural language tabular queries'
    ],
    metrics: [
      { label: 'Vector DB', value: 'Qdrant' },
      { label: 'LLM', value: 'OpenAI' },
      { label: 'Architecture', value: 'RAG' }
    ],
    github: 'https://github.com/tanish1403/LLM-based-Automatic-query-Engine-on-Quadrant-'
  }
];

const PUBLICATIONS = [
  {
    title: 'GeoStatNet: A Lightweight Geometrical-Statistical Oriented Object Detector in Aerial Images',
    authors: 'Tanish Jain, Sobhan Kanti Dhara, et al.',
    venue: 'IEEE International Conference on Signal Processing and Communication Engineering (SPACE 2026)',
    status: 'Accepted',
    award: 'Best Paper Award Winner 🏆'
  },
  {
    title: '3D Volumetric Segmentation of Liver and Tumor in Abdominal CT Scans via Multi-Scale Feature Pooling',
    authors: 'Tanish Jain, et al.',
    venue: 'International Conference on Computer Vision and Image Processing (CVIP 2024)',
    publisher: 'Springer (pp. 457–468)',
    status: 'Published'
  },
  {
    title: 'GFCR-Net: Guided Frequency Context Reasoning Network for Oriented Object Detection in degraded Maritime Scenes',
    authors: 'Tanish Jain, Sobhan Kanti Dhara, et al.',
    venue: 'IEEE Geoscience and Remote Sensing Letters (IEEE GRSL)',
    status: 'Under Major Revisions'
  },
  {
    title: 'TSRNet: Two-Stage Spatial-Frequency Reasoning Network for Degraded Aerial Image Object Detection',
    authors: 'Support Researcher, PRISM Group',
    venue: 'National Conference on Communications (NCC 2026)',
    status: 'Submitted'
  },
  {
    title: 'From Pixel to People: Deep Learning Architectures for Thermal-Aerial Person Detection',
    authors: 'Support Researcher, PRISM Group',
    venue: 'IEEE Transactions on Geoscience and Remote Sensing',
    status: 'Submitted'
  }
];

const AWARDS = [
  {
    title: 'Best Paper Award Winner 🏆',
    event: 'IEEE SPACE 2026 Conference',
    desc: 'Awarded Best Paper for GeoStatNet geometrical-statistical object detection framework.'
  },
  {
    title: 'Flipkart Grid 5.0 National Finalist 🚀',
    event: 'National Hackathon Finalist',
    desc: 'Selected among top national finalists for Conversational Fashion GenAI multi-agent chatbot.'
  }
];

const SKILLS = [
  { category: 'Languages', skills: ['C', 'C++', 'Python', 'SQL'] },
  { category: 'Deep Learning Frameworks', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'ONNX'] },
  { category: 'CV & Imaging', skills: ['OpenCV', 'Pillow', 'nibabel', 'openslide', 'SimpleITK', 'SciPy'] },
  { category: 'Dev Tools & Data', skills: ['Git', 'Docker', 'CI/CD', 'Linux', 'NumPy', 'pandas', 'LangChain'] }
];

const CERTS = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    year: '2023',
    category: 'AI & ML',
    icon: '🧠'
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM (Coursera)',
    year: '2023',
    category: 'Data Science',
    icon: '📊'
  }
];

// ─────────────────────────────────────────────────────────────
// CORE APP INITIALIZATION
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderProjects('All');
  initProjectFilters();
  renderPublications();
  renderSkills('All');
  initSkillFilters();
  renderCertifications();
  initModalEvents();
});

// Theme Management
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
    themeIcon.className = 'fa-solid fa-sun';
  } else {
    document.documentElement.classList.remove('light-theme');
    themeIcon.className = 'fa-solid fa-moon';
  }

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');
    const isLight = document.documentElement.classList.contains('light-theme');
    themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Navigation & Scrolling
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Projects Rendering & Filters
function renderProjects(activeCategory) {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  const filtered = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProjectModal(p.id);

    const hasImg = p.images && p.images.length > 0;
    const coverImg = hasImg ? p.images[0] : null;

    const statusClass = p.status.toLowerCase() === 'research' ? 'status-research' 
      : p.status.toLowerCase() === 'published' ? 'status-published' : 'status-completed';

    let imgHTML = '';
    if (coverImg) {
      imgHTML = `
        <div class="project-img-wrapper">
          <img src="${coverImg}" alt="${p.title}" class="project-img" />
          <div class="project-img-overlay"></div>
          <span class="project-badge-status ${statusClass}">${p.status}</span>
        </div>
      `;
    } else {
      imgHTML = `
        <div class="project-accent-bar"></div>
      `;
    }

    const metricsHTML = p.metrics.map(m => `
      <div>
        <div class="metric-val">${m.value}</div>
        <div class="metric-lbl">${m.label}</div>
      </div>
    `).join('');

    const tagsHTML = p.tags.slice(0, 3).map(t => `
      <span class="tag">${t}</span>
    `).join('');

    const codeLinkHTML = p.github ? `
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-code-link" onclick="event.stopPropagation()">
        <i class="fa-brands fa-github"></i> Code
      </a>
    ` : '<span></span>';

    card.innerHTML = `
      ${imgHTML}
      <div class="project-card-body">
        <div class="project-cat-header">
          <span class="project-cat">${p.category}</span>
          <span class="project-year">${p.year}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>

        <div class="project-metrics">${metricsHTML}</div>
        <div class="project-tags">${tagsHTML}</div>

        <div class="project-card-footer">
          ${codeLinkHTML}
          <span class="view-details-txt">Details <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function initProjectFilters() {
  const btns = document.querySelectorAll('#project-filters .filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.category);
    });
  });
}

// Publications & Awards Rendering
function renderPublications() {
  const pubList = document.getElementById('publications-list');
  const awardsGrid = document.getElementById('awards-grid');

  pubList.innerHTML = PUBLICATIONS.map(pub => `
    <div class="pub-card">
      <div class="pub-header">
        <h3 class="pub-title">${pub.title}</h3>
        ${pub.award ? `<span class="award-tag">${pub.award}</span>` : ''}
      </div>
      <div class="pub-venue">${pub.venue} ${pub.publisher ? `· ${pub.publisher}` : ''}</div>
      <div style="font-size: 0.85rem; color: var(--text-dim);">${pub.authors}</div>
    </div>
  `).join('');

  awardsGrid.innerHTML = AWARDS.map(a => `
    <div class="award-card">
      <h4 class="award-card-title">${a.title}</h4>
      <div class="award-card-event">${a.event}</div>
      <p class="award-card-desc">${a.desc}</p>
    </div>
  `).join('');
}

// Skills Rendering & Filters
function renderSkills(activeCat) {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = '';

  const filtered = activeCat === 'All' ? SKILLS : SKILLS.filter(s => s.category === activeCat);

  const icons = {
    'Languages': 'fa-solid fa-code',
    'Deep Learning Frameworks': 'fa-solid fa-microchip',
    'CV & Imaging': 'fa-solid fa-eye',
    'Dev Tools & Data': 'fa-solid fa-terminal'
  };

  filtered.forEach(s => {
    const card = document.createElement('div');
    card.className = 'skill-card';

    const pillsHTML = s.skills.map(sk => `
      <span class="skill-pill">${sk}</span>
    `).join('');

    card.innerHTML = `
      <div class="skill-card-header">
        <div class="skill-icon-box"><i class="${icons[s.category] || 'fa-solid fa-bolt'}"></i></div>
        <div>
          <h3 class="skill-card-title">${s.category}</h3>
          <span class="skill-card-count">${s.skills.length} skills</span>
        </div>
      </div>
      <div class="skill-pills">${pillsHTML}</div>
    `;

    grid.appendChild(card);
  });
}

function initSkillFilters() {
  const btns = document.querySelectorAll('#skill-filters .skill-filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.dataset.skillCat);
    });
  });
}

// Certifications Rendering
function renderCertifications() {
  const grid = document.getElementById('certs-grid');
  grid.innerHTML = CERTS.map(c => `
    <div class="cert-card">
      <div class="cert-header">
        <span class="cert-icon-box">${c.icon}</span>
        <span class="cert-category-badge">${c.category}</span>
      </div>
      <h3 class="cert-title">${c.title}</h3>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-footer">Completed ${c.year}</div>
    </div>
  `).join('');
}

// Modal System
function openProjectModal(id) {
  const p = PROJECTS.find(item => item.id === id);
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const heroWrapper = document.getElementById('modal-hero-wrapper');
  const heroImg = document.getElementById('modal-hero-img');
  const heroBadges = document.getElementById('modal-hero-badges');
  const heroTitle = document.getElementById('modal-hero-title');
  const thumbsContainer = document.getElementById('modal-thumbs');
  const noImgHeader = document.getElementById('modal-no-img-header');
  const metricsGrid = document.getElementById('modal-metrics');
  const desc = document.getElementById('modal-description');
  const highlightsList = document.getElementById('modal-highlights');
  const techStack = document.getElementById('modal-techstack');
  const tags = document.getElementById('modal-tags');
  const footerLinks = document.getElementById('modal-footer-links');

  const hasImages = p.images && p.images.length > 0;

  if (hasImages) {
    heroWrapper.style.display = 'block';
    noImgHeader.style.display = 'none';
    heroImg.src = p.images[0];
    heroTitle.textContent = p.title;

    heroBadges.innerHTML = `
      <span class="tag">${p.category}</span>
      <span class="tag">${p.year}</span>
    `;

    if (p.images.length > 1) {
      thumbsContainer.innerHTML = p.images.map((img, idx) => `
        <div class="modal-thumb ${idx === 0 ? 'active' : ''}" onclick="switchModalImage('${img}', this)">
          <img src="${img}" alt="Thumbnail ${idx + 1}" />
        </div>
      `).join('');
    } else {
      thumbsContainer.innerHTML = '';
    }
  } else {
    heroWrapper.style.display = 'none';
    noImgHeader.style.display = 'block';
    noImgHeader.innerHTML = `
      <div style="display: flex; gap: 0.5rem; margin-bottom: 0.4rem;">
        <span class="tag">${p.category}</span>
        <span class="tag">${p.year}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 800;">${p.title}</h2>
    `;
  }

  metricsGrid.innerHTML = p.metrics.map(m => `
    <div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary);">${m.value}</div>
      <div style="font-size: 0.75rem; color: var(--text-dim);">${m.label}</div>
    </div>
  `).join('');

  desc.textContent = p.longDescription || p.description;

  highlightsList.innerHTML = p.highlights.map(h => `
    <li>${h}</li>
  `).join('');

  techStack.innerHTML = p.techStack.map(t => `
    <span class="tag" style="background: rgba(99, 102, 241, 0.2); color: var(--primary);">${t}</span>
  `).join('');

  tags.innerHTML = p.tags.map(t => `
    <span class="tag">${t}</span>
  `).join('');

  if (p.github) {
    footerLinks.innerHTML = `
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.85rem;">
        <i class="fa-brands fa-github"></i> View GitHub Repository
      </a>
    `;
  } else {
    footerLinks.innerHTML = '';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function switchModalImage(imgSrc, thumbElem) {
  document.getElementById('modal-hero-img').src = imgSrc;
  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  thumbElem.classList.add('active');
}

function initModalEvents() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
