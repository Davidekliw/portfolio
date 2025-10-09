import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-change-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-theme.component.html',
  styleUrl: './change-theme.component.scss'
})
export class ChangeThemeComponent {

  themes = ['A', 'B', 'C'];

  private currentTheme = 'themeA';
  constructor(private themeService: ThemeService) { }

  toggleTheme(theme: string): void {
    this.themeService.toggleTheme('theme' + theme);
  }
}
