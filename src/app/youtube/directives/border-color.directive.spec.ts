import { BorderColorDirective } from './border-color.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div appBorderColor [appBorderColor]="date"></div>`
})
class TestComponent {
  date: string;
}

describe('BorderColorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directive: BorderColorDirective;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderColorDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(BorderColorDirective));
    directive = debugElement.injector.get(BorderColorDirective);
  });

  it('should set border color to red if date is older than 183 days', () => {
    component.date = '2022-05-01'; 
    fixture.detectChanges();
    const borderColor = debugElement.nativeElement.style.borderBottomColor;
    expect(borderColor).toBe('red');
  });

  it('should set border color to yellow if date is between 31 and 183 days', () => {
    component.date = '2023-07-01'; 
    fixture.detectChanges();
    const borderColor = debugElement.nativeElement.style.borderBottomColor;
    expect(borderColor).toBe('yellow');
  });

  it('should set border color to green if date is between 7 and 31 days', () => {
    component.date = '2023-11-01'; 
    fixture.detectChanges();
    const borderColor = debugElement.nativeElement.style.borderBottomColor;
    expect(borderColor).toBe('green');
  });

  it('should set border color to #2f80ed if date is within 7 days', () => {
    component.date = '2023-11-20'; 
    fixture.detectChanges();
    const borderColor = debugElement.nativeElement.style.borderBottomColor;
    expect(borderColor).toBe('#2f80ed');
  });
});
