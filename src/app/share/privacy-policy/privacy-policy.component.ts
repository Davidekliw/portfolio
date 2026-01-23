import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateDirective } from "@ngx-translate/core";

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

  private readonly location = inject(Location);

  /** Navigates back to the previous page in the browser history. */
  goBack(): void {
    this.location.back();
  }
}
