import { TestBed } from '@angular/core/testing';

import  LoginService  from './login.service';
import { provideMockStore } from '@ngrx/store/testing';
import { mockAppState } from '../../youtube/components/search-item/mockAppState';

describe('LoginService', () => {
   let service: LoginService;

   beforeEach(() => {
       TestBed.configureTestingModule({
           providers: [ LoginService, provideMockStore({ initialState: { VideoOOO: mockAppState } }) ]
       });
       service = TestBed.inject(LoginService);
   });
  
   it('should exist ', () => {
       expect(service).toBeDefined();
   });

   it('should set loggedIn$ to true and store token and name in localStorage on login', () => {
      const fakeData = { email: 'test@example.com', password: 'password' };
      service.login(fakeData);
      expect(service.getLoggedInStatus()).toBeTruthy(); 
      expect(localStorage.getItem('fakeToken')).toBeTruthy(); 
      expect(localStorage.getItem('fakeName')).toBe(fakeData.email);
    });

    it('should logout successfully', () => {
      service.logout();
      service.getLoggedInStatus().subscribe((loggedIn) => {
          expect(loggedIn).toBe(false);
      });
    });

    it('should remove token and name from localStorage on logout', () => {
       service.logout();
       expect(localStorage.getItem('fakeToken')).toBeNull(); 
       expect(localStorage.getItem('fakeName')).toBeNull(); 
    });

    it('should have the correct initial state', () => {
      localStorage.clear();
      service.getLoggedInStatus().subscribe((loggedIn) => {
          expect(loggedIn).toBe(false);
      });
  });

});