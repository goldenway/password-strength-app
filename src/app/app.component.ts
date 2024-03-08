import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IndicatorComponent } from './indicator/indicator.component';
import { StrengthService } from './shared/strength.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IndicatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private strengthService: StrengthService
  ) {}

  checkPasswordStrength(event: any): void {
    const password = (event.target as HTMLInputElement).value;

    this.strengthService.calculatePasswordStrength(password);
  }
}
