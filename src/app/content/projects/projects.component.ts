import { Component } from '@angular/core';
import { ApplicationComponent } from "./application/application.component";
import { TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ApplicationComponent, TranslateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
