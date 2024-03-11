import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

const MIN_LENGTH = 8;

@Injectable({
  providedIn: 'root'
})
export class StrengthService {
  passwordChanged: Subject<string> = new Subject<string>;

  checkPasswordStrength(password: string) {
    if (!password || password.length === 0) {
      this.passwordChanged.next('empty');
      return;
    }
    
    if (password.length < MIN_LENGTH) {
      this.passwordChanged.next('short');
      return;
    }
    
    if (/^[a-zA-Z]+$|^\d+$|^[!@#$%^&*(),.?":{}|<>]+$/.test(password)) {
      this.passwordChanged.next('easy');
    } else if (/[a-zA-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      this.passwordChanged.next('strong');
    } else {
      this.passwordChanged.next('medium');
    }
  }
}
