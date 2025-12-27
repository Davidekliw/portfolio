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
      id: 1,
      name: 'John Doe',
      text: 'Great service and friendly staff. Highly recommend!',
      image: 'assets/icons/placeholder.png'
    },
    {
      id: 2,
      name: 'Martin Mustermann',
      text: 'Great service and friendly staff. Highly recommend!',
      image: 'assets/icons/placeholder.png'
    },
    {
      id: 1,
      name: 'John Doe',
      text: 'Great service and friendly staff. Highly recommend!',
      image: 'assets/icons/placeholder.png'
    },
    {
      id: 2,
      name: 'Martin Mustermann',
      text: 'Great service and friendly staff. Highly recommend!',
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
