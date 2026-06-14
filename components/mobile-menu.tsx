"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getTranslations, type Locale } from "@/lib/i18n";

export function MobileMenu({ locale = "en" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const t = getTranslations(locale);
  return (
    <div className="mobile-menu">
      <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      {open ? (
        <nav>
          <a href="#products" onClick={() => setOpen(false)}>{t.nav[0]}</a>
          <a href="#custom" onClick={() => setOpen(false)}>{t.nav[1]}</a>
          <a href="#applications" onClick={() => setOpen(false)}>{t.nav[2]}</a>
          <a href="#resources" onClick={() => setOpen(false)}>{t.nav[3]}</a>
          <a href="#about" onClick={() => setOpen(false)}>{t.nav[4]}</a>
          <div className="mobile-language"><LanguageSwitcher locale={locale} /></div>
          <a className="button" href="#inquiry" onClick={() => setOpen(false)}>{t.quote}</a>
        </nav>
      ) : null}
    </div>
  );
}
