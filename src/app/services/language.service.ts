import { Injectable } from '@angular/core';

import en from '../../assets/i18n/en.json';
import ru from '../../assets/i18n/ru.json';
import de from '../../assets/i18n/de.json';

export type AppLang = 'en' | 'ru' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang: AppLang = 'en';
  private translations: Record<AppLang, any> = { en, ru, de };

  constructor() {
    const saved = localStorage.getItem('yalla_lang');
    const allowed: AppLang[] = ['en', 'ru', 'de'];
    const initial = allowed.includes(saved as AppLang) ? (saved as AppLang) : 'en';
    this.setLanguage(initial);
    document.documentElement.classList.remove('dark');
  }

  setLanguage(lang: AppLang) {
    this.currentLang = lang;
    localStorage.setItem('yalla_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = 'ltr';
  }

  instant(key: string): string {
    const keys = key.split('.');
    let result = this.translations[this.currentLang];
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key;
      }
    }
    return typeof result === 'string' ? result : key;
  }
}
