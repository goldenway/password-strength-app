import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';

import { StrengthService } from '../shared/strength.service';

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
    private strengthService: StrengthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.strengthService.passwordChanged.subscribe(strength => {
      this.passwordStrength = strength;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
