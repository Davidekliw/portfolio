import { Component, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { TranslateDirective } from '@ngx-translate/core';
import { ScrollService } from '../../service/scroll.service';

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

  scroll = inject(ScrollService);
  /** Display name loaded from environment configuration */
  readonly name = environment.name;
}
