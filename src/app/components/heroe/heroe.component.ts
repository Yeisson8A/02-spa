import { Component } from '@angular/core';

// Para obtener parametro pasado en la ruta
import { ActivatedRoute } from '@angular/router';

// Interface con la estructura de Heroe
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe: Heroe;

  constructor(
    private _activatedRoute: ActivatedRoute, // Variable para parametros pasados en la ruta
    private _heroesService: HeroesService // Variable para usar el servicio creado
  ) {
    // Usamos un observador para obtener los parametros,
    // suscribiendonos al objeto creado ActivatedRoute
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

}
