/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Fade } from "react-reveal";
import { useSfx } from "utils/use-sfx";
import Button from "../Button/Button";
import FooterBg from "./FooterBg/FooterBg";
import Profiles from "../Profiles/Profiles";
import { theme } from "tailwind.config";
import { MENULINKS, FOOTER, METADATA } from "../../constants";
import { useLang } from "utils/i18n";

const Footer = () => {
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const sfx = useSfx();
  const { t } = useLang();

  const handleClick = () => {
    const newRate = playbackRate + 0.1;
    sfx.play("heart", { rate: newRate });
    setPlaybackRate(newRate);
  };

  return (
    <footer
      className="w-full relative select-none bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${theme.colors.gray.dark[5]} 0%, ${theme.colors.gray.dark[3]} 45%, #1f2a36 75%, #2c3846 100%)`,
      }}
    >
      <FooterBg />
      <Fade bottom distance={"4rem"}>
        <div className="w-full h-full pt-32">
          <div className="section-container flex flex-col h-full justify-end z-10 items-center py-12">
            <p className="font-medium text-3xl md:text-4xl text-center">
              {t(FOOTER.connect)}
            </p>
            <div className="text-center">
              <Profiles />
            </div>
            <div className="pt-4 text-center">
              <Button
                href={`#${MENULINKS[4].ref}`}
                classes="link"
                type="secondary"
              >
                {t({ en: "Let's Talk", es: "Hablemos" })}
              </Button>
            </div>
            <p className="text-center text-white text-sm sm:text-base font-medium tracking-wide mt-8">
              {t({ en: "Developed with", es: "Hecho con" })}{" "}
              <button onClick={handleClick} className="link cursor-none">
                <span className="block animate-bounce">❤️</span>
              </button>{" "}
              {t({ en: "by", es: "por" })}{" "}
              <span className="text-white">{METADATA.author}</span>
            </p>
            <p className="text-center text-white/70 text-xs sm:text-sm mt-2">
              {t({ en: "Design based on", es: "Diseño basado en" })}{" "}
              <a
                href="https://github.com/shubh73/devfolio"
                target="_blank"
                rel="noreferrer"
                className="link underline underline-offset-2 hover:text-white"
              >
                devfolio
              </a>{" "}
              {t({ en: "by", es: "de" })} Shubh Porwal
            </p>
            <p className="text-center text-white/80 text-sm mt-3">{FOOTER.copyright}</p>
          </div>
        </div>
      </Fade>
      <img
        src="/footer-curve.svg"
        className="w-full rotate-180"
        alt="footer curve"
        loading="eager"
        height={180}
      />
    </footer>
  );
};

export default Footer;
