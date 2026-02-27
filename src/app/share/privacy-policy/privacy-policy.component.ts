import { Component, inject } from '@angular/core';
import { TranslateDirective } from "@ngx-translate/core";
import { Router } from '@angular/router';
import { ScrollService } from '../../service/scroll.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateDirective],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})

/**
 * Standalone page component for the privacy policy.
 * Provides a simple "go back" navigation action.
 */
export class PrivacyPolicyComponent {

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
