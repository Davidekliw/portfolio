import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [TranslateDirective],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  private location = inject(Location);


  goBack() {
    this.location.back();
  }
}
