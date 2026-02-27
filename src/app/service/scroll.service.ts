import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private router = inject(Router);

  /* Scroll to the top of the page, optionally with smooth behavior */
  top(smooth = false): void {
    if (smooth) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  }

  /* Navigate to the home page and scroll to the section with the given id */
  goTo(id: string) {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scroll(id);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scroll(id));
      });
    }
  }

  /* Smoothly scroll to the section with the given id */
  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}