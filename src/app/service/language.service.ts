import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import de from '../../../public/i18n/de.json';
import en from '../../../public/i18n/en.json';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private key = 'lang';
  langs = ['de', 'en'] as const;

  constructor(private t: TranslateService) {
    t.setTranslation('de', de, true);
    t.setTranslation('en', en, true);
    t.setFallbackLang('de');
  }

  init() {
    const saved = this.getStorageInformation();
    this.activateLanguage(saved);
  }

  set(lang: 'de' | 'en') {
    localStorage.setItem(this.key, lang);
    this.activateLanguage(lang);
  }

  activateLanguage(lang: 'de' | 'en') {
    this.t.use(lang);
    document.documentElement.lang = lang;
  }

  getStorageInformation() {
    return (localStorage.getItem(this.key) as 'de' | 'en') ?? 'de';
  }
}
