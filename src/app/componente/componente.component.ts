import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {
  color: string;
  texto: string;
  miObjeto = {
    color: 'mi github :)',
    texto: 'color1'
  }

  @ViewChild('inputTexto') inputTexto!: ElementRef;
  @ViewChild('selectColores') selectColores!: ElementRef;

  constructor() {
    this.color = 'mi github :)';
    this.texto = 'color1';
  }

  ngOnInit(): void {
  }

  cambiarEstilo() {
    this.color = this.selectColores.nativeElement.selectedOptions[0].value;
    this.texto = this.inputTexto.nativeElement.value;

    this.miObjeto = {
      color: this.color,
      texto: this.texto
    }
  }
}
