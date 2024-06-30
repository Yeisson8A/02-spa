import { Component, OnInit } from '@angular/core';

// Objetos del servicio
import { HeroesService, Heroe } from '../../services/heroes.service';

// Objetos del router
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];

  constructor(
    private _heroesService: HeroesService, // Variable para usar el servicio creado
    private _router: Router // Variable para usar el router creado
  ) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  viewHeroe(index: number) {
    // Usar el router para navegar a un componente especifico,
    // desde una función
    this._router.navigate(['/heroe', index]);
  }
}
