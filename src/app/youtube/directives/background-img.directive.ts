import {
  Directive, ElementRef, Input, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBackgroundImg]',
})
export class BackgroundImgDirective {
  @Input('appBackgroundImg') set condition(valInput: string) {
    this.setBackgroundImg(valInput);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private setBackgroundImg(url: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-image',
      `url(${url})`,
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-repeat',
      'no-repeat',
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-size',
      'cover',
    );
  }
}
