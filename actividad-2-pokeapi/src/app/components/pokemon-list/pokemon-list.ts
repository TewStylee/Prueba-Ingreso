import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; // <--- 1. Importar ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../../services/pokemon';
import { PokemonBasicInfo } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonListComponent implements OnInit {
  private pokemonService = inject(PokemonService);
  private cd = inject(ChangeDetectorRef); // <--- 2. Inyectar el "electroshock"

  pokemonList: PokemonBasicInfo[] = [];
  offset: number = 0;
  limit: number = 20;

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons(this.offset, this.limit).subscribe({
      next: (data) => {
        this.pokemonList = data.results;
        this.cd.detectChanges(); // <--- 3. ¡DESPIERTA ANGULAR!
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (err) => console.error(err)
    });
  }

  getPokemonImage(url: string): string {
    const id = url.split('/').filter(part => part).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  nextPage() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  prevPage() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }
}