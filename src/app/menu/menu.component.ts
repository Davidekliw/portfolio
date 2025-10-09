import { Component } from '@angular/core';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';
import { ChangeLanguageComponent } from "./change-language/change-language.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ChangeThemeComponent, ChangeLanguageComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
    fname = environment.fname;
}
