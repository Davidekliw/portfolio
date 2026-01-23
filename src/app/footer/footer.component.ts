import { Component } from '@angular/core';
import { SozialLinksComponent } from './sozial-links/sozial-links.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';
import { TranslateDirective } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

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

  /* Smoothly scroll to the section with the given id */
  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
