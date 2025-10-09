import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sozial-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sozial-links.component.html',
  styleUrl: './sozial-links.component.scss'
})
export class SozialLinksComponent {
  icons = [
    'assets/icons/gitHub.svg',
    'assets/icons/linkedIn.svg',
    'assets/icons/mail.svg'
  ];
}
