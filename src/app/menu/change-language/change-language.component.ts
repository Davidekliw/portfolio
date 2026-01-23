import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../service/language.service';

type Lang = 'de' | 'en';

@Component({
  selector: 'app-change-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})


export class ChangeLanguageComponent {

  constructor(public lang: LanguageService) { }

  languageOptions = ['de', 'en'] as const;
  selected = this.lang.getStorageInformation();

  get selectedToShow(): string {
    return this.selected.toUpperCase();
  }

  onSelectedChange(lang: Lang): void {
    this.selected = lang;
    this.lang.set(lang)
  }
}
