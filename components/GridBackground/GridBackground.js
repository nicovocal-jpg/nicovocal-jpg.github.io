import { useEffect, useRef } from "react";

// Cuadrícula de fondo interactiva: los nodos ondulan suavemente y,
// cerca del mouse, se apartan y se iluminan con el color de acento.
const SETTINGS = {
  spacing: 110, // tamaño de cada celda (px)
  radius: 260, // alcance del efecto del mouse (px)
  push: 34, // cuánto se apartan los nodos
  wave: 7, // amplitud de la ondulación en reposo
  lineAlpha: 0.1,
  lineAlphaActive: 0.32,
  dotAlpha: 0.26,
  dotAlphaActive: 0.6,
  lineWidth: 1,
  dotRadius: 1.2,
  dotRadiusActive: 2.6,
  base: [125, 136, 149], // gris pizarra
  accent: [79, 209, 197], // turquesa del sitio
};

const mix = (a, b, t) => Math.round(a + (b - a) * t);
const tint = (t, alpha) =>
  `rgba(${mix(SETTINGS.base[0], SETTINGS.accent[0], t)}, ${mix(
    SETTINGS.base[1],
    SETTINGS.accent[1],
    t
  )}, ${mix(SETTINGS.base[2], SETTINGS.accent[2], t)}, ${alpha})`;

const GridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const s = SETTINGS;
    const mouse = { x: -9999, y: -9999, active: false };
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let nodes = [];
    let time = 0;
    let last;
    let frame = 0;
    let resizeTimer;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / s.spacing) + 2;
      rows = Math.ceil(height / s.spacing) + 2;
      nodes = [];
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const x = c * s.spacing - s.spacing * 0.5;
          const y = r * s.spacing - s.spacing * 0.5;
          nodes.push({ hx: x, hy: y, x, y, glow: 0 });
        }
      }
    };

    const draw = (now = performance.now()) => {
      const still = reduced.matches;
      const step = last === undefined ? 1 : Math.min((now - last) / 16.67, 2);
      last = now;
      if (!still) time += 0.016 * step;

      const ease = still ? 1 : 1 - Math.pow(0.85, step);
      const glowEase = still ? 1 : 1 - Math.pow(0.88, step);

      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        let tx = n.hx;
        let ty = n.hy;
        if (!still) {
          tx += Math.sin(n.hy * 0.011 + time * 1.1) * s.wave;
          ty += Math.cos(n.hx * 0.013 - time * 0.9) * s.wave;
        }
        let energy = 0;
        if (mouse.active) {
          const dx = n.hx - mouse.x;
          const dy = n.hy - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < s.radius) {
            energy = 1 - dist / s.radius;
            const force = energy * energy * s.push;
            const angle = Math.atan2(dy, dx);
            tx += Math.cos(angle) * force;
            ty += Math.sin(angle) * force;
          }
        }
        n.glow += (energy - n.glow) * glowEase;
        n.x += (tx - n.x) * ease;
        n.y += (ty - n.y) * ease;
      }

      ctx.lineWidth = s.lineWidth;
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const n = nodes[r * cols + c];
          const right = c + 1 < cols ? nodes[r * cols + c + 1] : null;
          const down = r + 1 < rows ? nodes[(r + 1) * cols + c] : null;
          for (const m of [right, down]) {
            if (!m) continue;
            const g = Math.max(n.glow, m.glow);
            ctx.strokeStyle = tint(g, s.lineAlpha + g * s.lineAlphaActive);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const g = n.glow;
        ctx.fillStyle = tint(g, s.dotAlpha + g * s.dotAlphaActive);
        ctx.shadowBlur = g > 0.3 ? 6 * g : 0;
        ctx.shadowColor = tint(1, g * 0.5);
        ctx.beginPath();
        ctx.arc(n.x, n.y, s.dotRadius + g * s.dotRadiusActive, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const loop = (now) => {
      draw(now);
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      last = undefined;
    };
    const start = () => {
      if (reduced.matches) {
        stop();
        draw();
        return;
      }
      if (!frame) frame = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onTouch = (e) => {
      const t = e.touches[0];
      if (t) onMove(t);
    };
    const onLeave = () => {
      mouse.active = false;
    };
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        build();
        start();
      }, 150);
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    const onMotionChange = () => {
      stop();
      start();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", onMotionChange);

    build();
    start();

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none select-none"
    />
  );
};

export default GridBackground;
