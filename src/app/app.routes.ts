import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesFilterComponent } from './components/heroes-filter/heroes-filter.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroes/:text', component: HeroesFilterComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// Para usar la forma vieja de ruteo .../#/home
// lo hacemos así:
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true })
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
