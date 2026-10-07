/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";
import { useLang } from "utils/i18n";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectTile = ({ project, classes, isDesktop }) => {
  const projectCard = useRef(null);
  const { t } = useLang();
  const { name, image, description, gradient, url, tech, status } = project;

  useEffect(() => {
    const node = projectCard.current;
    VanillaTilt.init(node, tiltOptions);
    return () => node?.vanillaTilt?.destroy();
  }, []);

  const Wrapper = url ? "a" : "div";
  const wrapperProps = url ? { href: url, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`overflow-hidden rounded-3xl snap-start link ${classes || ""}`}
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.projectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <img
          src="/project-bg.svg"
          alt=""
          className="absolute w-full h-full top-0 left-0 opacity-20 rounded-3xl object-cover"
        />
        <img src={image} alt="" className={styles.projectImage} loading="lazy" />
        <div
          className="absolute bottom-0 left-0 w-full h-56 pointer-events-none"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 35%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <div className="z-10 pl-2 pt-2 transform-gpu" style={{ transform: "translateZ(3rem)" }}>
          <h3 className="font-semibold text-2xl sm:text-3xl max-w-[18rem] leading-tight">{t(name)}</h3>
          {status && (
            <span className="inline-block mt-3 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-black/40 border border-white/30">
              {t(status)}
            </span>
          )}
        </div>
        <div className="z-10 transform-gpu" style={{ transform: "translateZ(0.8rem)" }}>
          <p className="text-base md:text-lg font-medium text-white max-w-[24rem] leading-snug">
            {t(description)}
          </p>
          <div className="mt-3 flex items-center gap-2">
            {tech.map((el) => (
              <span key={el} className="w-8 h-8 rounded-lg bg-black/50 flex items-center justify-center">
                <img src={`/skills/${el}.svg`} alt={el} width={18} height={18} className="w-[18px] h-[18px]" />
              </span>
            ))}
            {url && <span className="ml-2 font-mono text-sm text-white/80">GitHub ↗</span>}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectTile;
