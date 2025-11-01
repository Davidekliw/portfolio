import { Component } from '@angular/core';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';
import { ChangeLanguageComponent } from "./change-language/change-language.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ChangeThemeComponent, ChangeLanguageComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  fname = environment.fname;
  selected: string | null = null;

  activateHighlight(section: string): void {
    this.selected = section;
    console.log(section);

  }

  toggleMenu(): void {
  }
}
