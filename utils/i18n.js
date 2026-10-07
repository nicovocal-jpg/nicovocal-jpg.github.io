import { createContext, useCallback, useContext, useEffect, useState } from "react";

const LangContext = createContext({ lang: "en", setLang: () => {}, t: (v) => v });

const STORAGE_KEY = "nv-lang";

const pick = (lang) => (value) => {
  if (value && typeof value === "object" && !Array.isArray(value) && ("en" in value || "es" in value)) {
    return value[lang] ?? value.en;
  }
  return value;
};

export const LangProvider = ({ children }) => {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    let initial = null;
    try {
      initial = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      initial = null;
    }
    if (initial !== "en" && initial !== "es") {
      initial = (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
    }
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* storage unavailable: keep in memory only */
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: pick(lang) }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
