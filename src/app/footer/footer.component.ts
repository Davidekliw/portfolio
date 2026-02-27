import { Component, inject } from '@angular/core';
import { SozialLinksComponent } from './sozial-links/sozial-links.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';
import { TranslateDirective } from '@ngx-translate/core';
import { Router, RouterLink } from "@angular/router";
import { ScrollService } from '../service/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SozialLinksComponent, CommonModule, TranslateDirective, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  /* some variables from Environment configuration */
  readonly name = environment.name;
  readonly fname = environment.fname;
  readonly year = environment.year;

  private router = inject(Router);
  scroll = inject(ScrollService);

  /* Navigate to the imprint page */
  openImprint() {
    this.router.navigateByUrl('/imprint');
  }
}
