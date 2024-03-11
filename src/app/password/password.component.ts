import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { IndicatorComponent } from '../indicator/indicator.component';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IndicatorComponent
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent implements OnInit, OnDestroy {
  passwordForm: FormGroup;
  subscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private passwordService: PasswordService
  ) {}

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: ['', Validators.required]
    });

    this.subscription = this.passwordForm.get('password')?.valueChanges.subscribe(value => {
      this.passwordService.checkPasswordStrength(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
