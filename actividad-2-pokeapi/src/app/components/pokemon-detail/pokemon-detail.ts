import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokemonService } from '../../services/pokemon';
import { PokemonDetail } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.scss'
})
export class PokemonDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);
  private cd = inject(ChangeDetectorRef); 
  pokemon: PokemonDetail | null = null;
  loading: boolean = true;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.pokemonService.getPokemon(id).subscribe({
        next: (data) => {
          this.pokemon = data;
          this.loading = false;
          this.cd.detectChanges(); 
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
          this.cd.detectChanges(); 
        }
      });
    }
  }
}