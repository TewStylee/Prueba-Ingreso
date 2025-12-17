import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty';
import { Character, Episode } from '../../interfaces/character'; 

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
  episodes: Episode[] = []; 

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.rickMortyService.getCharacter(Number(id)).subscribe({
        next: (data) => {
          this.character = data;
          this.loadEpisodes(data.episode); 
          this.cd.detectChanges();
        },
        error: (err) => console.error(err)
      });
    }
  }

  loadEpisodes(episodeUrls: string[]) {
    const ids = episodeUrls.map(url => url.split('/').pop() || '');

    if (ids.length > 0) {
      this.rickMortyService.getEpisodes(ids).subscribe({
        next: (data) => {
          this.episodes = Array.isArray(data) ? data : [data];
          this.cd.detectChanges();
        },
        error: (err) => console.error('Error cargando episodios:', err)
      });
    }
  }
}