import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-change-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-theme.component.html',
  styleUrl: './change-theme.component.scss'
})
export class ChangeThemeComponent implements OnInit {

  themes = ['themeA', 'themeB', 'themeC'];
  selected: string | null = null;
  private currentTheme = 'themeA';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    this.selected = saved ?? 'themeA';
  }

  toggleTheme(theme: string): void {
    this.themeService.toggleTheme(theme);
    this.selected = theme;
    console.log(theme);
  }
}
