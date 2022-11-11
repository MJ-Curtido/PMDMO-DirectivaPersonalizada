import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {
  txt:String;

  constructor(private element: ElementRef) {
    this.txt = "";
  }

  @HostListener('mouseover') onMouseOver() {
      this.pertenece = true;
      
      this.txt = this.element.nativeElement.innerHTML;
      this.element.nativeElement.innerHTML = this.element.nativeElement.innerHTML.toUpperCase();
  }
  @HostListener('mouseout') onMouseOut() {
    this.pertenece = false;
    this.element.nativeElement.innerHTML = this.txt;
  }

  @HostBinding('class.aMayus') pertenece:Boolean = false;
}
