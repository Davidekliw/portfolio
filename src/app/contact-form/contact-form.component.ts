import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-zÄÖÜäöüß' \-]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required,, Validators.minLength(2), Validators.maxLength(200)]],
    agree: [false, Validators.requiredTrue]
  });

  // optional: separate flag for agree (keeps existing behavior if template uses it)
  showAgreeError = false;

  constructor(private fb: FormBuilder) {}

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get subject() {
    return this.form.get('subject');
  }

  get agree() {
    return this.form.get('agree');
  }

  // Helfer: prüft, ob ein Feld touched/dirty ist und Fehler hat
  fieldInvalid(fieldName: string) {
    const c = this.form.get(fieldName);
    return !!(c && (c.touched || c.dirty) && c.invalid);
  }

  onSubmit() {
    // Markiere Controls für visuelles Feedback
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      // Checkbox-spezifische Anzeige weiterführen (optional)
      this.showAgreeError = !!this.agree?.invalid;
      return;
    }

    // Formular ist gültig -> Aktion ausführen
    this.showAgreeError = false;
    // ... senden / API call ...
  }
}
