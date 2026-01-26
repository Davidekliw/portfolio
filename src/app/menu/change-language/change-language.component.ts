import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../service/language.service';
import { Lang, LANGS } from '../../service/language.service';

@Component({
  selector: 'app-change-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})


export class ChangeLanguageComponent {

  /** Language options shown in the UI */
  readonly languageOptions = LANGS;

  /** currently selected language loaded from localstorage on init */
  selected: Lang = this.lang.getStorageInformation();

  constructor(public lang: LanguageService) { }

  /** Handles language change from the UI */
  onSelectedChange(lang: Lang): void {
    this.selected = lang;
    this.lang.set(lang)
  }
}