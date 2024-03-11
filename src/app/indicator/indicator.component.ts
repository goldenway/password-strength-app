import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';

import { PasswordService } from '../password/password.service';

@Component({
  selector: 'app-indicator',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './indicator.component.html',
  styleUrl: './indicator.component.scss'
})
export class IndicatorComponent implements OnInit, OnDestroy {
  passwordStrength: string = '';
  subscription: Subscription

  constructor(
    private passwordService: PasswordService
  ) {}

  ngOnInit(): void {
    this.subscription = this.passwordService.passwordChanged.subscribe(strength => {
      this.passwordStrength = strength;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
