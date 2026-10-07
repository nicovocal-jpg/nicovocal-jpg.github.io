import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { DETAILS_INTRO, DETAIL_TABS } from "../../constants";
import { useLang } from "utils/i18n";

const SidePanel = ({ big, small }) => (
  <div className="h-full w-full flex flex-col items-center justify-center text-white px-6 text-center">
    <span className="text-4xl xl:text-5xl font-semibold tracking-tight">{big}</span>
    <span className="mt-3 font-mono text-sm text-white/90">{small}</span>
  </div>
);

const Work = ({ isDesktop }) => {
  const sectionRef = useRef(null);
  const { t, lang } = useLang();

  const tabItems = useMemo(
    () =>
      DETAIL_TABS.map((tab) => ({
        title: t(tab.title),
        value: tab.value,
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={tab.items.map((item) => ({
              title: t(item.title),
              description: t(item.description),
              warn: item.warn,
              content: <SidePanel big={t(item.side.big)} small={t(item.side.small)} />,
            }))}
            footer={
              <div className="my-8">
                <div className="flex flex-wrap gap-2">
                  {tab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 rounded-md border border-gray-dark-1 text-gray-light-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {tab.url && (
                  <a
                    href={tab.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link inline-block mt-5 font-semibold text-indigo-light hover:text-white"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            }
          />
        ),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDesktop, lang]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
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
      id="details"
      aria-label="Project details"
      className="w-full relative select-none xs:mt-40 sm:mt-56 mb-[34rem]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              {t(DETAILS_INTRO.label)}
            </p>
            <h2 className="text-5xl md:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              {t(DETAILS_INTRO.title)}
            </h2>
          </div>
          <Tabs key={lang} tabItems={tabItems} />
        </div>
      </div>
    </section>
  );
};

export default Work;
