import { Component } from '@angular/core';
import { environment } from '../../environments/environments';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  name = environment.name;
  profession = environment.profession;

}
