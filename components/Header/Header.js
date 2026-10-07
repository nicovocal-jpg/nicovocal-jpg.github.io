import { useCallback, useEffect, useRef } from "react";
import { useSfx } from "utils/use-sfx";
import { useLang } from "utils/i18n";
import { cn } from "utils/cn";

const LangToggle = () => {
  const { lang, setLang } = useLang();
  const sfx = useSfx();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className="flex items-center rounded-full border border-gray-dark-1 p-0.5 font-mono text-sm"
    >
      {["en", "es"].map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => {
            if (lang !== code) {
              setLang(code);
              sfx.play("tab-switch");
            }
          }}
          className={cn(
            "link cursor-none rounded-full px-3 py-1 uppercase transition-colors duration-200",
            lang === code ? "bg-indigo-dark text-white" : "text-gray-light-3 hover:text-white",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

const Header = ({ children }) => {
  const inputRef = useRef(null);
  const sfx = useSfx();

  const handleClick = useCallback(
    (e) => {
      sfx.play(e.target.checked ? "pop" : "pop-down");
    },
    [sfx],
  );

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape" && inputRef.current?.checked) {
      inputRef.current.checked = false;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <nav className="w-full fixed top-0 py-8 z-50 select-none bg-gradient-to-b from-black shadow-black transition-all duration-300">
      <div className="flex justify-between items-center section-container">
        <a href="#home" className="link flex items-center gap-3" aria-label="Nicolás Villarroel">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" width={30} height={30} />
          <span className="hidden sm:inline font-mono text-sm text-gray-light-2">
            N. Villarroel
          </span>
        </a>
        <div className="outer-menu relative flex items-center gap-6 z-[1]">
          <LangToggle />
          <input
            ref={inputRef}
            aria-label="menu"
            className="checkbox-toggle link absolute top-1/2 -translate-y-1/2 right-0 w-6 h-6 opacity-0"
            type="checkbox"
            onClick={handleClick}
          />
          <div className="hamburger w-6 h-6 flex items-center justify-center">
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center" />
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Header;
