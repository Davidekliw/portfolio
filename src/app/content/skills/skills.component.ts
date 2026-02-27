import { Component, inject } from '@angular/core';
import { SkillIconBoxComponent } from "./skill-icon-box/skill-icon-box.component";
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { ScrollService } from "../../service/scroll.service";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillIconBoxComponent, CommonModule, TranslateDirective, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

/**
 * Skills section component.
 * Displays a list of skills with icons.
 */
export class SkillsComponent {
  /* Inject the ScrollService to enable scrolling functionality */
  scroll = inject(ScrollService);
}
