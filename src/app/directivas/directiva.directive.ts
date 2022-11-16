import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {
  @Input('appDirectiva') config = {
    color: 'color1',
    texto: 'Mi GitHub :)'
  }

  txt:String;

  constructor(private element: ElementRef) {
    this.txt = "";
  }

  @HostListener('mouseover') onMouseOver() {
      this.pertenece = true;
      
      this.txt = this.element.nativeElement.innerHTML;
      this.element.nativeElement.className = this.config.color;
      this.element.nativeElement.innerHTML = this.config.texto.toUpperCase();
  }
  @HostListener('mouseout') onMouseOut() {
    this.pertenece = false;

    this.element.nativeElement.innerHTML = this.txt;

    this.element.nativeElement.className = "";
  }

  @HostBinding('class.general') pertenece:Boolean = false;
}
