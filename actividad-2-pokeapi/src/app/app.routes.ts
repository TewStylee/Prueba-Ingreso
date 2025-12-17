import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list';

export const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: '**', redirectTo: '' }
];