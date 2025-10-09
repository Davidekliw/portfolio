import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentClass = 'themeA';

  constructor() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === null) {
      console.log('No theme found, setting default theme.');
      document.body.classList.add(this.currentClass);
      localStorage.setItem('theme', this.currentClass);
    }
    else {
      document.body.classList.add(currentTheme);
    }
  }

  toggleTheme(currentTheme: string) {
    document.body.className = '';
    document.body.classList.add(currentTheme);
    localStorage.setItem('theme', currentTheme);
    console.log(currentTheme);
  }
}
