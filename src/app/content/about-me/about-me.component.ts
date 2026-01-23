import { Component } from '@angular/core';
import { TranslateDirective } from '@ngx-translate/core';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

/**
 * About-me section component.
 * Displays the personal introduction text.
 */
export class AboutMeComponent {

}
