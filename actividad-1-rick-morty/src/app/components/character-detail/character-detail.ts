import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss'
})
export class CharacterDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private rickMortyService = inject(RickMortyService);
  private cd = inject(ChangeDetectorRef); 

  character: Character | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.rickMortyService.getCharacter(Number(id)).subscribe({
        next: (data) => {
          this.character = data;
          console.log('Personaje cargado:', this.character);
          this.cd.detectChanges(); 
        },
        error: (err) => console.error(err)
      });
    }
  }

  getEpisodeNumber(url: string): string {
    return url.split('/').pop() || '';
  }
}