"use client";

import { Check, ChevronDown, Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { languages, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const current = languages.find((language) => language.code === locale) ?? languages[0];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  useEffect(() => {
    function close(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    }
    window.addEventListener("pointerdown", close);
    return () => window.removeEventListener("pointerdown", close);
  }, []);

  function selectLanguage(next: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    const hasLocale = languages.some((language) => language.code === segments[0]);
    if (next === "en") {
      if (hasLocale) segments.shift();
    } else if (hasLocale) segments[0] = next;
    else segments.unshift(next);
    setOpen(false);
    const nextPath = segments.length ? `/${segments.join("/")}` : "/";
    router.push(`${nextPath}${window.location.hash}`);
  }

  return (
    <div className="language-switcher" ref={root}>
      <button
        className="language-trigger"
        type="button"
        aria-label={`Current language: ${current.name}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Languages size={16} />
        <span>{current.short}</span>
        <ChevronDown className={open ? "rotated" : ""} size={14} />
      </button>
      {open ? (
        <div className="language-menu" role="listbox" aria-label="Select language">
          <div className="language-menu-head">
            <span>Language</span>
            <small>Global site</small>
          </div>
          {languages.map((language) => (
            <button
              type="button"
              role="option"
              aria-selected={locale === language.code}
              className={locale === language.code ? "selected" : ""}
              key={language.code}
              onClick={() => selectLanguage(language.code)}
            >
              <span className="language-flag" aria-hidden="true">{language.flag}</span>
              <span className="language-name">{language.name}</span>
              <span className="language-code">{language.short}</span>
              {locale === language.code ? <Check size={15} /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
