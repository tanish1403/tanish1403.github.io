/* ============================================================
   Tanish Jain — portfolio
   Data + rendering + interaction. No dependencies.

   Content source of truth: resume.pdf (Nov 2026).
   ============================================================ */

/* ─────────────────────────────────────────────────────────────
   DATA
   Edit these arrays to update the site. Nothing else is content.
   ───────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "ship-detection",
    title: "Object Detection in Optical Aerial Images",
    category: "CV & Detection",
    year: "2025–2026",
    cover: "public/projects/covers/ship-detection.svg",
    status: "Published",
    fit: "contain",
    images: [
      "public/projects/ship-detection/af417654-c086-45c8-aa49-c8b1dd72aa96_page-0001.jpg",
      "public/projects/ship-detection/6a13d38d-be4a-44ed-9300-bbebaefc3a5d.png",
      "public/projects/ship-detection/SCCOS.png",
      "public/projects/ship-detection/cover.png",
    ],
    description:
      "Lightweight oriented-object detectors for small ships in degraded satellite imagery — fog, sea clutter and occlusion.",
    longDescription:
      "Designed GeoStatNet and GFCR-Net for small, oriented ship detection in degraded optical satellite imagery. On SCCOS, GeoStatNet reached AP@0.5 / recall of 0.782 / 0.871 and GFCR-Net 0.790 / 0.892, against 0.690 / 0.764 for R3Det. GFCR-Net generalised without fine-tuning to HRSC2016 (0.861 / 0.955) and FGRSCS (0.794 / 0.887).",
    tags: [
      "Oriented object detection",
      "Frequency-domain features",
      "Satellite imagery",
      "Small objects",
    ],
    techStack: ["PyTorch", "Python", "CUDA", "OpenCV"],
    highlights: [
      "GeoStatNet accepted at IEEE SPACE 2026",
      "GFCR-Net published in IEEE GRSL (early access, August 2026)",
      "SCCOS AP@0.5 / recall: 0.782 / 0.871 (GeoStatNet), 0.790 / 0.892 (GFCR-Net)",
      "Versus 0.690 / 0.764 for R3Det on the same benchmark",
      "Generalises to HRSC2016 and FGRSCS without fine-tuning",
    ],
    metrics: [
      { label: "AP@0.5", value: "0.790" },
      { label: "Recall", value: "0.892" },
      { label: "Datasets", value: "3" },
    ],
  },
  {
    id: "cad-inspection",
    title: "CAD Part Checker",
    category: "CV & Detection",
    year: "2026",
    cover: "public/projects/covers/cad-inspection.svg",
    status: "Completed",
    fit: "contain",
    images: [
      "public/projects/cad-inspection/main_TestImage_absent.jpg",
      "public/projects/cad-inspection/main_BG_00.jpg",
      "public/projects/cad-inspection/main_TestImage2_altered.jpg",
      "public/projects/cad-inspection/main_TestImage3_altered.jpg",
      "public/projects/cad-inspection/TestCase2_known_miss.jpg",
    ],
    description:
      "Checks a CAD model against a photo of the real assembly, part by part — DINOv2 presence scoring with optional SAM masks and VLM verifiers.",
    longDescription:
      "Compares a CAD model with a photo of the real assembly and reports, for every part, whether it is present, absent, altered or unverifiable. The photo is aligned to the CAD render, part regions come from the CAD part-id mask, and presence is scored with DINOv2 features against a complete “golden” photo. Optional SAM masks and VLM verifiers such as Qwen2-VL and InternVL3 arbitrate borderline parts. Modes cover a classical CPU baseline, zero-shot, few-shot bank or head, and a fine-tuned DINOv2. Ships as a Streamlit app with a self-contained HTML report and a benchmark script.",
    tags: [
      "Part presence",
      "DINOv2",
      "Zero-shot / few-shot",
      "VLM verification",
      "Inspection",
    ],
    techStack: ["PyTorch", "DINOv2", "SAM", "Qwen2-VL", "Streamlit"],
    highlights: [
      "62 / 64 verifiable parts correct on the sample, with zero false alarms",
      "Found the removed top-right bolt (washer and nut) in the altered photo",
      "Flags altered-but-present parts, not just missing ones",
      "Classical, zero-shot, few-shot bank/head and fine-tuned DINOv2 modes",
      "Parts hidden, hairline or too small in the CAD view are marked unverifiable, never guessed",
    ],
    metrics: [
      { label: "Parts correct", value: "62 / 64" },
      { label: "False alarms", value: "0" },
      { label: "Absent found", value: "2 / 4" },
    ],
    github: "https://github.com/tanish1403/CAD-Inspections",
  },
  {
    id: "liver-segmentation",
    title: "Liver and Tumor Segmentation in CT Scans",
    category: "Medical Imaging",
    year: "2023–2024",
    cover: "public/projects/covers/liver-segmentation.svg",
    status: "Published",
    images: [
      "public/projects/liver-segmentation/Liver_Compare.png",
      "public/projects/liver-segmentation/FlowDiagram.png",
      "public/projects/liver-segmentation/MAE-UNET.png",
      "public/projects/liver-segmentation/Tumor_comparison.png",
      "public/projects/liver-segmentation/cover.png",
    ],
    description:
      "3D volumetric segmentation of liver and tumour in abdominal CT volumes (NIfTI) using 3D feature pooling and attention.",
    longDescription:
      "Built a 3D-UNet-based segmentation model with an integrated 3D feature pooling module and attention for multi-scale volumetric features, evaluated on the LiTS 2017 dataset in NIfTI format. Reached Dice 0.92 for liver and 0.70 for tumour, outperforming U-Net, V-Net and MA-Net baselines. Published as “3D Feature Pooling Module and Attention Mechanism for Liver and Tumor Segmentation” at CVIP 2024 (Springer, pp. 457–468).",
    tags: [
      "3D segmentation",
      "Medical imaging",
      "Attention",
      "LiTS 2017",
      "NIfTI",
    ],
    techStack: ["TensorFlow", "Python", "nibabel", "SimpleITK", "NumPy"],
    highlights: [
      "Published at CVIP 2024, Springer (pp. 457–468)",
      "Dice 0.92 for volumetric liver segmentation",
      "Dice 0.70 for tumour segmentation",
      "Outperforms U-Net, V-Net and MA-Net baselines",
      "Handles NIfTI (.nii / .nii.gz) 3D abdominal volumes",
    ],
    metrics: [
      { label: "Liver Dice", value: "0.92" },
      { label: "Tumor Dice", value: "0.70" },
      { label: "Benchmark", value: "LiTS'17" },
    ],
    github: "https://github.com/tanish1403/Liver_tumor_segmentation",
  },
  {
    id: "edgepilot",
    title: "EdgePilot AI Studio",
    category: "Tools & Systems",
    year: "2026",
    cover: "public/projects/covers/edgepilot.svg",
    status: "Completed",
    images: [],
    description:
      "Local-first Streamlit workbench and edge-inference lab: model hub, chat, vision, retrieval, tabular analysis and OpenVINO benchmarking in one dashboard.",
    longDescription:
      "A modular, local-first AI workbench built with Streamlit and OpenVINO. Modules cover live system health, a curated Hugging Face model hub with token-based authentication and deterministic local caching, instruction chat with SmolLM2, vision Q&A with SmolVLM, PDF/TXT retrieval with source context, and CSV profiling with Plotly charts and IQR-based outlier inspection. The inference lab discovers OpenVINO devices, generates a valid IR model in one click, and benchmarks it with warm-up runs, p50/p95 latency, RSS sampling and CSV export.",
    tags: ["OpenVINO", "Local inference", "Hugging Face", "RAG", "Streamlit"],
    techStack: ["Streamlit", "OpenVINO", "Hugging Face", "Plotly", "Python"],
    highlights: [
      "One-click OpenVINO IR generation, then p50/p95 latency, RSS sampling and CSV export",
      "Hugging Face model hub: token auth, automated downloads, deterministic local caching",
      "Local SmolLM2 chat and SmolVLM vision Q&A running on CPU",
      "PDF/TXT retrieval with source context and Plotly tabular analysis",
      "Tested on an Intel i5 / 16 GB machine with CPU and integrated graphics",
    ],
    metrics: [
      { label: "Runtime", value: "Local" },
      { label: "Acceleration", value: "OpenVINO" },
      { label: "Models", value: "HF Hub" },
    ],
    github: "https://github.com/tanish1403/Edge-Pilot",
  },
  {
    id: "priorscope",
    title: "Priorscope",
    category: "GenAI & NLP",
    year: "2026",
    cover: "public/projects/covers/priorscope.svg",
    status: "Completed",
    images: [],
    description:
      "Local-first research-idea novelty checker: searches paper sources, judges overlap with an LLM, and shows only quotes verified against the paper text.",
    longDescription:
      "Priorscope turns an idea or draft PDF into editable claims, searches arXiv, Crossref and Semantic Scholar (plus OpenAlex when configured), deduplicates and ranks the results, then asks a configured language model which papers overlap the claims. Model-generated quotes are checked against the stored paper text before they are shown, and report numbers and scores are computed by application code rather than the model. Each run records its model, prompt hash, sources, settings and date, and reports export to Markdown, PDF, offline HTML and BibTeX/RIS/CSL-JSON. Local-first on a single SQLite database, with Ollama, OpenAI-compatible and Anthropic providers.",
    tags: [
      "LLM judging",
      "Evidence verification",
      "RAG",
      "Local-first",
      "Research tools",
    ],
    techStack: [
      "FastAPI",
      "React",
      "TypeScript",
      "SQLite",
      "Ollama",
      "arXiv · Crossref · S2",
    ],
    highlights: [
      "Quotes are verified against the paper text before they are displayed",
      "Scores and report numbers computed in code, never supplied by the model",
      "Per-run reproducibility record: model, prompt hash, sources, settings, date",
      "Exports Markdown, PDF, offline HTML, BibTeX, RIS and CSL-JSON",
      "Binds to 127.0.0.1, one SQLite database, no Docker or hosted service",
    ],
    metrics: [
      { label: "Sources", value: "4" },
      { label: "Storage", value: "SQLite" },
      { label: "Runtime", value: "Local" },
    ],
    github: "https://github.com/tanish1403/priorscope",
  },
  {
    id: "hearthforge",
    title: "Hearthforge",
    category: "Tools & Systems",
    year: "2026",
    cover: "public/projects/covers/hearthforge.svg",
    status: "Alpha",
    images: [],
    description:
      "Local-first AI workstation for software development: a coding agent with review gates, per-workspace permissions and any OpenAI-compatible model.",
    longDescription:
      "A modular, local-first workstation for coding with an agent. The agent loop inspects, searches, plans, edits, runs checks, reads failures and reports — and success is computed from recorded evidence, meaning the applied diffs and the exit codes of checks run after the last edit, never from the model claiming it is done. Every change appears as an approve-or-reject diff and is snapshotted for undo. Read, write, exec, network, install and destructive permissions are enforced per workspace in the backend, and privacy modes keep egress at a single point.",
    tags: [
      "Coding agent",
      "Local-first",
      "Human-in-the-loop",
      "Permissions",
      "BM25 retrieval",
    ],
    techStack: [
      "Python",
      "Ollama",
      "OpenAI-compatible APIs",
      "BM25",
      "DuckDuckGo",
    ],
    highlights: [
      "Agent success is verified from diffs and exit codes, not the model’s word",
      "Every edit is a reviewable diff, snapshotted and undoable",
      "Layered permissions per workspace, enforced in the backend",
      "One-step connection to Ollama, llama.cpp, LM Studio, OpenRouter or any OpenAI-compatible API",
      "Early alpha v0.1.0 — unimplemented capabilities are labelled as planned",
    ],
    metrics: [
      { label: "Version", value: "v0.1.0" },
      { label: "Modes", value: "Plan / Build" },
      { label: "License", value: "Apache-2.0" },
    ],
    github: "https://github.com/tanish1403/HearthForge",
  },
  {
    id: "neuralflow",
    title: "NeuralFlow",
    category: "Tools & Systems",
    year: "2024",
    cover: "public/projects/covers/neuralflow.svg",
    status: "Completed",
    images: [
      "public/projects/neuralflow/NF1.png",
      "public/projects/neuralflow/NF2.png",
      "public/projects/neuralflow/NF3.png",
      "public/projects/neuralflow/cover.png",
    ],
    description:
      "No-code / low-code visual drag-and-drop platform for constructing deep learning architectures with GenAI layer suggestions.",
    longDescription:
      "NeuralFlow is a visual deep learning pipeline builder that democratizes ML model construction. Users drag and drop layer blocks (Conv, Pooling, LSTM, Attention, etc.) onto a React Flow canvas, connect them, and generate training-ready TensorFlow/PyTorch code. A GenAI backend analyzes the pipeline structure and suggests optimal layer configurations and hyperparameters.",
    tags: ["TensorFlow", "TypeScript", "React Flow", "GenAI", "Low-code"],
    techStack: [
      "TypeScript",
      "React",
      "React Flow",
      "TensorFlow.js",
      "FastAPI",
    ],
    highlights: [
      "Drag-and-drop visual canvas for neural network construction",
      "GenAI-powered layer suggestions and hyperparameter tuning",
      "Auto-generates TensorFlow/PyTorch training code",
      "Export to Python notebook with one click",
    ],
    metrics: [
      { label: "Layer Blocks", value: "20+" },
      { label: "Code Gen", value: "Auto" },
      { label: "Frameworks", value: "2" },
    ],
    github: "https://github.com/tanish1403/neuralflow-poc",
  },
  {
    id: "android-camera-isp",
    title: "C Android Camera ISP",
    category: "CV & Detection",
    year: "2024",
    cover: "public/projects/covers/android-camera-isp.svg",
    status: "Completed",
    images: [
      "public/projects/android-camera-isp/ISP_1.png",
      "public/projects/android-camera-isp/ISP_2.png",
    ],
    description:
      "Low-level C/C++ Android camera Image Signal Processing (ISP) pipeline for real-time mobile camera frame processing.",
    longDescription:
      "Built a C/C++-based Android camera Image Signal Processing (ISP) project focused on low-level camera-frame processing and real-time imaging workflows. Implemented modular image-processing components for raw camera data, emphasizing efficient computation, low-level debugging, and embedded/mobile camera imaging constraints.",
    tags: ["C/C++", "Android", "ISP pipeline", "Image processing", "Real-time"],
    techStack: ["C", "C++", "Android NDK"],
    highlights: [
      "Low-level raw frame camera ISP pipeline in C/C++",
      "Optimized for mobile and embedded hardware constraints",
      "Modular components for noise reduction, demosaicing, and color correction",
    ],
    metrics: [
      { label: "Language", value: "C/C++" },
      { label: "Target", value: "Android" },
      { label: "Type", value: "ISP" },
    ],
    github: "https://github.com/tanish1403/C-Android-Camera-ISP",
  },
  {
    id: "fashion-genai",
    title: "Conversational Fashion GenAI",
    category: "GenAI & NLP",
    year: "2023",
    cover: "public/projects/covers/fashion-genai.svg",
    status: "Completed",
    images: [],
    description:
      "LangChain agentic fashion chatbot providing context-aware, trend-informed outfit recommendations. Flipkart Grid 5.0 finalist.",
    longDescription:
      "Built an agentic chatbot using LangChain and LLM agents for context-aware, trend-aware product recommendations. Scraped e-commerce and social-media data to populate a trend-rated recommendation database. Submitted as a Flipkart Grid 5.0 finalist team solution.",
    tags: ["LLMs", "LangChain", "Agentic AI", "Web scraping", "Python"],
    techStack: ["Python", "LangChain", "LLMs", "Web scraping"],
    highlights: [
      "Flipkart Grid 5.0 finalist team solution",
      "Multi-agent LangChain architecture for trend-aware recommendations",
      "Automated e-commerce and social-media trend scraping",
    ],
    metrics: [
      { label: "Hackathon", value: "Grid 5.0" },
      { label: "Result", value: "Finalist" },
      { label: "Stack", value: "LangChain" },
    ],
    github: "https://github.com/tanish1403/fashionAIChatbot",
  },
  {
    id: "face-attendance",
    title: "Face Recognition Attendance System",
    category: "CV & Detection",
    year: "2023",
    cover: "public/projects/covers/face-attendance.svg",
    status: "Completed",
    images: [
      "public/projects/face-attendance/FR1.png",
      "public/projects/face-attendance/FR2.png",
      "public/projects/face-attendance/FR3.png",
    ],
    description:
      "Automated classroom attendance tracking using FaceNet transfer learning deployed on lightweight edge hardware.",
    longDescription:
      "Automated classroom attendance system using FaceNet-based face recognition with transfer learning. A lightweight inference backend processes live video streams to identify students and mark attendance in a real-time database with sub-200ms per-frame latency.",
    tags: ["FaceNet", "Transfer learning", "OpenCV", "Python", "Edge AI"],
    techStack: ["Python", "TensorFlow", "OpenCV"],
    highlights: [
      "98.5% face recognition accuracy",
      "Sub-200ms per-frame real-time inference",
      "Automated attendance logging backend",
    ],
    metrics: [
      { label: "Accuracy", value: "98.5%" },
      { label: "Latency", value: "<200ms" },
      { label: "Model", value: "FaceNet" },
    ],
    github: "https://github.com/tanish1403/Face-Recognition-Attendance-System",
  },
  {
    id: "heart-disease",
    title: "Heart Disease Prediction",
    category: "Medical Imaging",
    year: "2023",
    cover: "public/projects/covers/heart-disease.svg",
    status: "Completed",
    images: [
      "public/projects/heart-disease/HD_1.png",
      "public/projects/heart-disease/output.png",
    ],
    description:
      "Comparative machine learning study evaluating SVM, XGBoost, Random Forest and KNN for binary cardiac risk classification.",
    longDescription:
      "A comparative study of classical ML classifiers for heart disease prediction on clinical health datasets. Evaluated SVM, XGBoost, Random Forest, Logistic Regression and KNN with extensive hyperparameter tuning via GridSearchCV.",
    tags: ["Scikit-learn", "XGBoost", "Data analysis", "Python"],
    techStack: ["Python", "Scikit-learn", "XGBoost"],
    highlights: [
      "XGBoost best model: 87.2% accuracy, 0.91 AUC-ROC",
      "5 classifiers benchmarked with GridSearchCV hyperparameter tuning",
    ],
    metrics: [
      { label: "Accuracy", value: "87.2%" },
      { label: "AUC-ROC", value: "0.91" },
      { label: "Best Model", value: "XGBoost" },
    ],
    github:
      "https://github.com/tanish1403/heart-disease-prediction-using-machine-learning",
  },
  {
    id: "query-engine",
    title: "RAG-Powered Query Engine for Tabular Data",
    category: "GenAI & NLP",
    year: "2023",
    cover: "public/projects/covers/query-engine.svg",
    status: "Completed",
    images: ["public/projects/query-engine/demo.jpg"],
    description:
      "Natural-language questions over CSV and tabular data by embedding table rows in Qdrant and synthesising cited answers with OpenAI.",
    longDescription:
      "Built a retrieval-augmented generation query engine for natural-language questions over CSV and tabular datasets: table rows are embedded in Qdrant, semantically relevant contexts are retrieved, and OpenAI models integrated through LangChain generate context-grounded answers with source citations.",
    tags: ["RAG", "Qdrant", "OpenAI", "LangChain", "Python"],
    techStack: ["Python", "OpenAI", "Qdrant", "LangChain"],
    highlights: [
      "RAG pipeline with Qdrant vector similarity retrieval",
      "Context-grounded answers with source citations",
      "Handles complex natural-language queries over structured data",
    ],
    metrics: [
      { label: "Vector DB", value: "Qdrant" },
      { label: "LLM", value: "OpenAI" },
      { label: "Architecture", value: "RAG" },
    ],
    github:
      "https://github.com/tanish1403/LLM-based-Automatic-query-Engine-on-Quadrant-",
  },
];

const PUBLICATIONS = [
  {
    title:
      "GeoStatNet: Geometric-Statistical Feature Fusion for Robust Ship Detection in Degraded Maritime Environments",
    authors: "Tanish Jain, V. Jain, S. K. Dhara",
    venue: "IEEE SPace, Aerospace and defenCE Conference (SPACE 2026)",
    status: "Accepted",
    year: "2026",
  },
  {
    title:
      "GFCR-Net: Gradient-Guided and Frequency-Gated Context Refinement for Robust Ship Detection in Complex Optical Remote Sensing Images",
    authors: "Tanish Jain, V. Jain, S. K. Dhara",
    venue: "IEEE Geoscience and Remote Sensing Letters",
    publisher: "Early access, 28 Aug 2026",
    status: "Published",
    year: "2026",
    url: "https://doi.org/10.1109/LGRS.2026.3728459",
    linkLabel: "doi.org/10.1109/LGRS.2026.3728459",
  },
  {
    title:
      "TSRNet: A Lightweight Thermal Saliency Refinement Network for Tiny Human Detection",
    authors: "V. Jain, Tanish Jain, S. K. Dhara",
    venue: "National Conference on Communications (NCC 2026)",
    publisher: "IEEE, pp. 472–477",
    status: "Published",
    year: "2026",
    url: "https://ieeexplore.ieee.org/document/11478916/",
    linkLabel: "ieeexplore.ieee.org/document/11478916",
  },
  {
    title:
      "SAPNet: A Lightweight and Efficient Saliency-Aware Path Network for Tiny Human Detection in Thermal Aerial Imagery",
    authors: "V. Jain, Tanish Jain, S. K. Dhara",
    venue: "IEEE SPace, Aerospace and defenCE Conference (SPACE 2026)",
    status: "Accepted",
    year: "2026",
  },
  {
    title:
      "3D Feature Pooling Module and Attention Mechanism for Liver and Tumor Segmentation",
    authors: "R. Rabidas, Tanish Jain, S. Kumar, S. Mandia, A. Roy",
    venue:
      "International Conference on Computer Vision and Image Processing (CVIP 2024)",
    publisher: "Springer, pp. 457–468",
    status: "Published",
    year: "2024",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-93688-3_33",
    linkLabel: "link.springer.com/chapter/10.1007/978-3-031-93688-3_33",
  },
];

const AWARDS = [
  {
    title: "M.Tech Initiative delegate",
    event: "IEEE SPACE",
    year: "2026",
    desc: "Selected as a delegate for the M.Tech Initiative at IEEE SPACE 2026.",
  },
  {
    title: "Finalist",
    event: "Flipkart Grid 5.0",
    year: "2023",
    desc: "Finalist team solution for a multi-agent conversational fashion recommender.",
  },
  {
    title: "Grand finalist",
    event: "Smart India Hackathon",
    year: "2022",
    desc: "Grand finalist in India’s national innovation hackathon.",
  },
];

const SKILLS = [
  { category: "Languages", skills: ["C/C++", "Python", "SQL", "MATLAB"] },
  {
    category: "ML frameworks",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "ONNX",
      "Hugging Face Transformers",
    ],
  },
  { category: "Vision & imaging", skills: ["OpenCV", "Pillow"] },
  {
    category: "Generative & multimodal",
    skills: [
      "LLMs",
      "VLMs",
      "RAG",
      "OpenAI",
      "Qdrant",
      "CLIP",
      "PaddleOCR",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    category: "Data & visualisation",
    skills: ["pandas", "NumPy", "SciPy", "Plotly"],
  },
  {
    category: "Edge & dev tools",
    skills: ["OpenVINO", "Streamlit", "Git", "Docker", "CI/CD", "Linux"],
  },
];

const CERTS = [
  {
    title: "Retrieval Augmented Generation (RAG)",
    issuer: "DeepLearning.AI",
    year: "Oct 2026",
  },
  {
    title: "Functions, Tools and Agents with LangChain",
    issuer: "DeepLearning.AI",
    year: "2026",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    year: "2023",
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM / Coursera",
    year: "2023",
  },
];

const EXPERIENCE = [
  {
    role: "Developer Intern",
    org: "Samsung R&D Institute India · Platform Intelligence",
    when: "Jan 2026 — Jul 2026",
    where: "Bangalore, India",
    bullets: [
      "Worked on an AI data-generation system, building an MLLM-powered quality-check pipeline that evaluated synthetic training samples across multiple tasks and filtered low-quality data automatically.",
      "Designed a per-sample scoring framework that fused OCR text, image features, vision-language embeddings and zero-shot CLIP embeddings into a custom out-of-distribution quality score, replacing manual review.",
      "Developed a statistical calibration method that sets OOD thresholds from clean in-distribution data alone, removing the need for manually labelled low-quality examples.",
    ],
  },
  {
    role: "PG Researcher",
    org: "PRISM Research Group — with Dr. Sobhan Kanti Dhara",
    when: "Jan 2025 — Jan 2026",
    where: "NIT Rourkela, India",
    bullets: [
      "Led research on lightweight detection of small and oriented objects in satellite imagery under fog, sea clutter and occlusion; designed GeoStatNet and GFCR-Net.",
      "Benchmarked both on SCCOS: GeoStatNet 0.782 AP@0.5 / 0.871 recall, GFCR-Net 0.790 / 0.892, versus 0.690 / 0.764 for R3Det. GFCR-Net generalised without fine-tuning to HRSC2016 (0.861 / 0.955) and FGRSCS (0.794 / 0.887).",
      "Contributed to thermal tiny-object detection research and co-authored SAPNet, TSRNet and CSPNet.",
    ],
  },
  {
    role: "Freelance Deep Learning Engineer",
    org: "Upwork",
    when: "Nov 2023 — Feb 2024",
    where: "Remote",
    bullets: [
      "Built TensorFlow pipelines for gigapixel whole-slide pathology images (up to ~100K × 100K px, SVS) using multiple instance learning, ResNet features and attention pooling for tumour classification.",
      "Developed a cell-level mutation-detection pipeline using Vision Transformers in GPU-enabled Docker containers to generate segmentation masks and flag mutated cells for downstream analysis.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Navodita Infotech",
    when: "Nov 2023 — Dec 2023",
    where: "India",
    bullets: [
      "Developed a recommender system for an e-commerce platform using TensorFlow Recommenders.",
      "Implemented ML algorithms to analyse user preferences and improve accuracy, working with the development team to integrate the system into the existing site.",
    ],
  },
  {
    role: "Computer Vision Intern",
    org: "Malaviya National Institute of Technology (MNIT)",
    when: "Jun 2023 — Jul 2023",
    where: "Jaipur, India",
    bullets: [
      "Built and deployed a real-time PCB defect-detection web application using a YOLOv7 inference pipeline and Streamlit for live image uploads and instant defect flagging.",
      "Added an interactive labelling canvas to correct missed defects, reducing manual inspection effort and accelerating dataset iteration and model feedback.",
    ],
  },
];

const FILTERS = [
  "All",
  "CV & Detection",
  "Medical Imaging",
  "GenAI & NLP",
  "Tools & Systems",
];

/* ─────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────── */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );

const pad = (n) => String(n).padStart(2, "0");
const tagsMarkup = (items, cls = "") =>
  `<ul class="tags ${cls}">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

const coverOf = (project) =>
  project.cover ||
  (project.images && project.images.length ? project.images[0] : null);
const statusClass = (status) => {
  const s = status.toLowerCase();
  if (s.includes("accepted") || s.includes("published")) return "is-live";
  if (s.includes("revision")) return "is-revise";
  return "is-submitted";
};

/* ─────────────────────────────────────────────────────────────
   BOOT
   ───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initHeader();
  initReveal();
  initHeroPlate();
  renderWork("All");
  initWorkFilters();
  renderPapers();
  renderAwards();
  renderRoles();
  renderSkills();
  renderCerts();
  initDialog();
  initCopy();
  $("#year").textContent = new Date().getFullYear();
});

/* ─────────────────────────────────────────────────────────────
   THEME
   ───────────────────────────────────────────────────────────── */
function initTheme() {
  const btn = $("#theme-toggle");
  const root = document.documentElement;

  const sync = () => {
    btn.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));
    btn.setAttribute(
      "aria-label",
      root.dataset.theme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme",
    );
  };
  sync();

  btn.addEventListener("click", () => {
    root.classList.add("theme-anim");
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch (e) {}
    sync();
    window.setTimeout(() => root.classList.remove("theme-anim"), 420);
  });
}

/* ─────────────────────────────────────────────────────────────
   HEADER: scroll state, scroll spy, mobile menu
   ───────────────────────────────────────────────────────────── */
function initHeader() {
  const head = $("#site-head");
  const nav = $("#nav");
  const menuBtn = $("#menu-btn");
  const links = $$(".nav-link");

  const onScroll = () =>
    head.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const closeMenu = () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  };

  menuBtn.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  links.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Scroll spy: the section covering the middle of the viewport wins.
  if (!("IntersectionObserver" in window)) return;
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => {
          const current = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("is-current", current);
          if (current) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
  );

  ["work", "research", "experience", "toolkit", "contact"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) spy.observe(section);
  });
}

/* ─────────────────────────────────────────────────────────────
   REVEAL ON SCROLL — one pass, never re-triggers
   ───────────────────────────────────────────────────────────── */
function initReveal() {
  const targets = $$(".rail, .section-body > *, .hero-stats, .contact-grid");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
  );

  targets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--rd", `${Math.min(i % 4, 3) * 0.06}s`);
    observer.observe(el);
  });
}

/* ─────────────────────────────────────────────────────────────
   HERO PLATE — crosshair + coordinate readout
   ───────────────────────────────────────────────────────────── */
function initHeroPlate() {
  const media = $("#hero-plate .plate-media");
  const cross = $("#plate-cross");
  const rx = $("#rd-x");
  const ry = $("#rd-y");
  if (!media || !cross || !rx || !ry) return;

  const move = (e) => {
    const rect = media.getBoundingClientRect();
    const px = Math.min(
      1024,
      Math.max(0, Math.round(((e.clientX - rect.left) / rect.width) * 1024)),
    );
    const py = Math.min(
      1023,
      Math.max(0, Math.round(((e.clientY - rect.top) / rect.height) * 1023)),
    );
    cross.style.setProperty("--mx", `${((px / 1024) * 100).toFixed(2)}%`);
    cross.style.setProperty("--my", `${((py / 1023) * 100).toFixed(2)}%`);
    rx.textContent = String(px).padStart(3, "0");
    ry.textContent = String(py).padStart(3, "0");
  };

  media.addEventListener("pointermove", move);
  media.addEventListener("pointerleave", () => {
    rx.textContent = "000";
    ry.textContent = "000";
    cross.style.setProperty("--mx", "50%");
    cross.style.setProperty("--my", "50%");
  });
}

/* ─────────────────────────────────────────────────────────────
   WORK
   ───────────────────────────────────────────────────────────── */
function renderWork(filter) {
  const grid = $("#work-grid");
  const items =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  if (!items.length) {
    grid.innerHTML =
      '<div class="work-empty">No projects in this area yet.</div>';
    return;
  }

  grid.innerHTML = items
    .map((p, i) => {
      const img = coverOf(p);
      const preview = img ? ` data-preview="${esc(img)}"` : "";
      const isFeatured = i === 0;

      return `
      <article class="work-card${isFeatured ? " is-featured" : ""}" data-anim style="--ad:${i * 0.04}s">
        <div class="work-card-media">
          ${img ? `<img src="${esc(img)}" alt="${esc(p.title)}" loading="lazy" />` : '<span class="no-cover"></span>'}
          <span class="work-card-status ${statusClass(p.status)}">${esc(p.status)}</span>
        </div>
        <div class="work-card-body">
          <p class="work-card-meta">${esc(p.category)} · ${esc(p.year)}</p>
          <h3 class="work-card-title">${esc(p.title)}</h3>
          <p class="work-card-desc">${esc(p.description)}</p>
          <dl class="work-card-metrics">
            ${p.metrics.map((m) => `<div><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join("")}
          </dl>
          ${tagsMarkup(p.techStack, "work-card-tags")}
          <button class="btn btn-line btn-sm work-card-btn" type="button" data-open="${esc(p.id)}"${preview}>
            <span>Open case study</span>
            <svg class="icon"><use href="#i-arrow" /></svg>
          </button>
        </div>
      </article>
    `;
    })
    .join("");
}

function initWorkFilters() {
  const bar = $("#work-filters");
  const counts = FILTERS.reduce((acc, f) => {
    acc[f] =
      f === "All"
        ? PROJECTS.length
        : PROJECTS.filter((p) => p.category === f).length;
    return acc;
  }, {});

  $$(".chip", bar).forEach((chip) => {
    const n = $(".chip-n", chip);
    if (n) n.textContent = pad(counts[chip.dataset.filter] || 0);
    chip.setAttribute(
      "aria-pressed",
      String(chip.classList.contains("is-active")),
    );
    chip.addEventListener("click", () => {
      if (chip.classList.contains("is-active")) return;
      $$(".chip", bar).forEach((c) => {
        c.classList.remove("is-active");
        c.setAttribute("aria-pressed", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-pressed", "true");
      renderWork(chip.dataset.filter);
    });
  });

  document.addEventListener("click", (e) => {
    const opener = e.target.closest("[data-open]");
    if (!opener) return;
    openProject(opener.dataset.open);
  });
}

/* ─────────────────────────────────────────────────────────────
   RESEARCH
   ───────────────────────────────────────────────────────────── */
function renderPapers() {
  const list = $("#papers");
  list.innerHTML = PUBLICATIONS.map((pub, i) => {
    const title = pub.url
      ? `<a href="${esc(pub.url)}" target="_blank" rel="noopener noreferrer">${esc(pub.title)}</a>`
      : esc(pub.title);

    return `
      <li class="paper">
        <span class="paper-num">${pad(i + 1)}</span>
        <div>
          <h3 class="paper-title">${title}</h3>
          <p class="paper-venue">${esc(pub.venue)}${pub.publisher ? ` · ${esc(pub.publisher)}` : ""}</p>
          <p class="paper-authors">${esc(pub.authors)}</p>
          ${pub.url ? `<a class="paper-link" href="${esc(pub.url)}" target="_blank" rel="noopener noreferrer">${esc(pub.linkLabel || pub.url)}<svg class="icon"><use href="#i-arrow-ne" /></svg></a>` : ""}
        </div>
        <div class="paper-side">
          <span class="paper-status ${statusClass(pub.status)}">${esc(pub.status.toLowerCase())}</span>
          <span class="paper-year">${esc(pub.year)}</span>
        </div>
      </li>
    `;
  }).join("");
}

function renderAwards() {
  $("#awards").innerHTML = AWARDS.map(
    (a) => `
    <article class="award">
      <span class="award-year">${esc(a.year)} · ${esc(a.event)}</span>
      <h4 class="award-title">${esc(a.title)}</h4>
      <p class="award-desc">${esc(a.desc)}</p>
    </article>
  `,
  ).join("");
}

/* ─────────────────────────────────────────────────────────────
   EXPERIENCE — accordion
   ───────────────────────────────────────────────────────────── */
function renderRoles() {
  const list = $("#roles");

  list.innerHTML = EXPERIENCE.map((job, i) => {
    const panelId = `role-panel-${i}`;
    const open = i === 0;
    return `
      <li class="role ${open ? "is-open" : ""}">
        <h3 class="role-h">
          <button class="role-head" type="button" aria-expanded="${open}" aria-controls="${panelId}">
            <span class="role-when">${esc(job.when)}</span>
            <span class="role-name">
              <span class="role-title">${esc(job.role)}</span>
              <span class="role-org">${esc(job.org)} · ${esc(job.where)}</span>
            </span>
            <span class="role-toggle" aria-hidden="true"></span>
          </button>
        </h3>
        <div class="role-panel" id="${panelId}" ${open ? "" : "inert"}>
          <div>
            <ul class="role-bullets">
              ${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}
            </ul>
          </div>
        </div>
      </li>
    `;
  }).join("");

  $$(".role-head", list).forEach((head) => {
    head.addEventListener("click", () => {
      const role = head.closest(".role");
      const willOpen = !role.classList.contains("is-open");

      $$(".role", list).forEach((other) => {
        other.classList.remove("is-open");
        $(".role-head", other).setAttribute("aria-expanded", "false");
        $(".role-panel", other).setAttribute("inert", "");
      });

      if (willOpen) {
        role.classList.add("is-open");
        head.setAttribute("aria-expanded", "true");
        $(".role-panel", role).removeAttribute("inert");
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   TOOLKIT
   ───────────────────────────────────────────────────────────── */
function renderSkills() {
  $("#skills").innerHTML = SKILLS.map(
    (group) => `
    <div class="skill-group">
      <div class="skill-cat">
        <h3>${esc(group.category)}</h3>
        <span class="skill-count">${group.skills.length} tools</span>
      </div>
      ${tagsMarkup(group.skills, "skill-tags")}
    </div>
  `,
  ).join("");
}

function renderCerts() {
  $("#certs-list").innerHTML = CERTS.map(
    (c) => `
    <li>
      <b>${esc(c.title)}</b>
      <span>${esc(c.issuer)} · ${esc(c.year)}</span>
    </li>
  `,
  ).join("");
}

/* ─────────────────────────────────────────────────────────────
   PROJECT DIALOG
   ───────────────────────────────────────────────────────────── */
const dialogState = {
  project: null,
  images: [],
  index: 0,
  lastFocus: null,
};

function initDialog() {
  const dialog = $("#project-dialog");
  const lightbox = $("#lightbox");

  $$("[data-close]", dialog).forEach((el) =>
    el.addEventListener("click", closeDialog),
  );

  $("#stage-prev").addEventListener("click", () => stepGallery(-1, false));
  $("#stage-next").addEventListener("click", () => stepGallery(1, false));
  $("#stage-expand").addEventListener("click", () => openLightbox());
  $("#stage-img").addEventListener("click", () => openLightbox());

  $("#lightbox-close").addEventListener("click", closeLightbox);
  $("#lightbox-prev").addEventListener("click", () => stepGallery(-1, true));
  $("#lightbox-next").addEventListener("click", () => stepGallery(1, true));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    const dialogOpen = dialog.classList.contains("is-open");
    const boxOpen = lightbox.classList.contains("is-open");
    if (!dialogOpen) return;

    if (e.key === "Escape") {
      e.preventDefault();
      if (boxOpen) closeLightbox();
      else closeDialog();
      return;
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      if (!dialogState.images.length) return;
      e.preventDefault();
      stepGallery(e.key === "ArrowLeft" ? -1 : 1, boxOpen);
      return;
    }
    if (e.key === "Tab") trapFocus(e, boxOpen ? lightbox : dialog);
  });
}

function openProject(id) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return;

  const dialog = $("#project-dialog");
  dialogState.project = project;
  dialogState.images = project.images || [];
  dialogState.index = 0;
  dialogState.lastFocus = document.activeElement;

  dialog.classList.toggle("no-media", dialogState.images.length === 0);
  $("#dialog-index").textContent =
    `${pad(PROJECTS.indexOf(project) + 1)} / ${pad(PROJECTS.length)}`;
  $("#dialog-meta").textContent =
    `${project.category} · ${project.year} · ${project.status}`;
  $("#dialog-title").textContent = project.title;
  $("#dialog-desc").textContent =
    project.longDescription || project.description;

  $("#dialog-metrics").innerHTML = project.metrics
    .map((m) => `<div><dt>${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`)
    .join("");
  $("#dialog-highlights").innerHTML = project.highlights
    .map((h) => `<li>${esc(h)}</li>`)
    .join("");
  $("#dialog-stack").innerHTML = project.techStack
    .map((t) => `<li>${esc(t)}</li>`)
    .join("");
  $("#dialog-tags").innerHTML = project.tags
    .map((t) => `<li>${esc(t)}</li>`)
    .join("");

  $("#dialog-foot").innerHTML = project.github
    ? `<a class="btn btn-line btn-sm" href="${esc(project.github)}" target="_blank" rel="noopener noreferrer">
         <svg class="icon"><use href="#i-github" /></svg><span>Source on GitHub</span>
       </a>`
    : "";

  renderGallery();

  dialog.classList.add("is-open");
  dialog.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  $("#dialog-body").scrollTop = 0;
  window.setTimeout(() => $(".dialog-close").focus(), 60);
}

function closeDialog() {
  const dialog = $("#project-dialog");
  if (!dialog.classList.contains("is-open")) return;
  closeLightbox();
  dialog.classList.remove("is-open");
  dialog.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  if (dialogState.lastFocus && dialogState.lastFocus.focus)
    dialogState.lastFocus.focus();
}

function renderGallery() {
  const { images, index, project } = dialogState;
  const hasImages = images.length > 0;
  const stageImg = $("#stage-img");
  const multi = images.length > 1;

  $("#stage-prev").classList.toggle("is-hidden", !multi);
  $("#stage-next").classList.toggle("is-hidden", !multi);
  $("#stage-thumbs").classList.toggle("is-hidden", !multi);

  if (!hasImages) return;

  const url = images[index];
  stageImg.classList.add("is-swapping");
  const done = () => stageImg.classList.remove("is-swapping");
  stageImg.onload = done;
  stageImg.src = url;
  stageImg.alt = `${project.title} — figure ${index + 1}`;
  if (stageImg.complete) done();

  $("#stage-now").textContent = index + 1;
  $("#stage-total").textContent = images.length;

  $("#stage-thumbs").innerHTML = images
    .map(
      (src, i) => `
    <button class="thumb ${i === index ? "is-active" : ""}" type="button" data-thumb="${i}" aria-label="Figure ${i + 1}">
      <img src="${esc(src)}" alt="" loading="lazy" />
    </button>
  `,
    )
    .join("");

  $$("#stage-thumbs [data-thumb]").forEach((btn) => {
    btn.addEventListener("click", () => {
      dialogState.index = Number(btn.dataset.thumb);
      renderGallery();
    });
  });
}

function stepGallery(step, fromLightbox) {
  const total = dialogState.images.length;
  if (total < 2) return;
  dialogState.index = (dialogState.index + step + total) % total;

  if (fromLightbox) {
    renderLightbox();
    renderGallery();
  } else {
    renderGallery();
  }
}

function openLightbox() {
  if (!dialogState.images.length) return;
  const lightbox = $("#lightbox");
  renderLightbox();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  $("#lightbox-close").focus();
}

function renderLightbox() {
  const { images, index, project } = dialogState;
  const img = $("#lightbox-img");
  img.src = images[index];
  img.alt = `${project.title} — figure ${index + 1}`;
  $("#lightbox-caption").textContent =
    `${project.title} — figure ${index + 1} of ${images.length}`;

  const multi = images.length > 1;
  $("#lightbox-prev").classList.toggle("is-hidden", !multi);
  $("#lightbox-next").classList.toggle("is-hidden", !multi);
}

function closeLightbox() {
  const lightbox = $("#lightbox");
  if (!lightbox.classList.contains("is-open")) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  $(".dialog-close").focus();
}

function trapFocus(e, container) {
  const focusable = $$(
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
    container,
  ).filter((el) => el.offsetParent !== null || el === document.activeElement);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

/* ─────────────────────────────────────────────────────────────
   COPY EMAIL + TOAST
   ───────────────────────────────────────────────────────────── */
function initCopy() {
  const btn = $("#copy-email");
  if (!btn) return;
  const label = $(".copy-label", btn);
  let timer;

  btn.addEventListener("click", async () => {
    const value = btn.dataset.copy;
    let ok = false;

    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch (e) {
      const temp = document.createElement("textarea");
      temp.value = value;
      temp.setAttribute("readonly", "");
      temp.style.position = "fixed";
      temp.style.opacity = "0";
      document.body.appendChild(temp);
      temp.select();
      try {
        ok = document.execCommand("copy");
      } catch (err) {
        ok = false;
      }
      document.body.removeChild(temp);
    }

    if (!ok) {
      toast("Copy failed — select the address from the mail link");
      return;
    }

    btn.classList.add("is-copied");
    label.textContent = "Copied";
    toast("Email copied to clipboard");
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      btn.classList.remove("is-copied");
      label.textContent = "Copy";
    }, 2200);
  });
}

let toastTimer;
function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("is-on");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove("is-on"), 2400);
}
