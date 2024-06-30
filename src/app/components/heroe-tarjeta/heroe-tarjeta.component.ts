// Se usa la librería Input a fin de poder pasar datos
// entre un componente padre y un componente hijo

// Se usa la librería Output y EventEmitter
// a fin de emitir un evento de salida
// del componente hijo hacia el padre
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Interface con la estructura del Heroe
import { Heroe } from '../../services/heroes.service';
// Libreria para usar el ruteo
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  // Con el decorador @Input indicamos que el valor
  // para el atributo heroe puede venir de afuera.
  // De igual modo también puedo inicializarlo en el constructor
  @Input() heroe: Heroe;
  @Input() index: number;

  // Con el decorador @Output indicamos un evento de salida,
  // en este caso debemos especificar el tipo de dato que se va a emitir.
  // Para el caso se va a emitir el index
  @Output() heroeSelected: EventEmitter<number>;

  constructor(private _router: Router) {
    // Inicializamos el evento de salida creado
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  viewHeroe() {
    console.log(this.index);
    // Emitimos la variable index
    this.heroeSelected.emit(this.index);
  }

}
