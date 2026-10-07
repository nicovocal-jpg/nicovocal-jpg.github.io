import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "../Button/Button";
import { PUBLICATION } from "../../constants";
import { useLang } from "utils/i18n";

const Publication = () => {
  const sectionRef = useRef(null);
  const { t } = useLang();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(sectionRef.current.querySelectorAll(".staggered-reveal"), {
          opacity: 0,
          duration: 0.5,
          stagger: 0.5,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
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
      id="research"
      aria-label="Publication"
      className="w-full relative select-none mt-24 mb-40"
    >
      <div className="section-container py-16 flex flex-col">
        <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
          {t({ en: "RESEARCH", es: "INVESTIGACIÓN" })}
        </p>
        <h2 className="text-5xl md:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
          {t(PUBLICATION.heading)}
        </h2>

        <article className="staggered-reveal mt-10 max-w-4xl rounded-2xl border border-gray-dark-1 border-l-4 border-l-indigo-light bg-gray-dark-3 p-6 md:p-10">
          <span className="inline-block font-mono text-sm px-3 py-1 rounded-full bg-teal-soft text-indigo-light">
            {t(PUBLICATION.badge)}
          </span>
          <h3 className="mt-5 text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
            {PUBLICATION.title}
          </h3>
          <p className="mt-3 text-gray-light-3">
            <b className="text-white font-semibold">{PUBLICATION.me}</b>, {PUBLICATION.coauthors}
          </p>
          <p className="mt-5 text-lg text-gray-light-2 leading-relaxed">{t(PUBLICATION.abstract)}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={PUBLICATION.codeUrl}
              classes="link"
              type="primary"
              target="_blank"
              rel="noreferrer"
            >
              {`${t(PUBLICATION.code)} ↗`}
            </Button>
            {PUBLICATION.ieeeUrl && (
              <Button
                href={PUBLICATION.ieeeUrl}
                classes="link"
                type="secondary"
                target="_blank"
                rel="noreferrer"
              >
                IEEE Xplore ↗
              </Button>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Publication;
