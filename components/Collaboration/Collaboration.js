import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { COLLABORATION } from "../../constants";
import { useLang } from "utils/i18n";

const Collaboration = ({ clientHeight }) => {
  const { t } = useLang();
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const smallScreen = document.body.clientWidth < 767;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
    });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    const slidingTl = gsap.timeline({ defaults: { ease: "none" } });

    slidingTl
      .to(sectionRef.current.querySelector(".ui-left"), {
        xPercent: smallScreen ? -500 : -150,
      })
      .from(
        sectionRef.current.querySelector(".ui-right"),
        { xPercent: smallScreen ? -500 : -150 },
        "<"
      );

    const st1 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 1,
      animation: timeline,
    });

    const st2 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      animation: slidingTl,
    });

    return () => {
      timeline.kill();
      slidingTl.kill();
      st1.kill();
      st2.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} aria-label="Collaboration" className="w-full relative select-none my-40">
      <div
        className={`${
          clientHeight > 650 ? "py-36" : "py-48"
        } section-container flex flex-col`}
      >
        <p className="opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-left transform-gpu">
          {Array(5)
            .fill(COLLABORATION.topMarquee)
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>

        <h2
          ref={quoteRef}
          className="mt-6 md:mt-8 font-medium text-3xl md:text-5xl text-center"
        >
          {t(COLLABORATION.before)}{" "}
          <span
            className="text-strong font-semibold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #2bb3a8 51%, #0b7a75 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t(COLLABORATION.strong)}
          </span>{" "}
          {t(COLLABORATION.after)}
        </h2>

        <p className="mt-6 md:mt-8 opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-right transform-gpu">
          {Array(5)
            .fill(COLLABORATION.bottomMarquee)
            .reduce((str, el) => str.concat(el), "")}{" "}
        </p>
      </div>
    </section>
  );
};

export default Collaboration;
