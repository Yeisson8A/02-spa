import { Component, OnInit } from '@angular/core';

// Para obtener parametro pasado en la ruta
import { ActivatedRoute, Router } from '@angular/router';
// Para usar el servicio creado
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html',
  styleUrls: ['./heroes-filter.component.css']
})
export class HeroesFilterComponent implements OnInit {
  heroes: Heroe[];

  constructor(
    private _activatedRoute: ActivatedRoute, // Variable para obtener parámetros pasados en la ruta
    private _heroesService: HeroesService, // Variable para acceder al servicio creado
    private _router: Router // Variable para el ruteo
  ) { }

  ngOnInit() {
    // Usamos un observador para obtener los parametros,
    // suscribiendonos al objeto creado ActivatedRoute
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.searchHeroes(params['text']);
      console.log(this.heroes);
    });
  }

  viewHeroe(index: number) {
    // Usar el router para navegar a un componente especifico,
    // desde una función
    this._router.navigate(['/heroe', index]);
  }

}
