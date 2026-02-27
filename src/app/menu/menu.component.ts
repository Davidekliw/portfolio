import { Component, inject, OnDestroy } from '@angular/core';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';
import { ChangeLanguageComponent } from "./change-language/change-language.component";
import { TranslateDirective } from '@ngx-translate/core';
import { RouterLink, Router, NavigationEnd } from "@angular/router";
import { ScrollService } from '../service/scroll.service';
import { filter } from 'rxjs/operators';

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

  scroll = inject(ScrollService);

  /* Listen to router events to reset active section highlight when navigating to a new page */
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        if (this.router.url !== '/') {
          this.selected = "";
        }
      });
  }

  /* Access environment variable for use in template */
  fname = environment.fname;

  /* Currently selected section in the menu */
  selected: string = 'aboutMe';

  /* Mobile menu open/close state */
  menuOpen = false;

  ngOnDestroy(): void {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }

  /* set the currently activate menu section for visual highlight */
  activateHighlight(section: string): void {
    this.selected = section;
  }

  /* Toggle mobile menu open/close state and manage scroll */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
    document.documentElement.classList.toggle('no-scroll', this.menuOpen);
  }

  /* Close the mobile menu and re-enable scroll */
  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.toggle('no-scroll', this.menuOpen);
    document.documentElement.classList.toggle('no-scroll', this.menuOpen);
  }
}
