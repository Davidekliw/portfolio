import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-change-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})


export class ChangeLanguageComponent {

  languageOptions = ['DE', 'EN'] as const;
  selected = this.lang.get();

  constructor(public lang: LanguageService) { }

  onSelectedChange(lang: 'DE' | 'EN') {
    this.selected = lang;
    this.lang.set(lang)
  }
}
