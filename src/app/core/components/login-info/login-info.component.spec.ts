import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginInfoComponent } from './login-info.component';
import LoginService from '../../../auth/services/login.service';
import { SearchSignalService } from '../../services/search-signal.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomButtonStandaloneComponent } from '../../../shared/components/custom-button-standalone/custom-button-standalone.component';
import { of } from 'rxjs';

describe('LoginInfoComponent', () => {
  let component: LoginInfoComponent;
  let fixture: ComponentFixture<LoginInfoComponent>;
  let mockLoginService: Partial<LoginService>;
  let mockSignalService: Partial<SearchSignalService>;

  beforeEach(() => {
    mockLoginService = {
      login: jest.fn(),
      logout: jest.fn(),
      getLoggedInStatus: jest.fn(() => of(true)),
    };

    mockSignalService = {
      addSearchValue: jest.fn(),
      addSortSignalValue: jest.fn(),
    };

    TestBed.configureTestingModule({
      declarations: [LoginInfoComponent],
      imports: [RouterTestingModule, CustomButtonStandaloneComponent],
      providers: [
        { provide: LoginService, useValue: mockLoginService },
        { provide: SearchSignalService, useValue: mockSignalService },
      ],
    });

    fixture = TestBed.createComponent(LoginInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set initial values correctly', () => {
    expect(component.UserName).toBe('Гость');
    expect(component.userImg).toBe('/assets/svg/user.svg');
  });
  it('should handle button click correctly', () => {
    const spyAddSearchValue = jest.spyOn(mockSignalService, 'addSearchValue');
    const spyLogout = jest.spyOn(mockLoginService, 'logout');

    component.handleButtonClick();

    expect(spyAddSearchValue).toHaveBeenCalledWith(
      'значение не влияющее на поиск'
    );
    expect(spyLogout).toHaveBeenCalled();
  });
});
