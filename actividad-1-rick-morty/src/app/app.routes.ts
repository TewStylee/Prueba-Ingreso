import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list';
import { CharacterDetailComponent } from './components/character-detail/character-detail'; 

export const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: '**', redirectTo: '' }
];