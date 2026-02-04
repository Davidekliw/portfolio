import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslateDirective, TranslatePipe } from "@ngx-translate/core";
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

/**
 * Contact form component (Reactive Forms + Angular Material).
 * Validates user input and provides helper functions for showing success/error states in the UI.
 */
export class ContactFormComponent {

  constructor(private http: HttpClient) { }

  private readonly fb = inject(FormBuilder);

  readonly formStart = Date.now();

  /** Reactive contact form definition with validation rules. */
  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[\p{L} '’-]+$/u)]],
    thirdName: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
    agree: [false, Validators.requiredTrue],
    formTime: [this.formStart]
  });

  /** Tracks which field is currently focused/active (used for custom UI highlighting). */
  activeField: string | null = null;

  /** Indicates whether the form was successfully submitted (for UI feedback). */
  success: boolean = false;

  sendForm(data: any) {
    return this.http.post('assets/scripts/sendMail.php', data);
  }

  /**
 * Submits the form if valid, otherwise marks all fields as touched.
 * NOTE: Sending is not implemented yet (placeholder).
 */
  onSubmit(form: any): void {
    console.log(this.fb.group);
    console.log(this.form?.get('thirdName')?.errors);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.success = true;
    this.sendForm(form.value).subscribe({
      next: () => this.success = true,
      error: () => this.success = false
    });
    setTimeout(() => {
      this.success = false;
      this.form.reset();
    }, 4000);
    console.log(this.form.value);
  }

  /*shortcut accessors for form controls*/
  get name() {
    return this.form.get('name');
  }

  get thirdName() {
    return this.form.get('thirdName');
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  get agree() {
    return this.form.get('agree');
  }

  /**
   * Marks a field as active (e.g. on focus) to control UI feedback.
   * @param fieldName Form control name
   */
  setActive(fieldName: string): void {
    this.activeField = fieldName;
  }

  /**
  * Clears the active field selection (e.g. on blur).
  * If a fieldName is provided, it only clears when it matches the current active field.
  * @param fieldName Optional form control name
  */
  clearActive(fieldName?: string): void {
    if (!fieldName || this.activeField === fieldName) {
      this.activeField = null;
    }
  }

  /**
   * Returns true if the field is invalid and currently active (focused).
   * Used to show "live" error states only on the active input.
   * @param fieldName Form control name
   */
  fieldActiveInvalid(fieldName: string): boolean {
    const c = this.form.get(fieldName);
    return !!(c && c.invalid && this.activeField === fieldName);
  }

  /**
   * Returns true if a control should show an error state.
   * @param c Form control instance
   */
  showError(c: AbstractControl | null): boolean {
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  /**
   * Returns true if a control should show a success state.
   * @param c Form control instance
   */
  showSuccess(c: AbstractControl | null): boolean {
    return !!c && c.valid && (c.dirty || c.touched);
  }


}
