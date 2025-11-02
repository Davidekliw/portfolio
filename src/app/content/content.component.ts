import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ReviewsComponent } from "./reviews/reviews.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AboutMeComponent, AboveTheFoldComponent, ProjectsComponent, SkillsComponent, ReviewsComponent, ContactFormComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
