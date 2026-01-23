import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from './environments/environments';
import { LanguageService } from './service/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

/**
 * Root application component.
 * Initializes global services (e.g. language) and renders the main layout.
 */
export class AppComponent implements OnInit {

  /** Application title loaded from the environment configuration. */
  readonly title = environment.title;

  constructor(private lang: LanguageService) {
  }

  ngOnInit(): void {
    this.lang.init();
  }
}