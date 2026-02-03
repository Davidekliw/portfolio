import { Component, OnDestroy } from '@angular/core';
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

/**
 * Main navigation/menu component.
 * Handles mobile menu open/close state, active section highlighting, and smooth scrolling.
 */
export class MenuComponent implements OnDestroy {

  /* Access environment variable for use in template */
  fname = environment.fname;

  /* Currently selected section in the menu */
  selected: string = 'aboutMe';

  /* Mobile menu open/close state */
  menuOpen = false;

  ngOnDestroy(): void {
    document.body.classList.remove('no-scroll');
  }

  /* set the currently activate menu section for visual highlight */
  activateHighlight(section: string): void {
    this.selected = section;
  }

  /* Smoothly scroll to the section with the given id */
  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  /* Toggle mobile menu open/close state and manage body scroll */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  /* Close the mobile menu and re-enable body scroll */
  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }
}
