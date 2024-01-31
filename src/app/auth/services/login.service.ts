import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { SearchSignalService } from '../../core/services/search-signal.service';
import { BehaviorSubject } from 'rxjs';
import { generateToken } from '../../core/services/generate-token';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
class LoginService {
  private loggedIn$: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private store: Store,
    private signal: SearchSignalService,
  ) {
    const initialLoggedInValue = !!localStorage.getItem('fakeToken');
    this.loggedIn$ = new BehaviorSubject<boolean>(initialLoggedInValue);
  }

  login(data: Login) {
    if (data.email && data.password) {
      this.loggedIn$.next(true);

      const token = generateToken();
      localStorage.setItem('fakeToken', token);
      localStorage.setItem('fakeName', data.email);
      this.router.navigate(['']);
      this.signal.addSearchValue('');
      this.signal.addSortSignalValue('');
    }
    
  }

  logout() {
    this.loggedIn$.next(false);
    localStorage.removeItem('fakeToken');
    localStorage.removeItem('fakeName');
    this.router.navigate(['login']);
  }

  getLoggedInStatus() {
    return this.loggedIn$.asObservable();
  }
}
export default LoginService;
