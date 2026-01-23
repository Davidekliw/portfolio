import { Injectable } from '@angular/core';

type Theme = 'themeA' | 'themeB' | 'themeC';

@Injectable({ providedIn: 'root' })

/**
 * Manages the global UI theme.
 * Applies the theme as a CSS class on <body> and persists the selection in localStorage.
 */
export class ThemeService {
  /** Default theme used when no theme is stored yet. */
  private readonly defaultTheme: Theme = 'themeA';

  constructor() {
    const currentTheme = localStorage.getItem('theme') as Theme | null;
    this.applyTheme(currentTheme ?? this.defaultTheme);
  }

  /** Activates the specified theme and saves it to localStorage. */
  applyTheme(theme: Theme): void {
    document.body.className = '';
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  /** Toggles the selected theme. */
  toggleTheme(currentTheme: Theme): void {
    this.applyTheme(currentTheme);
  }
}
