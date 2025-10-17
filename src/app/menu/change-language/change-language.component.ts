import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-change-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})
export class ChangeLanguageComponent implements OnInit {
  languageOptions = ['DE', 'EN'];
  selected: string | null = null;
  localStorageKey = 'lang';

  ngOnInit(): void {
    const saved = localStorage.getItem(this.localStorageKey);
    this.selected = saved ?? 'DE';
  }
  onSelectedChange(language: string) {
    localStorage.setItem(this.localStorageKey, language);
    this.selected = language;
  }
}
