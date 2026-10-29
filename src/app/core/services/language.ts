import { DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { langkey } from '../config/general';

@Injectable({
  providedIn: 'root',
})
export class Language {
  protected translate = inject(TranslateService)
  private document = inject(DOCUMENT)
  currentLang = signal<'AR' | 'EN'>('AR')

  detectLanguage() : void{
    const storedLang = localStorage.getItem(langkey);
    const defaultLang = 'ar';
    const initialLang = storedLang == 'ar' || storedLang == 'en' ? storedLang : defaultLang
    this.setLanguage(initialLang)
  }

  private setLanguage(lang: 'ar' | 'en') : void{
    this.translate.use(lang)
    localStorage.setItem(langkey, lang);

    this.document.documentElement.setAttribute('lang', lang)
    this.document.documentElement.setAttribute('dir', lang == 'ar' ? 'rtl' : 'ltr')

    this.currentLang.set(lang == 'ar' ? 'AR' : 'EN')
  }

  toggleLangage() : void{
    const newLang = this.currentLang() == 'AR' ? 'en' : 'ar';
    this.setLanguage(newLang);
  }
}
