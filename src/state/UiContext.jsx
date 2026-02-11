import React, { useEffect, useMemo, useState } from "react";
import { dict } from "../translations/dict";
import { UiContext } from "./UiContextValue";

const LS_KEYS = {
  theme: "sk_theme",
  lang: "sk_lang",
};

export function UiProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem(LS_KEYS.lang) || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem(LS_KEYS.theme) || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    localStorage.setItem(LS_KEYS.theme, theme);
    localStorage.setItem(LS_KEYS.lang, lang);
  }, [theme, lang]);

  const t = useMemo(() => dict[lang] || dict.en, [lang]);

  return (
    <UiContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      {children}
    </UiContext.Provider>
  );
}
