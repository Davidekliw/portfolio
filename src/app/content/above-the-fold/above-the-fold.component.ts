import { Component } from '@angular/core';
import { environment } from '../../environments/environments';
import { TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateDirective],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})

/**
 * Above-the-fold hero section shown at the top of the landing page.
 * Displays the main headline and provides a smooth scroll CTA.
 */
export class AboveTheFoldComponent {

  /** Display name loaded from environment configuration */
  readonly name = environment.name;

  /** Scrolls smoothly to the element with the given ID */
  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
