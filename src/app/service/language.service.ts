import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import de from '../../../public/i18n/de.json';
import en from '../../../public/i18n/en.json';

/** Language options shown in the UI */
export const LANGS = [
  { key: 'de' as const, label: 'DE' },
  { key: 'en' as const, label: 'EN' }
] as const;

export type LangKey = (typeof LANGS)[number]['key'];
export type Lang = (typeof LANGS)[number];

@Injectable({ providedIn: 'root' })

export class LanguageService {

  /** localStorage key used to persist the selected language. */
  private readonly key = 'lang';
  /** Supported languages. */
  readonly langs = LANGS;

  /**
  * Registers in-memory translations and configures the fallback language.
  * Note: We also keep the HTML <html lang="..."> attribute in sync to avoid browser translation popups.
  */
  constructor(private t: TranslateService) {
    t.setTranslation('de', de, true);
    t.setTranslation('en', en, true);
    t.setFallbackLang('de');
  }

  /** Initializes the language from localStorage (or falls back to 'de'). */
  init(): void {
    const saved = this.getStorageInformation();
    this.activateLanguage(saved);
  }

  /**
 * Persists the selected language key and activates it immediately.
 * @param lang Selected language object (key + label)
  */
  set(lang: Lang): void {
    localStorage.setItem(this.key, lang.key);
    this.activateLanguage(lang);
  }


  /**
 * Activates the given language in ngx-translate and updates the document language attribute.
 * @param lang Selected language object (key + label)
  */
  private activateLanguage(lang: Lang): void {
    this.t.use(lang.key);
    document.documentElement.lang = lang.key;
  }

  /**
  * Reads the saved language from localStorage.
  * @returns The saved language or 'de' if none is stored.
  */
  getStorageInformation(): Lang {
    const key = localStorage.getItem(this.key) as LangKey | null;
    return this.langs.find(l => l.key === key) ?? this.langs[0];
  }
}
