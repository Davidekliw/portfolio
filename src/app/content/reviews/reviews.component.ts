import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  current: number = 0;


  reviews = [
    {
      id: 0,
      name: 'Kristin Siegmund',
      text: 'Sehr freundliche, kompetente und zuverlässige Betreuung und Umsetzung. Stets gut erreichbar und immer an den Wünschen des Kunden orientiert.',
      image: 'assets/img/07.JPG'
    },
    {
      id: 1,
      name: 'Cornelia P.',
      text: 'Vielen Dank für die tolle Arbeit! Die Website sieht super aus und alles was ich wollte wurde im Detail umgesetzt. Die Zusammenarbeit war sehr angenehm und auch der nachträgliche Support ist total klasse. Klare Weiterempfehlung!',
      image: 'assets/icons/placeholder.png'
    },
    {
      id: 2,
      name: 'Nadjy P.',
      text: 'Die Zusammenarbeit mit dir in der Weiterbildung bedeutet mir viel. Du bist hilfsbereit, erklärst geduldig und wir finden gemeinsam Lösungen. Das Lernen mit dir motiviert mich und macht auch schwierige Themen für mich leichter. Dafür danke ich dir :)',
      image: 'assets/icons/placeholder.png'
    }
  ];


  next() {
    this.current = (this.current + 1) % this.reviews.length;
  }

  prev() {
    this.current = (this.current - 1 + this.reviews.length) % this.reviews.length;
  }
}
