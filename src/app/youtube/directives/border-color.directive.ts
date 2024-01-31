import {
  Directive, ElementRef, Input, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective {
  @Input('appBorderColor') set condition(valInput: string) {
    const createdDate = new Date(valInput);
    const currentDate = new Date();
    const diffInDays = Math.floor(
      (currentDate.getTime() - createdDate.getTime()) / (1000 * 3600 * 24),
      
    );

    let color: string;

    if (diffInDays > 183) {
      color = 'red';
    } else if (diffInDays < 183 && diffInDays > 31) {
      color = 'yellow';
    } else if (diffInDays < 31 && diffInDays > 7) {
      color = 'green';
    } else {
      color = '#2f80ed';
    }

    this.setBorderColor(color);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private setBorderColor(color: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border-bottom',
      `5px solid ${color}`,
    );
  }
}
