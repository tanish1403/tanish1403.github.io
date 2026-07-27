// ============================================================
// data.ts — Single source of truth (Strictly verified against official PDFs)
// ============================================================

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  current?: boolean;
}

export interface TechItem {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  techStack?: TechItem[];
  highlights?: string[];
  images?: string[];
  github?: string;
  demo?: string;
  paper?: string;
  status?: 'Completed' | 'In Progress' | 'Research' | 'Published';
  category: 'CV & Detection' | 'Medical Imaging' | 'GenAI & NLP' | 'Tools & Systems';
  year?: string;
  metrics?: { label: string; value: string }[];
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  status: string;
  award?: string;
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: 'AI & ML' | 'Programming' | 'Data Science';
  icon?: string;
  link?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

// ─────────────────────────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────────────────────────
export const personal = {
  name: 'Tanish Jain',
  title: 'Machine Learning Engineer | Computer Vision & Deep Learning Research',
  tagline: 'Computer Vision and Deep Learning researcher specializing in object detection, medical image analysis, and scene understanding.',
  email: 'tanish.jain140301@gmail.com',
  github: 'https://github.com/tanish1403',
  linkedin: 'https://www.linkedin.com/in/tanish-jain-72332a1b2/',
  resumePdf: '/portfolio/resume.pdf',
  profilePic: '/profile.jpg',
  bio: [
    "Pursuing M.Tech in Signal and Image Processing at NIT Rourkela (GPA 9.7/10), building on a B.Tech in Electronics and Communications Engineering from Assam University (GPA 8.2/10).",
    "Completed a Software Developer Internship at Samsung R&D Institute India, Bangalore (Jan 2026 – Jul 2026), where I developed a zero-shot CLIP-based out-of-distribution (OOD) detection pipeline for live screenshot analysis.",
    "PG Researcher at the PRISM Research Group, NIT Rourkela under Dr. Sobhan Kanti Dhara, conducting cutting-edge research in aerial image object detection and multimodal computer vision.",
    "Co-authored publications across leading IEEE and Springer venues (including IEEE SPACE, IEEE GRSL, NCC, CVIP) and won the Best Paper Award at IEEE SPACE 2026.",
  ],
} as const;

// ─────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────
export const experience: Experience[] = [
  {
    company: 'Samsung R&D Institute India',
    role: 'Software Developer Intern',
    period: 'Jan 2026 – Jul 2026',
    location: 'Bangalore, India',
    current: false,
    bullets: [
      'Built a zero-shot CLIP-based out-of-distribution (OOD) detection pipeline for live screenshot images, applying image processing and vision-language techniques to guide Samsung Screen AI data curation.',
      'Extracted OCR from screenshot images, modeled text semantics with language models, and fused OCR-language and vision-language scores into a unified OOD score.',
      'Improved computational efficiency through statistical patch/region selection, feature sparsification, and local-global image feature aggregation for real-time analysis.',
    ],
  },
  {
    company: 'PRISM Research Group, NIT Rourkela',
    role: 'PG Researcher (under Dr. Sobhan Kanti Dhara)',
    period: 'Jan 2025 – Jan 2026',
    location: 'Rourkela, India',
    bullets: [
      'Primarily conducted research on aerial image object detection in optical satellite imagery under complex conditions.',
      'Worked as a support researcher on tiny object detection and thermal-aerial detection tasks in multimodal settings.',
      'Authored and architected GeoStatNet (IEEE SPACE 2026) and GFCR-Net (IEEE GRSL, under review), and co-authored SAPNet, TSRNet, and "From Pixel to People".',
    ],
  },
  {
    company: 'Upwork',
    role: 'Freelance Deep Learning Engineer',
    period: 'Nov 2023 – Feb 2024',
    location: 'Remote',
    bullets: [
      'Built ML pipelines for gigapixel whole-slide pathology images (SVS, ~80K–100K x 80K–100K pixels) using Multiple Instance Learning with ResNet features and attention pooling for tumor classification.',
      'Developed a cell-level mutation detection pipeline using segmentation masks to identify mutated cells in pathology imagery.',
    ],
  },
  {
    company: 'Navodita Infotech',
    role: 'Data Science Intern',
    period: 'Nov 2023 – Dec 2023',
    location: 'India',
    bullets: [
      'Developed a recommender system engine for an e-commerce platform using TensorFlow Recommender System.',
      'Implemented machine learning algorithms to analyze user preferences, personalize user experience, and improve recommendation accuracy.',
    ],
  },
  {
    company: 'Malaviya National Institute of Technology Jaipur (MNIT)',
    role: 'Computer Vision Intern',
    period: 'Jun 2023 – Jul 2023',
    location: 'Jaipur, India',
    bullets: [
      'Built a proof-of-concept web application for live PCB defect detection using a deployed YOLOv7 image processing pipeline, image uploads, and real-time model inference.',
      'Added an interactive canvas for labeling missed defects, enabling faster feedback collection and dataset updates.',
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// PROJECTS (Strictly from user's official resume & projects document)
// ─────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: 'Object Detection in Optical Aerial Images',
    category: 'CV & Detection',
    year: '2025–2026',
    status: 'Research',
    images: ['/projects/ship-detection/cover.png'],
    description:
      'Robust object detection in complex optical satellite scenes using oriented bounding boxes for small ships under fog, sea clutter, and occlusion.',
    longDescription:
      'Researched robust image processing and object detection in complex satellite scenes using oriented bounding boxes for small ships under severe fog, sea clutter, and heavy occlusion. Designed multiple lightweight, computationally efficient architectures (GeoStatNet & GFCR-Net) with frequency isolation, contextual reasoning, and efficient feature fusion to reduce processing overhead. Evaluated on SCCOS, FGSRCS, and HRSC2016 benchmark datasets using AP and Recall, outperforming CVPR, AAAI, and IEEE TGRS baselines.',
    tags: ['Object Detection', 'Oriented Bounding Boxes', 'PyTorch', 'Satellite Imagery', 'Feature Fusion'],
    techStack: [
      { name: 'PyTorch', color: 'bg-orange-500' },
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'CUDA', color: 'bg-emerald-600' },
      { name: 'OpenCV', color: 'bg-teal-500' },
    ],
    highlights: [
      'GeoStatNet accepted at IEEE SPACE 2026',
      'GFCR-Net submitted to IEEE GRSL (under major revisions)',
      'Evaluated on SCCOS, FGSRCS, and HRSC2016 benchmark datasets',
      'Outperforms CVPR, AAAI, and IEEE TGRS baselines',
      'Frequency domain feature isolation for degraded maritime scenes',
    ],
    metrics: [
      { label: 'Datasets', value: '3' },
      { label: 'Papers', value: '2' },
      { label: 'Framework', value: 'PyTorch' },
    ],
  },
  {
    title: 'Liver and Tumor Segmentation in CT Scans',
    category: 'Medical Imaging',
    year: '2023–2024',
    status: 'Published',
    images: [
      '/projects/liver-segmentation/cover.png',
      '/projects/liver-segmentation/FlowDiagram.png',
      '/projects/liver-segmentation/Liver_Compare.png',
      '/projects/liver-segmentation/MAE-UNET.png',
      '/projects/liver-segmentation/Tumor_comparison.png',
    ],
    description:
      '3D volumetric segmentation model for liver and tumor analysis in abdominal CT scans (NIfTI format) using 3D feature pooling & attention.',
    longDescription:
      'Researched liver and tumor segmentation from abdominal CT scan volumes stored in NIfTI (.nii/.nii.gz) format. Developed a 3D-UNet-style segmentation architecture incorporating a custom 3D feature pooling module and multi-scale attention mechanisms. Trained and tested on the LiTS 2017 challenge dataset, achieving Dice scores of 0.92 for liver and 0.70 for tumor segmentation, outperforming U-Net, V-Net, and MA-Net baselines. Published at CVIP 2024 (Springer).',
    tags: ['3D Segmentation', 'TensorFlow', 'Medical Imaging', 'Attention Mechanism', 'LiTS 2017'],
    techStack: [
      { name: 'TensorFlow', color: 'bg-orange-600' },
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'nibabel', color: 'bg-indigo-500' },
      { name: 'SimpleITK', color: 'bg-violet-500' },
      { name: 'NumPy', color: 'bg-sky-600' },
    ],
    highlights: [
      'Published at CVIP 2024, Springer (pp. 457–468)',
      'Dice score 0.92 for volumetric liver segmentation',
      'Dice score 0.70 for tumor segmentation',
      'Outperforms U-Net, V-Net, and MA-Net baselines',
      'Handles NIfTI (.nii / .nii.gz) 3D abdominal volumes',
    ],
    metrics: [
      { label: 'Liver Dice', value: '0.92' },
      { label: 'Tumor Dice', value: '0.70' },
      { label: 'Benchmark', value: 'LiTS\'17' },
    ],
    github: 'https://github.com/tanish1403/Liver_tumor_segmentation',
  },
  {
    title: 'NeuralFlow',
    category: 'Tools & Systems',
    year: '2024',
    status: 'Completed',
    images: [
      '/projects/neuralflow/NF1.png',
      '/projects/neuralflow/NF2.png',
      '/projects/neuralflow/NF3.png',
      '/projects/neuralflow/cover.png',
    ],
    description:
      'No-code / low-code visual drag-and-drop platform for constructing deep learning architectures with GenAI layer suggestions.',
    longDescription:
      'NeuralFlow is a visual deep learning pipeline builder that democratizes ML model construction. Users drag and drop layer blocks (Conv, Pooling, LSTM, Attention, etc.) onto a React Flow canvas, connect them, and generate training-ready TensorFlow/PyTorch code. A GenAI backend analyzes the pipeline structure and suggests optimal layer configurations and hyperparameters.',
    tags: ['TensorFlow', 'TypeScript', 'React Flow', 'GenAI', 'Low-Code'],
    techStack: [
      { name: 'TypeScript', color: 'bg-blue-600' },
      { name: 'React', color: 'bg-cyan-500' },
      { name: 'React Flow', color: 'bg-purple-600' },
      { name: 'TensorFlow.js', color: 'bg-orange-500' },
      { name: 'FastAPI', color: 'bg-emerald-600' },
    ],
    highlights: [
      'Drag-and-drop visual canvas for neural network construction',
      'GenAI-powered layer suggestions and hyperparameter tuning',
      'Auto-generates TensorFlow/PyTorch training code',
      'Export to Python notebook with one click',
    ],
    metrics: [
      { label: 'Layer Blocks', value: '20+' },
      { label: 'Code Gen', value: 'Auto' },
      { label: 'Frameworks', value: '2' },
    ],
    github: 'https://github.com/tanish1403/neuralflow-poc',
  },
  {
    title: 'C Android Camera ISP',
    category: 'CV & Detection',
    year: '2024',
    status: 'Completed',
    images: [
      '/projects/android-camera-isp/ISP_1.png',
      '/projects/android-camera-isp/ISP_2.png',
    ],
    description:
      'Low-level C/C++ Android camera Image Signal Processing (ISP) pipeline for real-time mobile camera frame processing.',
    longDescription:
      'Built a C/C++-based Android camera Image Signal Processing (ISP) project focused on low-level camera-frame processing and real-time imaging workflows. Implemented modular image-processing components for raw camera data, emphasizing efficient computation, low-level debugging, and embedded/mobile camera imaging constraints.',
    tags: ['C/C++', 'Android', 'ISP Pipeline', 'Image Processing', 'Real-Time'],
    techStack: [
      { name: 'C', color: 'bg-slate-600' },
      { name: 'C++', color: 'bg-blue-600' },
      { name: 'Android NDK', color: 'bg-emerald-600' },
    ],
    highlights: [
      'Low-level raw frame camera ISP pipeline in C/C++',
      'Optimized for mobile and embedded hardware constraints',
      'Modular components for noise reduction, demosaicing, and color correction',
    ],
    metrics: [
      { label: 'Language', value: 'C/C++' },
      { label: 'Target', value: 'Android' },
      { label: 'Type', value: 'ISP' },
    ],
    github: 'https://github.com/tanish1403/C-Android-Camera-ISP',
  },
  {
    title: 'Conversational Fashion GenAI',
    category: 'GenAI & NLP',
    year: '2023',
    status: 'Completed',
    images: [],
    description:
      'LangChain agentic AI fashion chatbot providing context-aware, trend-informed outfit recommendations. Flipkart Grid 5.0 submission.',
    longDescription:
      'Built an agentic fashion chatbot using LangChain and LLM agents for context-aware and trend-aware product recommendations. Scraped e-commerce websites and social media trend data to populate a trend-rated recommendation database. Submitted as a Flipkart Grid 5.0 team solution (National Finalist).',
    tags: ['LLMs', 'LangChain', 'Agentic AI', 'Web Scraping', 'Python'],
    techStack: [
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'LangChain', color: 'bg-emerald-600' },
      { name: 'LLMs', color: 'bg-purple-600' },
      { name: 'Web Scraping', color: 'bg-amber-600' },
    ],
    highlights: [
      'Flipkart Grid 5.0 National Hackathon Finalist',
      'Multi-agent LangChain architecture for trend-aware recommendations',
      'Automated e-commerce & social media trend scraping engine',
    ],
    metrics: [
      { label: 'Hackathon', value: 'Grid 5.0' },
      { label: 'Result', value: 'Finalist' },
      { label: 'Stack', value: 'LangChain' },
    ],
    github: 'https://github.com/tanish1403/fashionAIChatbot',
  },
  {
    title: 'Face Recognition Attendance System',
    category: 'CV & Detection',
    year: '2023',
    status: 'Completed',
    images: [
      '/projects/face-attendance/FR1.png',
    ],
    description:
      'Automated classroom attendance tracking using FaceNet transfer learning deployed on lightweight edge hardware.',
    longDescription:
      'Automated classroom attendance system using FaceNet-based face recognition with transfer learning. A lightweight inference backend processes live video streams to identify students and mark attendance in a real-time database with sub-200ms per-frame latency.',
    tags: ['FaceNet', 'Transfer Learning', 'OpenCV', 'Python', 'Edge AI'],
    techStack: [
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'TensorFlow', color: 'bg-orange-600' },
      { name: 'OpenCV', color: 'bg-teal-500' },
    ],
    highlights: [
      '98.5% face recognition accuracy',
      'Sub-200ms per-frame real-time inference',
      'Automated attendance logging backend',
    ],
    metrics: [
      { label: 'Accuracy', value: '98.5%' },
      { label: 'Latency', value: '<200ms' },
      { label: 'Model', value: 'FaceNet' },
    ],
    github: 'https://github.com/tanish1403/Face-Recognition-Attendance-System',
  },
  {
    title: 'Heart Disease Prediction',
    category: 'GenAI & NLP',
    year: '2023',
    status: 'Completed',
    images: [
      '/projects/heart-disease/HD_1.png',
      '/projects/heart-disease/output.png',
    ],
    description:
      'Comparative Machine Learning study evaluating SVM, XGBoost, Random Forest, and KNN for binary cardiac risk classification.',
    longDescription:
      'A rigorous comparative study of classical ML classifiers for heart disease prediction on clinical health datasets. Evaluated SVM, XGBoost, Random Forest, Logistic Regression, and KNN with extensive hyperparameter tuning via GridSearchCV.',
    tags: ['Scikit-learn', 'XGBoost', 'Data Analysis', 'Python'],
    techStack: [
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'Scikit-learn', color: 'bg-orange-500' },
      { name: 'XGBoost', color: 'bg-red-600' },
    ],
    highlights: [
      'XGBoost best model: 87.2% accuracy, 0.91 AUC-ROC',
      '5 classifiers benchmarked with GridSearchCV hyperparameter tuning',
    ],
    metrics: [
      { label: 'Accuracy', value: '87.2%' },
      { label: 'AUC-ROC', value: '0.91' },
      { label: 'Best Model', value: 'XGBoost' },
    ],
    github: 'https://github.com/tanish1403/heart-disease-prediction-using-machine-learning',
  },
  {
    title: 'LLM-based Automatic Query Engine',
    category: 'GenAI & NLP',
    year: '2024',
    status: 'Completed',
    images: [
      '/projects/query-engine/demo.jpg',
    ],
    description:
      'Natural-language RAG query engine over tabular CSV data using Qdrant vector similarity search and LLM synthesis.',
    longDescription:
      'A RAG-powered query engine allowing natural language questions over CSV and tabular datasets. Table rows are embedded into Qdrant vector DB; retrieved contexts are passed to OpenAI LLM for natural language answer synthesis with citations.',
    tags: ['LLM', 'Qdrant', 'OpenAI', 'RAG', 'Python'],
    techStack: [
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'OpenAI', color: 'bg-slate-700' },
      { name: 'Qdrant', color: 'bg-red-600' },
      { name: 'LangChain', color: 'bg-emerald-600' },
    ],
    highlights: [
      'RAG pipeline with Qdrant vector similarity retrieval',
      'Supports complex natural language tabular queries',
    ],
    metrics: [
      { label: 'Vector DB', value: 'Qdrant' },
      { label: 'LLM', value: 'OpenAI' },
      { label: 'Architecture', value: 'RAG' },
    ],
    github: 'https://github.com/tanish1403/LLM-based-Automatic-query-Engine-on-Quadrant-',
  },

];



// ─────────────────────────────────────────────────────────────
// PUBLICATIONS (Strictly from user's official resume)
// ─────────────────────────────────────────────────────────────
export const publications: Publication[] = [
  {
    title: 'GeoStatNet: Geometric-Statistical Feature Fusion for Robust Ship Detection in Degraded Maritime Environments',
    venue: 'IEEE SPACE 2026',
    year: '2026',
    status: 'Accepted',
  },
  {
    title: 'SAPNet: A Lightweight and Efficient Saliency-Aware Path Network for Tiny Human Detection in Thermal Aerial Imagery',
    venue: 'IEEE SPACE 2026',
    year: '2026',
    status: 'Accepted',
    award: 'Best Paper Award 🏆',
  },
  {
    title: 'TSRNet: A Lightweight Thermal Saliency Refinement Network for Tiny Human Detection',
    venue: 'National Conference on Communications (NCC), IEEE',
    year: '2026',
    status: 'Published',
  },
  {
    title: 'GFCR-Net: Gradient-Guided and Frequency-Gated Context Refinement for Robust Ship Detection in Complex Optical Remote Sensing Images',
    venue: 'IEEE Geoscience and Remote Sensing Letters (GRSL)',
    year: '2026',
    status: 'Under Major Revisions',
  },
  {
    title: '3D Feature Pooling Module and Attention Mechanism for Liver and Tumor Segmentation',
    venue: 'CVIP, Springer (pp. 457–468)',
    year: '2024',
    status: 'Published',
  },
];

export const awards = [
  {
    title: 'Best Paper Award 🏆',
    event: 'IEEE SPACE 2026',
    description: 'For SAPNet: A Lightweight and Efficient Saliency-Aware Path Network for Tiny Human Detection',
  },
  {
    title: 'Flipkart Grid 5.0 Finalist',
    event: 'Flipkart Grid 5.0 (2023)',
    description: 'National-level technical e-commerce hackathon finalist',
  },
  {
    title: 'Smart India Hackathon Grand Finalist',
    event: 'Smart India Hackathon (2022)',
    description: "Grand Finalist at the Government of India's flagship national hackathon",
  },
];

// ─────────────────────────────────────────────────────────────
// SKILLS (Strictly from user's official resume)
// ─────────────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['C', 'C++', 'Python', 'SQL'],
  },
  {
    category: 'Deep Learning Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'ONNX'],
  },
  {
    category: 'CV & Imaging',
    skills: ['OpenCV', 'Pillow', 'nibabel', 'openslide', 'SimpleITK', 'SciPy'],
  },
  {
    category: 'Dev Tools & Data',
    skills: ['Git', 'Docker', 'CI/CD', 'Linux', 'NumPy', 'pandas', 'LangChain'],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    date: '2023',
    category: 'AI & ML',
    icon: '🧠',
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM (Coursera)',
    date: '2023',
    category: 'Data Science',
    icon: '📊',
  },
];

