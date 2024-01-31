import { Component, OnInit } from '@angular/core';
import LoginService from '../../../auth/services/login.service';
import { Observable } from 'rxjs';
import { SearchSignalService } from '../../services/search-signal.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent implements OnInit {
  UserName = 'Гость';

  UserNameFromLocalStorage = localStorage.getItem('fakeName');

  loggedIn$: Observable<boolean>;

  userImg = '/assets/svg/user.svg';

  // userImg = '/flyether-ANGULAR2023Q4/assets/svg/user.svg';
  constructor(
    private loginService: LoginService,
    private signalService: SearchSignalService,
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.loginService.getLoggedInStatus();
    if (this.UserNameFromLocalStorage) {
      this.UserName = this.UserNameFromLocalStorage;
    }
  }

  handleButtonClick() {
    this.signalService.addSearchValue('значение не влияющее на поиск');
    this.loginService.logout();
  }
}
