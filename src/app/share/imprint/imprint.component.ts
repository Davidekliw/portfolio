import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-impressum',
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

  private readonly location = inject(Location);

  /** Navigates back to the previous page in the browser history. */
  goBack(): void {
    this.location.back();
  }
}
