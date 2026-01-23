import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialIcon {
  imgSrc: string;
  link: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-sozial-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sozial-links.component.html',
  styleUrl: './sozial-links.component.scss'
})

/**
 * Social links component.
 * Provides external links (GitHub, LinkedIn, email) with matching icons.
 */
export class SozialLinksComponent {

  /** Social icons and their target links used in the template. */
  readonly icons: SocialIcon[] = [
    { imgSrc: 'assets/icons/gitHub.svg', link: 'https://github.com/deinname', ariaLabel: 'Open GitHub profile' },
    { imgSrc: 'assets/icons/linkedIn.svg', link: 'https://linkedin.com/in/deinname', ariaLabel: 'Open LinkedIn profile' },
    { imgSrc: 'assets/icons/mail.svg', link: 'mailto:david@example.com', ariaLabel: 'Send me an email' }
  ];

}
