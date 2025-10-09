import { Component } from '@angular/core';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ChangeThemeComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
    name = environment.name;
}
