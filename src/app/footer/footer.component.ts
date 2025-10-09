import { Component } from '@angular/core';
import { SozialLinksComponent } from './sozial-links/sozial-links.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SozialLinksComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  name = environment.name;
  fname = environment.fname;
}
