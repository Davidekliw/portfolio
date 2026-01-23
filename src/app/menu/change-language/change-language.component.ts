import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../service/language.service';


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
  selectedToShow = this.selected.toUpperCase();

  onSelectedChange(lang: 'de' | 'en') {
    this.selected = lang;
    this.lang.set(lang)
  }
}
