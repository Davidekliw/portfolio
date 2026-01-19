import { Component } from '@angular/core';
import { SozialLinksComponent } from './sozial-links/sozial-links.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SozialLinksComponent, CommonModule, TranslateDirective, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  name = environment.name;
  fname = environment.fname;
  year = environment.year;

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
