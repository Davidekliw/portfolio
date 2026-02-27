import { Component, inject } from '@angular/core';
import { TranslateDirective, TranslatePipe } from "@ngx-translate/core";
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from "@angular/router";
import { ScrollService } from '../service/scroll.service';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateDirective, TranslatePipe, MatFormFieldModule, MatIconModule, MatInputModule, MatCheckboxModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss', './contact-form-form.component.scss']
})

/**
 * Contact form component (Reactive Forms + Angular Material).
 * Validates user input and submits the payload to a PHP endpoint.
 * Includes hidden honeypot + form start timestamp for basic bot mitigation.
 */
export class ContactFormComponent {

  constructor(private http: HttpClient) { }

  private readonly fb = inject(FormBuilder);

  readonly formStart = Date.now();

  scroll = inject(ScrollService);

  /** Reactive contact form definition with validation rules. */
  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[\p{L} '’-]+$/u)]],
    thirdName: [''],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$")]],
    message: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
    agree: [false, Validators.requiredTrue],
    formTime: [this.formStart]
  });

  /** Tracks which field is currently focused/active (used for custom UI highlighting). */
  activeField: string | null = null;

  /** Controls the success message visibility in the UI. */
  success: boolean = false;

  /** Controls the success message visibility in the UI. */
  submitError: boolean = false;

  /** Sends the form payload to the backend mail script. */
  sendForm(data: any) {
    return this.http.post('assets/scripts/sendMail.php', data);
  }

  /**
   * Resets the form and success indicator after a delay.
   */
  resetFormAfterInterval(): void {
    setTimeout(() => {
      this.success = false;
      this.submitError = false;
      this.form.reset({
        agree: false,
        thirdName: '',
        formTime: Date.now(),
      });
      this.form.enable();
    }, 5000);
  }

  /**
   * Submits the form if valid; otherwise marks all fields as touched.
   * Shows a temporary success indicator on successful response.
   */
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.form.disable();
    this.sendForm(this.form.getRawValue()).subscribe({
      next: () => {
        this.success = true;
        this.resetFormAfterInterval();
      },
      error: () => {
        this.submitError = true;
        this.resetFormAfterInterval();
      }
    });
  }

  /** Shortcut accessors for form controls. */
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
