import { Component, inject } from '@angular/core';
import { TranslateDirective } from "@ngx-translate/core";
import { Router } from '@angular/router';
import { ScrollService } from '../../service/scroll.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateDirective],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})

/**
 * Standalone page component for the imprint.
 * Provides a simple "go back" navigation action.
 */
export class ImprintComponent {

  private router = inject(Router);

  /* Scroll to the top of the page when the component is initialized */
  constructor(private scroll: ScrollService) {
    this.scroll.top(true);
  }

  /** Navigates back to the previous page in the browser history. */
  goBack(): void {
    this.router.navigate(['/'], { fragment: 'start' });
  }
}
