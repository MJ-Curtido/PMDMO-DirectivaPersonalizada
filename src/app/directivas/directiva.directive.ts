import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {
  constructor(private element: ElementRef) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.pertenece = true;
  }
  @HostListener('mouseout') onMouseOut() {
    this.pertenece = false;
  }

  @HostBinding('class.aMayus') pertenece:Boolean = false;
}
