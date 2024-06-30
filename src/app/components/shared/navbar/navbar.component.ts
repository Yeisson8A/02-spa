import { Component, OnInit } from '@angular/core';
// Objetos del router
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  // Método para buscar heroe
  searchHeroe(texto: string) {
    // Navegamos al componente para mostrar los heroes filtrados,
    // pasandole como parámetro el texto
    this._router.navigate(['/heroes', texto]);
  }

}
