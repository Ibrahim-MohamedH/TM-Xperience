import { DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { themeKey } from '../config/general';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private document = inject(DOCUMENT)
  isDark = signal<boolean>(false)

  detectTheme(): void{
    const storedTheme = localStorage.getItem(themeKey);
    const isDarkValue = storedTheme ? JSON.parse(storedTheme) === true : false;
    this.document.documentElement.classList.toggle('dark', isDarkValue);
    this.isDark.set(isDarkValue);
  }

  toggleDarkMode():void {
    const nextState = !this.isDark();
    this.isDark.set(nextState);
    this.document.documentElement.classList.toggle('dark', nextState);
    localStorage.setItem(themeKey, JSON.stringify(nextState));
  }
}
