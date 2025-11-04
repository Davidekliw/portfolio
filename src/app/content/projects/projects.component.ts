import { Component } from '@angular/core';
import { ApplicationComponent } from "./application/application.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ApplicationComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
