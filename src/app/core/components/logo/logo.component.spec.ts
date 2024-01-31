import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a  link', () => {
   const linkDebugElement = fixture.debugElement.query(By.css('.container__logo'));
   expect(linkDebugElement).toBeTruthy();

 });
});