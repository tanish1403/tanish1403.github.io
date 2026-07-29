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
    images: [
      'public/projects/ship-detection/cover.png',
      'public/projects/ship-detection/SCCOS.png',
      'public/projects/ship-detection/6a13d38d-be4a-44ed-9300-bbebaefc3a5d.png',
      'public/projects/ship-detection/af417654-c086-45c8-aa49-c8b1dd72aa96_page-0001.jpg'
    ],
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
    images: [
      'public/projects/face-attendance/FR1.png',
      'public/projects/face-attendance/FR2.png',
      'public/projects/face-attendance/FR3.png'
    ],
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
    category: 'Medical Imaging',
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
  initNeuralCanvas();
  renderProjects('All');
  initProjectFilters();
  renderPublications();
  renderSkills('All');
  initSkillFilters();
  renderCertifications();
  initModalEvents();
  initScrollAnimations();
});

// Theme Management
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  if (!themeToggle || !themeIcon) return;
  
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

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

// Enhanced Interactive Neural Network Canvas Background (Whole Page)
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let dpr = window.devicePixelRatio || 1;
  let width, height;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  const numNodes = Math.min(Math.floor((width * height) / 14000), 80);
  const nodes = [];
  const pulses = [];
  const dustParticles = [];

  let mouse = { x: null, y: null, radius: 180 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Color palette for nodes: Indigo, Cyan, Violet
  const colorPalette = [
    { r: 99, g: 102, b: 241 },   // Indigo
    { r: 6, g: 182, b: 212 },    // Cyan
    { r: 168, g: 85, b: 247 }   // Violet
  ];

  // Initialize Nodes
  for (let i = 0; i < numNodes; i++) {
    const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      baseRadius: Math.random() * 2 + 1.5,
      color: col,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.015 + Math.random() * 0.025
    });
  }

  // Initialize background floating dust particles
  const dustCount = Math.floor(width / 24);
  for (let i = 0; i < dustCount; i++) {
    dustParticles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.3 + 0.4,
      vy: -(Math.random() * 0.25 + 0.05),
      alpha: Math.random() * 0.45 + 0.1
    });
  }

  // Periodically emit neural pulses along connected nodes
  setInterval(() => {
    if (nodes.length < 2) return;
    const startIdx = Math.floor(Math.random() * nodes.length);
    const startNode = nodes[startIdx];
    
    for (let j = 0; j < nodes.length; j++) {
      if (j === startIdx) continue;
      const endNode = nodes[j];
      const dx = startNode.x - endNode.x;
      const dy = startNode.y - endNode.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 145) {
        pulses.push({
          start: startNode,
          end: endNode,
          progress: 0,
          speed: 0.015 + Math.random() * 0.02,
          color: startNode.color
        });
        break;
      }
    }
  }, 350);

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.classList.contains('light-theme');

    // 1. Draw Ambient Dust Stars
    for (let i = 0; i < dustParticles.length; i++) {
      let p = dustParticles[i];
      p.y += p.vy;
      if (p.y < 0) {
        p.y = height;
        p.x = Math.random() * width;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? `rgba(99, 102, 241, ${p.alpha * 0.5})` : `rgba(255, 255, 255, ${p.alpha})`;
      ctx.fill();
    }

    // 2. Update & Render Neural Nodes
    for (let i = 0; i < nodes.length; i++) {
      let n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      n.pulse += n.pulseSpeed;

      if (n.x < -10) n.x = width + 10;
      if (n.x > width + 10) n.x = -10;
      if (n.y < -10) n.y = height + 10;
      if (n.y > height + 10) n.y = -10;

      // Mouse interactive gentle repulsion
      if (mouse.x && mouse.y) {
        let mdx = mouse.x - n.x;
        let mdy = mouse.y - n.y;
        let mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius) {
          let force = (1 - mdist / mouse.radius) * 0.6;
          n.x -= (mdx / mdist) * force;
          n.y -= (mdy / mdist) * force;
        }
      }

      const currR = n.baseRadius + Math.sin(n.pulse) * 0.75;
      const c = n.color;
      const alphaMult = isLight ? 0.7 : 0.85;

      // Soft Outer Glow
      ctx.beginPath();
      ctx.arc(n.x, n.y, currR * 2.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${0.12 * alphaMult})`;
      ctx.fill();

      // Core Node
      ctx.beginPath();
      ctx.arc(n.x, n.y, Math.max(0.5, currR), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${0.85 * alphaMult})`;
      ctx.fill();

      // Mouse Beam Connection
      if (mouse.x && mouse.y) {
        let mdx = mouse.x - n.x;
        let mdy = mouse.y - n.y;
        let mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius) {
          let alpha = (1 - mdist / mouse.radius) * (isLight ? 0.4 : 0.55);
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // Inter-node Connection Mesh
      for (let j = i + 1; j < nodes.length; j++) {
        let n2 = nodes[j];
        let dx = n.x - n2.x;
        let dy = n.y - n2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        let maxDist = 145;

        if (dist < maxDist) {
          let alpha = (1 - dist / maxDist) * (isLight ? 0.18 : 0.28);
          let grad = ctx.createLinearGradient(n.x, n.y, n2.x, n2.y);
          grad.addColorStop(0, `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${alpha})`);
          grad.addColorStop(1, `rgba(${n2.color.r}, ${n2.color.g}, ${n2.color.b}, ${alpha})`);
          
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }

    // 3. Render Traveling Data Pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      let p = pulses[i];
      p.progress += p.speed;
      if (p.progress >= 1) {
        pulses.splice(i, 1);
        continue;
      }

      let px = p.start.x + (p.end.x - p.start.x) * p.progress;
      let py = p.start.y + (p.end.y - p.start.y) * p.progress;
      let c = p.color;

      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? `rgba(${c.r}, ${c.g}, ${c.b}, 0.95)` : '#ffffff';
      ctx.shadowColor = `rgba(${c.r}, ${c.g}, ${c.b}, 1)`;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(draw);
  }

  draw();
}

let globalScrollObserver = null;
let currentScrollDirection = 'down';

function initScrollAnimations() {
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY + 3) {
      currentScrollDirection = 'down';
    } else if (currentScrollY < lastScrollY - 3) {
      currentScrollDirection = 'up';
    }
    lastScrollY = currentScrollY;
  }, { passive: true });

  globalScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        if (currentScrollDirection === 'down') {
          el.classList.remove('scroll-from-top');
          el.classList.add('scroll-from-bottom');
        } else {
          el.classList.remove('scroll-from-bottom');
          el.classList.add('scroll-from-top');
        }
        requestAnimationFrame(() => {
          el.classList.add('revealed');
        });
      } else {
        el.classList.remove('revealed', 'scroll-from-bottom', 'scroll-from-top');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  const selectors = [
    '.section-header',
    '.hero-content',
    '.hero-avatar-wrapper',
    '.about-card',
    '.quick-facts-card',
    '.fact-item',
    '.timeline-item',
    '.experience-card',
    '.project-card',
    '.pub-card',
    '.skill-card',
    '.cert-card',
    '.contact-card'
  ];

  document.querySelectorAll(selectors.join(', ')).forEach((el, idx) => {
    el.classList.add('scroll-reveal');
    if (!el.style.transitionDelay) {
      el.style.transitionDelay = `${(idx % 4) * 0.08}s`;
    }
    globalScrollObserver.observe(el);
  });
}

// Projects Rendering & Filters (Streamlined per user directive)
function renderProjects(activeCategory) {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  const filtered = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  filtered.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card scroll-reveal revealed';
    card.style.transitionDelay = `${idx * 0.05}s`;
    card.setAttribute('data-id', p.id);
    card.onclick = () => openProjectModal(p.id);

    // Primary skills list
    const skillsList = p.techStack && p.techStack.length > 0 ? p.techStack : p.tags;
    const skillsHTML = skillsList.map(s => `<span class="project-skill-tag">${s}</span>`).join('');

    const codeHTML = p.github ? `
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-github-btn" onclick="event.stopPropagation()" title="View Code on GitHub">
        <i class="fa-brands fa-github"></i> Code
      </a>
    ` : '<span class="code-unavailable">Private</span>';

    card.innerHTML = `
      <div class="project-card-top">
        <span class="project-category-badge">${p.category}</span>
        <span class="project-card-year">${p.year}</span>
      </div>

      <h3 class="project-card-title">${p.title}</h3>

      <p class="project-card-desc">${p.description}</p>

      <div class="project-skills-tags">${skillsHTML}</div>

      <div class="project-card-footer">
        <button class="project-details-btn" onclick="event.stopPropagation(); openProjectModal('${p.id}')">
          <span>Show Details</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
        ${codeHTML}
      </div>
    `;

    grid.appendChild(card);
    if (globalScrollObserver) {
      globalScrollObserver.observe(card);
    }
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

// Modal & Gallery System State
let currentActiveProject = null;
let currentGalleryImages = [];
let currentGalleryIndex = 0;

function openProjectModal(id) {
  const p = PROJECTS.find(item => item.id === id);
  if (!p) return;

  currentActiveProject = p;
  const modal = document.getElementById('project-modal');
  const headerBadges = document.getElementById('modal-header-badges');
  const titleElem = document.getElementById('modal-title');
  const galleryWrapper = document.getElementById('modal-gallery-wrapper');
  
  const metricsGrid = document.getElementById('modal-metrics');
  const desc = document.getElementById('modal-description');
  const highlightsList = document.getElementById('modal-highlights');
  const techStack = document.getElementById('modal-techstack');
  const tags = document.getElementById('modal-tags');
  const footerLinks = document.getElementById('modal-footer-links');

  // Set Header Info
  const statusClass = p.status.toLowerCase() === 'research' ? 'status-research' 
    : p.status.toLowerCase() === 'published' ? 'status-published' : 'status-completed';

  headerBadges.innerHTML = `
    <span class="tag">${p.category}</span>
    <span class="tag">${p.year}</span>
    <span class="project-badge-status ${statusClass}" style="position: static; vertical-align: middle;">${p.status}</span>
  `;
  titleElem.textContent = p.title;

  // Set Gallery
  const hasImages = p.images && p.images.length > 0;
  if (hasImages) {
    galleryWrapper.style.display = 'block';
    currentGalleryImages = p.images;
    currentGalleryIndex = 0;
    renderGalleryStage();
  } else {
    galleryWrapper.style.display = 'none';
    currentGalleryImages = [];
    currentGalleryIndex = 0;
  }

  // Set Modal Content
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

function renderGalleryStage() {
  if (currentGalleryImages.length === 0) return;

  const mainImg = document.getElementById('gallery-main-img');
  const prevBtn = document.getElementById('gallery-prev-btn');
  const nextBtn = document.getElementById('gallery-next-btn');
  const currNum = document.getElementById('gallery-curr-num');
  const totalNum = document.getElementById('gallery-total-num');
  const thumbsContainer = document.getElementById('gallery-thumbs');

  mainImg.src = currentGalleryImages[currentGalleryIndex];
  mainImg.alt = `${currentActiveProject ? currentActiveProject.title : 'Project'} Photo ${currentGalleryIndex + 1}`;

  currNum.textContent = currentGalleryIndex + 1;
  totalNum.textContent = currentGalleryImages.length;

  if (currentGalleryImages.length > 1) {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
    thumbsContainer.style.display = 'flex';

    thumbsContainer.innerHTML = currentGalleryImages.map((img, idx) => `
      <div class="gallery-thumb ${idx === currentGalleryIndex ? 'active' : ''}" onclick="selectGalleryImage(${idx})">
        <img src="${img}" alt="Thumbnail ${idx + 1}" />
      </div>
    `).join('');
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    thumbsContainer.style.display = 'none';
  }
}

function selectGalleryImage(idx) {
  if (idx < 0 || idx >= currentGalleryImages.length) return;
  currentGalleryIndex = idx;
  renderGalleryStage();
}

function navigateGallery(direction) {
  if (currentGalleryImages.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex + direction + currentGalleryImages.length) % currentGalleryImages.length;
  renderGalleryStage();
}

// Lightbox Viewer Logic
function openLightbox(index = currentGalleryIndex) {
  if (!currentGalleryImages || currentGalleryImages.length === 0) return;
  
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  currentGalleryIndex = index;
  lightboxImg.src = currentGalleryImages[currentGalleryIndex];
  
  const title = currentActiveProject ? currentActiveProject.title : 'Project Image';
  caption.textContent = `${title} — Photo ${currentGalleryIndex + 1} of ${currentGalleryImages.length}`;

  if (currentGalleryImages.length > 1) {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  }

  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  lightbox.classList.remove('active');
}

function navigateLightbox(direction) {
  if (currentGalleryImages.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex + direction + currentGalleryImages.length) % currentGalleryImages.length;
  
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  
  lightboxImg.src = currentGalleryImages[currentGalleryIndex];
  const title = currentActiveProject ? currentActiveProject.title : 'Project Image';
  caption.textContent = `${title} — Photo ${currentGalleryIndex + 1} of ${currentGalleryImages.length}`;
  
  // Also keep background gallery stage in sync
  renderGalleryStage();
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

  // Gallery buttons
  document.getElementById('gallery-prev-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateGallery(-1);
  });

  document.getElementById('gallery-next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateGallery(1);
  });

  document.getElementById('gallery-expand-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openLightbox();
  });

  document.getElementById('gallery-main-img').addEventListener('click', () => {
    openLightbox();
  });

  // Lightbox buttons
  const lightbox = document.getElementById('lightbox-modal');
  document.getElementById('lightbox-close-btn').addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.getElementById('lightbox-prev-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });

  document.getElementById('lightbox-next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const isLightboxActive = lightbox.classList.contains('active');
    const isModalActive = modal.classList.contains('active');

    if (e.key === 'Escape') {
      if (isLightboxActive) {
        closeLightbox();
      } else if (isModalActive) {
        closeModal();
      }
    } else if (e.key === 'ArrowLeft') {
      if (isLightboxActive) {
        navigateLightbox(-1);
      } else if (isModalActive) {
        navigateGallery(-1);
      }
    } else if (e.key === 'ArrowRight') {
      if (isLightboxActive) {
        navigateLightbox(1);
      } else if (isModalActive) {
        navigateGallery(1);
      }
    }
  });
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  closeLightbox();
  document.body.style.overflow = '';
}
