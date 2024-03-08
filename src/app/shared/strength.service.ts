import { Injectable } from '@angular/core';

const MIN_LENGTH = 8;

@Injectable({
  providedIn: 'root'
})
export class StrengthService {
  passwordStrength: string = '';

  calculatePasswordStrength(password: string) {
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

  getPasswordStrength():string {
    return this.passwordStrength;
  }
}
