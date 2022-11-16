import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {
  color: String;
  texto: String;
  miObjeto = null;

  //@ViewChild('texto') inputTexto!: ElementRef;

  constructor() {
    this.color = "";
    this.texto = "";
  }

  ngOnInit(): void {
  }

  cambiarEstilo() {

  }
}
