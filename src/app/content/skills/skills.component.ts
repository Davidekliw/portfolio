import { Component } from '@angular/core';
import { SkillIconBoxComponent } from "./skill-icon-box/skill-icon-box.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillIconBoxComponent, CommonModule, TranslateDirective, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
