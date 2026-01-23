import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme.service';
import { OnInit } from '@angular/core';

type Theme = 'themeA' | 'themeB' | 'themeC';

@Component({
  selector: 'app-change-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-theme.component.html',
  styleUrl: './change-theme.component.scss'
})

/**
 * UI component for switching between the available themes.
 * Loads the saved theme from localStorage and delegates theme activation to ThemeService.
 */
export class ChangeThemeComponent implements OnInit {

  /** Theme Keys available for selection in UI (must match the ThemeService) */
  readonly themes = ['themeA', 'themeB', 'themeC'];

  /** currently selected theme key used to highlight the active theme in the UI */
  selected: string = 'themeA';

  constructor(private themeService: ThemeService) { }

  /** loads the selected theme from localstorage on init */
  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    this.selected = saved ?? 'themeA';
  }

  /** activates the selected theme */
  toggleTheme(theme: Theme): void {
    this.themeService.toggleTheme(theme);
    this.selected = theme;
  }
}
