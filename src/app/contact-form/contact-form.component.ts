import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  form = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
      subject: [''],
      agree: [false, Validators.requiredTrue]
  });

  showAgreeError = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // Markiere Controls für visuelles Feedback
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      // Nur die Anzeige für die Checkbox-Fehlermeldung setzen
      this.showAgreeError = this.form.controls.agree.invalid;
      return;
    }

    // Formular ist gültig -> Aktion ausführen
    this.showAgreeError = false;
    // ... senden / API call ...
  }
}
