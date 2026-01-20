import { Component } from '@angular/core';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';
import { ChangeLanguageComponent } from "./change-language/change-language.component";
import { TranslateDirective } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ChangeThemeComponent, ChangeLanguageComponent, CommonModule, TranslateDirective, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  fname = environment.fname;
  selected: string | null = null;
  menuOpen = false;

  ngOnDestroy() {
    document.body.classList.remove('no-scroll');
  }

  activateHighlight(section: string): void {
    this.selected = section;
    console.log(section);

  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }
}
