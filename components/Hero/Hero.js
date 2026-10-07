import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Button from "../Button/Button";
import styles from "./Hero.module.scss";
import { MENULINKS, HERO, LINKS } from "../../constants";
import { useLang } from "utils/i18n";

const options = {
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {
  const { lang, t } = useLang();
  const [lottie, setLottie] = useState(null);

  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      ...options,
      strings: HERO.typed[lang],
    });

    return () => typed.destroy();
  }, [typedElementRef, lang]);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/lottie/lottie.json"),
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      aria-label="Introduction"
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      style={{ opacity: 0 }}
    >
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
      <div className="flex flex-col pt-40 md:pt-0 select-none">
        <h5
          className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal text-lg`}
        >
          {t(HERO.greeting)}
        </h5>
        <h1 className={`${styles.heroName} text-white text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight`}>
          <span className={`relative ${styles.emphasize} staggered-reveal`}>
            {HERO.firstName}
          </span>
          <span className="staggered-reveal"> {HERO.lastName}</span>
        </h1>
        <p>
          <span
            ref={typedElementRef}
            className="staggered-reveal text-xl sm:text-2xl md:text-3xl text-gray-light-3 font-mono leading-relaxed"
          />
        </p>
        <p className="staggered-reveal mt-4 max-w-2xl text-lg md:text-xl text-gray-light-3 leading-relaxed">
          {t(HERO.lede)}
        </p>
        <div className="staggered-reveal pt-8 flex flex-wrap gap-4">
          <Button href={`#${MENULINKS[2].ref}`} classes="link" type="primary">
            {t(HERO.viewProjects)}
          </Button>
          <Button href={LINKS.github} classes="link" type="secondary" target="_blank" rel="noreferrer">
            GitHub ↗
          </Button>
          <Button href={`mailto:${LINKS.email}`} classes="link" type="secondary">
            Email
          </Button>
          <Button href={LINKS.linkedin} classes="link" type="secondary" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </Button>
        </div>
      </div>
      <div
        className="absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
        ref={lottieRef}
      />
    </section>
  );
};

export default Hero;
