import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ABOUT } from "../../constants";
import { useLang } from "utils/i18n";

const About1 = ({ clientHeight }) => {
  const { t } = useLang();
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(
          quoteRef.current.querySelector(".about-1"),
          { opacity: 0.2 },
          { opacity: 1 }
        )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2 },
          { opacity: 1 },
          "<"
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.2,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} aria-label="About" className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h2
          ref={quoteRef}
          className="font-medium text-[2.2rem] md:text-5xl lg:text-[3.5rem] text-center tracking-tight"
        >
          <span className="about-1 leading-tight">
            {t(ABOUT.line1)}
          </span>
          <span className="about-2 leading-tight">
            {t(ABOUT.line2)}
          </span>
        </h2>
      </div>
    </section>
  );
};

export default About1;
