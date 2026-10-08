import styles from "./Chase.module.scss";

// Chico de rulos (el mismo del hero) corriendo detrás de una cabeza de robot (la IA).
const Runner = () => (
  <svg
    className={styles.runner}
    viewBox="0 0 100 124"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g className={styles.bob}>
      {/* brazo trasero */}
      <g className={`${styles.limb} ${styles.armBack}`}>
        <rect x="46" y="48" width="9" height="20" rx="4.5" fill="#15191e" />
        <rect x="46" y="62" width="9" height="15" rx="4.5" fill="#15191e" transform="rotate(-55 50.5 64)" />
        <circle cx="62" cy="68" r="4" fill="#d9a988" />
      </g>
      {/* pierna trasera */}
      <g className={`${styles.limb} ${styles.legBack}`}>
        <rect x="43" y="72" width="11" height="34" rx="5.5" fill="#1a1d22" />
        <path d="M41 103 h16 a6 6 0 0 1 6 6 v1 h-22 z" fill="#c9d1d9" />
        <rect x="41" y="109" width="22" height="3" rx="1.5" fill="#97a3af" />
      </g>
      {/* torso: suéter negro de cuello alto */}
      <g transform="rotate(10 50 62)">
        <rect x="36" y="44" width="28" height="36" rx="12" fill="#22272e" stroke="#3b4552" strokeWidth="1" />
        <rect x="44" y="40" width="13" height="9" rx="4" fill="#2a3038" />
        <path d="M40 60 q10 4 20 0" stroke="#2f363f" strokeWidth="1.5" fill="none" />
      </g>
      {/* cabeza */}
      <g transform="rotate(8 55 28)">
        <circle cx="55" cy="29" r="15" fill="#f1c7a6" />
        <circle cx="46.5" cy="31" r="3.4" fill="#e4b090" />
        {/* rulos */}
        <g fill="#14161a">
          <circle cx="44" cy="22" r="7" />
          <circle cx="50" cy="16" r="7" />
          <circle cx="58" cy="14.5" r="6.8" />
          <circle cx="65.5" cy="18" r="5.6" />
          <circle cx="69" cy="22.5" r="3.6" />
          <circle cx="40.5" cy="29" r="5.6" />
          <circle cx="42" cy="36" r="4.4" />
          <circle cx="53" cy="11.5" r="4.5" />
          <circle cx="62" cy="11.8" r="3.6" />
          <circle cx="38" cy="22" r="4" />
        </g>
        <g fill="#2a2e35">
          <circle cx="49" cy="14" r="2" />
          <circle cx="58" cy="12.5" r="1.8" />
          <circle cx="43" cy="20" r="1.8" />
          <circle cx="65" cy="16.5" r="1.5" />
        </g>
        {/* lentes */}
        <line x1="48" y1="29" x2="58" y2="29.5" stroke="#0c1116" strokeWidth="1.6" />
        <rect x="58" y="25.5" width="11" height="8.5" rx="2.6" fill="rgba(255,255,255,0.18)" stroke="#0c1116" strokeWidth="1.8" />
        <circle cx="64.5" cy="29.8" r="1.5" fill="#0c1116" />
        <circle cx="64" cy="36" r="2.6" fill="#f29a9a" opacity="0.55" />
        <path d="M59.5 38.5 q2.2 1.6 4.4 -0.3" stroke="#8a4b3a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
      {/* pierna delantera */}
      <g className={`${styles.limb} ${styles.legFront}`}>
        <rect x="45" y="72" width="11" height="34" rx="5.5" fill="#2b3038" />
        <path d="M43 103 h16 a6 6 0 0 1 6 6 v1 h-22 z" fill="#ffffff" />
        <rect x="43" y="109" width="22" height="3" rx="1.5" fill="#c9d1d9" />
      </g>
      {/* brazo delantero */}
      <g className={`${styles.limb} ${styles.armFront}`}>
        <rect x="47" y="48" width="9.5" height="20" rx="4.75" fill="#2c323a" />
        <rect x="47" y="62" width="9.5" height="15" rx="4.75" fill="#2c323a" transform="rotate(-55 51.5 64)" />
        <circle cx="63" cy="68" r="4.2" fill="#f1c7a6" />
      </g>
    </g>
  </svg>
);

const RobotHead = () => (
  <svg
    className={styles.robot}
    viewBox="0 0 90 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="chase-shell" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#eef2f6" />
        <stop offset="1" stopColor="#aab6c2" />
      </linearGradient>
      <filter id="chase-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.6" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* estela de movimiento */}
    <g className={styles.trail} stroke="#4fd1c5" strokeLinecap="round" opacity="0.7">
      <line x1="2" y1="36" x2="14" y2="36" strokeWidth="2" />
      <line x1="6" y1="46" x2="16" y2="46" strokeWidth="1.5" />
      <line x1="0" y1="56" x2="13" y2="56" strokeWidth="2" />
    </g>
    {/* antena */}
    <line x1="52" y1="20" x2="52" y2="9" stroke="#97a3af" strokeWidth="2.2" />
    <circle className={styles.antenna} cx="52" cy="7" r="4" fill="#f0b35a" filter="url(#chase-glow)" />
    {/* orejas */}
    <rect x="18" y="36" width="7" height="16" rx="3" fill="#7d8895" />
    <rect x="79" y="36" width="7" height="16" rx="3" fill="#7d8895" />
    {/* cabeza */}
    <rect x="22" y="19" width="60" height="50" rx="16" fill="url(#chase-shell)" />
    <rect x="29" y="28" width="46" height="27" rx="11" fill="#0f1720" />
    {/* ojos */}
    <g className={styles.eyes} fill="#4fd1c5" filter="url(#chase-glow)">
      <rect x="38" y="35" width="8" height="12" rx="4" />
      <rect x="58" y="35" width="8" height="12" rx="4" />
    </g>
    <rect x="44" y="60" width="16" height="3" rx="1.5" fill="#7d8895" />
  </svg>
);

const Chase = () => (
  <div className={styles.chase}>
    <Runner />
    <RobotHead />
  </div>
);

export default Chase;
