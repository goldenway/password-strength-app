import { Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class IndicatorComponent implements DoCheck {
  passwordStrength: string = '';

  constructor(
    private strengthService: StrengthService
  ) {}

  ngDoCheck(): void {
    this.passwordStrength = this.strengthService.getPasswordStrength();
  }
}
