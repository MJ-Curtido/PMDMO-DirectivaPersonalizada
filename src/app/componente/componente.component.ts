import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {
  color: String;
  texto: String;
  miObjeto = null;

  constructor() {
    this.color = "";
    this.texto = "";
  }

  ngOnInit(): void {
  }

  cambiarEstilo() {
    
  }
}
