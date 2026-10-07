// All site content lives here. Text that changes with the language toggle is
// written as { en: "...", es: "..." }; plain strings are shown as-is in both.
// Texts are taken word for word from the original portfolio.

export const METADATA = {
  author: "Nicolás Villarroel Vocal",
  title: "Nicolás Villarroel · AI for Medical Imaging",
  description:
    "I build deep learning models and clinical software for mammography, from reading DICOM files and training detection models to the web tools that put the results in front of physicians.",
  siteUrl: "https://nicovocal-jpg.github.io/",
  keywords: [
    "Nicolás Villarroel",
    "Biomedical Engineer",
    "Ingeniero Biomédico",
    "AI for Medical Imaging",
    "Deep Learning",
    "Mammography",
    "DICOM",
  ].join(", "),
  themeColor: "#0c1116",
};

export const MENULINKS = [
  { name: { en: "Home", es: "Inicio" }, ref: "home" },
  { name: { en: "Research", es: "Investigación" }, ref: "research" },
  { name: { en: "Projects", es: "Proyectos" }, ref: "projects" },
  { name: { en: "Skills", es: "Habilidades" }, ref: "skills" },
  { name: { en: "Contact", es: "Contacto" }, ref: "contact" },
];

export const LINKS = {
  email: "nicovocal@live.com",
  github: "https://github.com/nicovocal-jpg",
  linkedin: "https://www.linkedin.com/in/nicolas-villarroel-vocal-9bb476192/",
  hybridRepo: "https://github.com/nicovocal-jpg/mammo-cad-hybrid",
  webRepo: "https://github.com/nicovocal-jpg/mammocad-web",
};

export const SOCIAL_LINKS = [
  { name: "mail", url: `mailto:${LINKS.email}` },
  { name: "linkedin", url: LINKS.linkedin },
  { name: "github", url: LINKS.github },
];

export const HERO = {
  greeting: { en: "Hi, my name is", es: "Hola, mi nombre es" },
  firstName: "Nicolás",
  lastName: "Villarroel",
  typed: {
    en: ["Biomedical Engineer · AI for Medical Imaging", "Full-Stack Developer · PHP · JavaScript · Python"],
    es: ["Ingeniero Biomédico · IA en Imágenes Médicas", "Desarrollador Full-Stack · PHP · JavaScript · Python"],
  },
  lede: {
    en: "I build deep learning models and clinical software for mammography, from reading DICOM files and training detection models to the web tools that put the results in front of physicians.",
    es: "Desarrollo modelos de deep learning y software clínico para mamografía, desde la lectura de archivos DICOM y el entrenamiento de modelos de detección hasta las herramientas web que llevan los resultados al médico.",
  },
  viewProjects: { en: "View projects", es: "Ver proyectos" },
};

// Big scroll-highlighted quote after the hero (from the CV profile).
export const ABOUT = {
  line1: {
    en: "Biomedical Engineer with 3+ years of hands-on experience installing, maintaining and supporting high-technology medical equipment. ",
    es: "Ingeniero Biomédico con más de 3 años de experiencia práctica en la instalación, el mantenimiento y el soporte técnico de equipos médicos de alta tecnología. ",
  },
  line2: {
    en: "I complement clinical engineering with software development and applied machine learning for medical imaging.",
    es: "Complemento la ingeniería clínica con desarrollo de software y machine learning aplicado a imágenes médicas.",
  },
};

export const PUBLICATION = {
  heading: { en: "Publication", es: "Publicación" },
  badge: { en: "IEEE SIME 2026 · accepted", es: "IEEE SIME 2026 · aceptado" },
  title: "Hybrid System for Computer-Aided Classification and Detection of Mammographic Lesions",
  me: "N. Villarroel Vocal",
  coauthors:
    "R. Martínez Severich, E. R. Ramos Silvestre, E. Calle Vives · Universidad Privada del Valle",
  abstract: {
    en: "A two-stage CAD system: InceptionV3 classifies each mammogram as normal, mass or calcification, and YOLOv8 localizes the lesions. During peer review I rebuilt the dataset with a patient-level split (CBIS-DDSM + Mini-DDSM) to remove data leakage, and re-evaluated the models on it.",
    es: "Sistema CAD de dos etapas: InceptionV3 clasifica cada mamografía como normal, masa o calcificación, y YOLOv8 localiza las lesiones. Durante la revisión por pares reconstruí el dataset con partición a nivel paciente (CBIS-DDSM + Mini-DDSM) para eliminar el data leakage, y volví a evaluar los modelos.",
  },
  code: { en: "Code", es: "Código" },
  codeUrl: LINKS.hybridRepo,
  // Add the IEEE Xplore link here once it is published, e.g. "https://ieeexplore.ieee.org/document/..."
  ieeeUrl: null,
};

export const PROJECTS_INTRO = {
  label: { en: "PROJECTS", es: "PROYECTOS" },
  title: { en: "Featured projects", es: "Proyectos destacados" },
};

// Horizontal-scrolling cards.
export const PROJECTS = [
  {
    name: "Hybrid CAD for Mammographic Lesions",
    image: "/projects/hybrid-cad.svg",
    description: {
      en: "A two-stage CAD system: InceptionV3 classifies each mammogram as normal, mass or calcification, and YOLOv8 localizes the lesions.",
      es: "Sistema CAD de dos etapas: InceptionV3 clasifica cada mamografía como normal, masa o calcificación, y YOLOv8 localiza las lesiones.",
    },
    gradient: ["#0a2e2c", "#0b7a75"],
    url: LINKS.hybridRepo,
    tech: ["python", "tensorflow", "ultralytics"],
  },
  {
    name: "MammoCAD Web: DICOM Viewer + AI",
    image: "/projects/mammocad-web.svg",
    description: {
      en: "My undergraduate thesis: a web platform where a physician uploads a mammography study, inspects it in a diagnostic viewer and runs three analyses with one click each.",
      es: "Mi proyecto de grado: una plataforma web donde el médico sube un estudio de mamografía, lo revisa en un visor diagnóstico y ejecuta tres análisis con un clic cada uno.",
    },
    gradient: ["#0d2233", "#1d6f8f"],
    url: LINKS.webRepo,
    tech: ["php", "mysql", "javascript"],
  },
  {
    name: { en: "Currently", es: "Ahora mismo" },
    image: "/projects/segmentation.svg",
    description: {
      en: "Comparing CNN and Transformer segmentation models (U-Net++, DeepLabv3+, Swin-UNet) to localize malignant microcalcifications.",
      es: "Comparo modelos de segmentación CNN y Transformer (U-Net++, DeepLabv3+, Swin-UNet) para localizar microcalcificaciones malignas.",
    },
    gradient: ["#2a1f0c", "#9a5b00"],
    url: null,
    status: { en: "In progress", es: "En curso" },
    tech: ["python", "pytorch"],
  },
];

// Detailed project write-ups, shown as tabs with a scrolling list.
// `side` is the panel next to the text on large screens.
export const DETAILS_INTRO = {
  label: { en: "DETAILS", es: "DETALLES" },
  title: { en: "Inside the projects", es: "Dentro de los proyectos" },
};

export const DETAIL_TABS = [
  {
    value: "hybrid",
    title: "Hybrid CAD",
    url: LINKS.hybridRepo,
    tags: ["Python", "TensorFlow/Keras", "PyTorch", "InceptionV3", "YOLOv8", "NumPy", "pandas", "CBIS-DDSM", "Mini-DDSM", "transfer learning"],
    items: [
      {
        title: "Hybrid CAD for Mammographic Lesions",
        description: {
          en: "Classification and detection pipeline with reproducibility built in: a single global seed, every assumed hyperparameter logged, real early-stopping epochs recorded, and all test predictions saved, so confidence intervals, calibration and FROC can be computed without retraining.",
          es: "Pipeline de clasificación y detección pensado para ser reproducible: semilla global única, registro de todos los hiperparámetros asumidos, época real de early stopping y todas las predicciones del test guardadas, para calcular intervalos de confianza, calibración y FROC sin reentrenar.",
        },
        side: {
          big: "83.2%",
          small: { en: "Accuracy · image-level split (paper)", es: "Accuracy · split por imagen (paper)" },
        },
      },
      {
        title: "95.5%",
        description: { en: "AUC · image-level split (paper)", es: "AUC · split por imagen (paper)" },
        side: {
          big: "95.5%",
          small: { en: "AUC · image-level split (paper)", es: "AUC · split por imagen (paper)" },
        },
      },
      {
        title: "74.0%",
        description: {
          en: "Accuracy · patient-level split (n=961)",
          es: "Accuracy · split por paciente (n=961)",
        },
        side: {
          big: "74.0%",
          small: { en: "Accuracy · patient-level split (n=961)", es: "Accuracy · split por paciente (n=961)" },
        },
      },
      {
        title: "31",
        description: {
          en: "leaking patients found and removed",
          es: "pacientes con leakage detectados y corregidos",
        },
        side: {
          big: "31",
          small: { en: "leaking patients found and removed", es: "pacientes con leakage detectados y corregidos" },
        },
      },
      {
        warn: true,
        title: { en: "Why two accuracies?", es: "¿Por qué dos accuracies?" },
        description: {
          en: "The first number was inflated because images of the same patient ended up in both train and test. The patient-level number is the honest estimate of generalization, and it's the one I'd trust.",
          es: "El primer número estaba inflado porque imágenes del mismo paciente quedaron en train y en test. El número a nivel paciente es la estimación honesta de generalización, y es en el que confío.",
        },
        side: {
          big: "83.2% → 74.0%",
          small: { en: "image-level → patient-level", es: "split por imagen → split por paciente" },
        },
      },
    ],
  },
  {
    value: "web",
    title: "MammoCAD Web",
    url: LINKS.webRepo,
    tags: ["Python", "pydicom", "OpenCV", "PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS", "Cornerstone.js", "pytest"],
    items: [
      {
        title: "MammoCAD Web: DICOM Viewer + AI",
        description: {
          en: "My undergraduate thesis: a web platform where a physician uploads a mammography study, inspects it in a diagnostic viewer and runs three analyses with one click each.",
          es: "Mi proyecto de grado: una plataforma web donde el médico sube un estudio de mamografía, lo revisa en un visor diagnóstico y ejecuta tres análisis con un clic cada uno.",
        },
        side: { big: "3", small: { en: "analyses · one click each", es: "análisis · un clic cada uno" } },
      },
      {
        title: { en: "DICOM viewer", es: "Visor DICOM" },
        description: {
          en: "(Cornerstone.js): zoom, pan, magnifier, angle, regional window/level",
          es: "(Cornerstone.js): zoom, pan, lupa, ángulo, ventana/nivel por región",
        },
        side: { big: "DICOM", small: "Cornerstone.js" },
      },
      {
        title: { en: "Classification", es: "Clasificación" },
        description: {
          en: "InceptionV3, normal / mass / calcification",
          es: "InceptionV3, normal / masa / calcificación",
        },
        side: { big: "InceptionV3", small: { en: "normal / mass / calcification", es: "normal / masa / calcificación" } },
      },
      {
        title: { en: "Detection", es: "Detección" },
        description: {
          en: "YOLOv8 combined with a classical microcalcification detector, with boxes merged through an IoU graph",
          es: "YOLOv8 combinado con un detector clásico de microcalcificaciones, con cajas fusionadas mediante un grafo de IoU",
        },
        side: { big: "YOLOv8 + IoU", small: { en: "boxes merged through an IoU graph", es: "cajas fusionadas mediante un grafo de IoU" } },
      },
      {
        title: { en: "Breast density", es: "Densidad mamaria" },
        description: {
          en: "segmentation + percentile thresholds mapped to 4 categories",
          es: "segmentación + umbrales por percentil en 4 categorías",
        },
        side: { big: "4", small: { en: "categories", es: "categorías" } },
      },
      {
        title: "Roles",
        description: {
          en: "admin / physician / support, bcrypt passwords, DICOM UID tracking",
          es: "administrador / médico / soporte, contraseñas bcrypt, control de UIDs DICOM",
        },
        side: { big: "bcrypt", small: { en: "admin / physician / support", es: "administrador / médico / soporte" } },
      },
    ],
  },
  {
    value: "now",
    title: { en: "Currently", es: "Ahora mismo" },
    tags: ["U-Net++", "DeepLabv3+", "Swin-UNet", "CBIS-DDSM", "INbreast"],
    items: [
      {
        title: { en: "Currently", es: "Ahora mismo" },
        description: {
          en: "Comparing CNN and Transformer segmentation models (U-Net++, DeepLabv3+, Swin-UNet) to localize malignant microcalcifications. I train on CBIS-DDSM + INbreast and test on an external dataset; the next step is combining the CC and MLO views to estimate their approximate 3D position.",
          es: "Comparo modelos de segmentación CNN y Transformer (U-Net++, DeepLabv3+, Swin-UNet) para localizar microcalcificaciones malignas. Entreno con CBIS-DDSM + INbreast y pruebo con un dataset externo; el siguiente paso es combinar las vistas CC y MLO para estimar su posición 3D aproximada.",
        },
        side: { big: "CC + MLO", small: { en: "→ approximate 3D position", es: "→ posición 3D aproximada" } },
      },
    ],
  },
];

export const SKILLS_INTRO = {
  label: { en: "SKILLS", es: "HABILIDADES" },
  title: { en: "Toolbox", es: "Herramientas" },
};

// Logos shown above the toolbox text, in groups (ids match /public/skills/*.svg).
export const SKILL_ICONS = [
  {
    title: { en: "AI and medical imaging", es: "IA e imágenes médicas" },
    icons: [
      { id: "python", label: "Python" },
      { id: "tensorflow", label: "TensorFlow" },
      { id: "keras", label: "Keras" },
      { id: "pytorch", label: "PyTorch" },
      { id: "ultralytics", label: "YOLOv8" },
      { id: "scikitlearn", label: "scikit-learn" },
      { id: "opencv", label: "OpenCV" },
      { id: "numpy", label: "NumPy" },
      { id: "pandas", label: "pandas" },
    ],
  },
  {
    title: { en: "Full-stack development", es: "Desarrollo full-stack" },
    icons: [
      { id: "php", label: "PHP" },
      { id: "javascript", label: "JavaScript" },
      { id: "html5", label: "HTML" },
      { id: "css", label: "CSS" },
      { id: "bootstrap", label: "Bootstrap" },
      { id: "jquery", label: "jQuery" },
      { id: "java", label: "Java" },
    ],
  },
  {
    title: { en: "Databases and tools", es: "Bases de datos y herramientas" },
    icons: [
      { id: "mysql", label: "MySQL" },
      { id: "postgresql", label: "PostgreSQL" },
      { id: "pytest", label: "pytest" },
      { id: "git", label: "Git" },
    ],
  },
];

// Original toolbox text, word for word.
export const TOOLBOX = [
  {
    title: "Deep learning",
    text: "TensorFlow/Keras, PyTorch, Ultralytics YOLOv8, scikit-learn, NumPy, pandas, transfer learning, segmentation (U-Net++, DeepLabv3+, Swin-UNet)",
  },
  {
    title: { en: "Medical imaging", es: "Imágenes médicas" },
    text: "DICOM, pydicom, OpenCV, Pillow, Cornerstone.js, CBIS-DDSM, Mini-DDSM, INbreast",
  },
  {
    title: { en: "Full-stack development", es: "Desarrollo full-stack" },
    text: {
      en: "PHP (PDO, sessions, bcrypt), JavaScript, jQuery/AJAX, HTML, CSS, Bootstrap, Java; Python models served to the web app as JSON",
      es: "PHP (PDO, sesiones, bcrypt), JavaScript, jQuery/AJAX, HTML, CSS, Bootstrap, Java; modelos en Python integrados a la web mediante JSON",
    },
  },
  {
    title: { en: "Databases and tools", es: "Bases de datos y herramientas" },
    text: {
      en: "MySQL/MariaDB, PostgreSQL, SQL schema design, pytest, Git/GitHub, Conda, XAMPP",
      es: "MySQL/MariaDB, PostgreSQL, diseño de esquemas SQL, pytest, Git/GitHub, Conda, XAMPP",
    },
  },
  {
    title: { en: "Evaluation", es: "Evaluación" },
    text: {
      en: "Patient-level splits, leakage audits, AUC, mAP, reproducible training",
      es: "Splits por paciente, auditoría de leakage, AUC, mAP, entrenamiento reproducible",
    },
  },
  {
    title: { en: "Biomedical engineering", es: "Ingeniería biomédica" },
    text: {
      en: "Medical devices, hospital infrastructure, clinical workflows; maintenance of anesthesia machines, ventilators, CT scanners, ultrasound and endoscopy towers (Dräger, Philips, Olympus, Bayer, Sirona)",
      es: "Equipos médicos, infraestructura hospitalaria, flujos clínicos; mantenimiento de máquinas de anestesia, ventiladores, tomógrafos, ecógrafos y torres de endoscopía (Dräger, Philips, Olympus, Bayer, Sirona)",
    },
  },
];

export const COLLABORATION = {
  topMarquee: " Deep Learning  Medical Imaging  Computer-Aided Detection  Full-Stack Development ",
  bottomMarquee: " Biomedical Engineering  DICOM  PHP  JavaScript  Python  SQL ",
  before: { en: "Open to", es: "Abierto a" },
  strong: { en: "remote roles", es: "roles remotos" },
  after: {
    en: "in machine learning for healthcare and medical imaging, and as a full-stack developer.",
    es: "en machine learning para salud e imágenes médicas, y como desarrollador full-stack.",
  },
};

export const CONTACT = {
  label: { en: "CONTACT", es: "CONTACTO" },
  title: { en: "Contact", es: "Contacto" },
  subtitle: {
    en: "Open to remote roles in machine learning for healthcare and medical imaging, and to full-stack developer positions.",
    es: "Abierto a roles remotos en machine learning para salud e imágenes médicas, y a puestos de desarrollador full-stack.",
  },
  email: LINKS.email,
  name: { en: "Name", es: "Nombre" },
  emailLabel: { en: "Email", es: "Correo" },
  message: { en: "Message", es: "Mensaje" },
  send: { en: "Send ->", es: "Enviar ->" },
  sent: { en: "Opened", es: "Abierto" },
  empty: { en: "Please fill the required fields", es: "Completa los campos requeridos" },
  opening: { en: "Opening your email app…", es: "Abriendo tu aplicación de correo…" },
};

export const FOOTER = {
  connect: { en: "Feel free to connect.", es: "Conectemos." },
  copyright: "© 2026 Nicolás Villarroel Vocal",
};
