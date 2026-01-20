
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslateDirective, TranslatePipe } from "@ngx-translate/core";
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateDirective, TranslatePipe, MatFormFieldModule, MatIconModule, MatInputModule, MatCheckboxModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {

  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[\p{L} '’-]+$/u)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
    agree: [false, Validators.requiredTrue]
  });
  activeField: string | null = null;

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: send
    console.log(this.form.value);
  }

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

  setActive(fieldName: string) {
    this.activeField = fieldName;
  }

  clearActive(fieldName?: string) {
    if (!fieldName || this.activeField === fieldName) {
      this.activeField = null;
    }
  }

  fieldActiveInvalid(fieldName: string) {
    const c = this.form.get(fieldName);
    return !!(c && c.invalid && this.activeField === fieldName);
  }

  showError(c: AbstractControl | null) {
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  showSuccess(c: AbstractControl | null) {
    return !!c && c.valid && (c.dirty || c.touched);
  }
}
