import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {
  @Input('appDirectiva') config = {
    color: '',
    texto: ''
  }

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
