/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SKILL_ICONS, TOOLBOX, SKILLS_INTRO } from "../../constants";
import { useLang } from "utils/i18n";

const Skills = () => {
  const sectionRef = useRef(null);
  const { t } = useLang();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-label="Skills"
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              {t(SKILLS_INTRO.label)}
            </p>
            <h2 className="text-5xl md:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              {t(SKILLS_INTRO.title)}
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-10 mt-10 max-w-5xl">
            {SKILL_ICONS.map((group) => (
              <div key={group.title.en} className="staggered-reveal">
                <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-sm mb-4">
                  {t(group.title)}
                </h3>
                <div className="flex flex-wrap gap-5">
                  {group.icons.map(({ id, label }) => (
                    <figure key={id} className="flex flex-col items-center gap-2 w-16">
                      <img src={`/skills/${id}.svg`} alt={label} width={40} height={40} className="w-10 h-10" />
                      <figcaption className="text-xs font-mono text-gray-light-4 text-center whitespace-nowrap">
                        {label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10 mt-14 max-w-4xl">
            {TOOLBOX.map((group) => (
              <div key={typeof group.title === "string" ? group.title : group.title.en} className="staggered-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">{t(group.title)}</h3>
                <p className="text-lg text-gray-light-3 leading-relaxed">{t(group.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
