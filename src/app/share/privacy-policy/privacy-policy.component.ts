import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateDirective],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  private location = inject(Location);


  goBack() {
    this.location.back();
  }
}
