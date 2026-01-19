import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import de from '../../../public/i18n/de.json';
import en from '../../../public/i18n/en.json';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private key = 'lang';
  langs = ['DE','EN'] as const;

  constructor(private t: TranslateService) {
    t.setTranslation('DE', de, true);
    t.setTranslation('EN', en, true);
    t.setFallbackLang('DE');
  }

  init() {
    const saved = (localStorage.getItem(this.key) as any) ?? 'DE';
    this.t.use(saved);
  }

  set(lang: 'DE'|'EN') {
    localStorage.setItem(this.key, lang);
    this.t.use(lang);
  }

  get() {
    return (localStorage.getItem(this.key) as any) ?? 'DE';
  }
}
