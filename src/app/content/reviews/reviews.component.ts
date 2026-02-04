import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Review {
  id: number;
  name: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})

/** 
 * Reviews section component.
 * Displays a small static carousel of reviews.
 */
export class ReviewsComponent {

  /** Current index of the displayed review. */
  current: number = 0;

  /** Hardcoded Review data used for rendering Carousel. */
  readonly reviews: Review[] = [
    {
      id: 0,
      name: 'Kristin Siegmund',
      text: 'Sehr freundliche, kompetente und zuverlässige Betreuung und Umsetzung. Stets gut erreichbar und immer an den Wünschen des Kunden orientiert.',
      image: 'assets/img/07.jpg'
    },
    {
      id: 1,
      name: 'Cornelia P.',
      text: 'Vielen Dank für die tolle Arbeit! Die Website sieht super aus und alles was ich wollte wurde im Detail umgesetzt. Die Zusammenarbeit war sehr angenehm und auch der nachträgliche Support ist total klasse. Klare Weiterempfehlung!',
      image: 'assets/icons/placeholder.png'
    },
    {
      id: 2,
      name: 'Nadja P.',
      text: 'Die Zusammenarbeit mit dir in der Weiterbildung bedeutet mir viel. Du bist hilfsbereit, erklärst geduldig und wir finden gemeinsam Lösungen. Das Lernen mit dir motiviert mich und macht auch schwierige Themen für mich leichter. Dafür danke ich dir :)',
      image: 'assets/icons/placeholder.png'
    }
  ];

  /** Function to navigate through reviews forward. */
  next(): void {
    this.current = (this.current + 1) % this.reviews.length;
  }

  /** Function to navigate through reviews backward. */
  prev(): void {
    this.current = (this.current - 1 + this.reviews.length) % this.reviews.length;
  }
}
