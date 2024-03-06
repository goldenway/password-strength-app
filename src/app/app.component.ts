import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

const MIN_LENGTH = 8;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  passwordStrength: string = '';

  checkPasswordStrength(event: any): void {
    const password = (event.target as HTMLInputElement).value;

    if (!password || password.length === 0) {
      this.passwordStrength = 'empty';
      return;
    }
    
    if (password.length < MIN_LENGTH) {
      this.passwordStrength = 'short';
      return;
    }
    
    if (/^[a-zA-Z]+$|^\d+$|^[!@#$%^&*(),.?":{}|<>]+$/.test(password)) {
      this.passwordStrength = 'easy';
    } else if (/[a-zA-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      this.passwordStrength = 'strong';
    } else {
      this.passwordStrength = 'medium';
    }
  }
}
