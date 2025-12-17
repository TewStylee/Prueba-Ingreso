import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.scss'
})
export class CharacterListComponent implements OnInit {
  private rickMortyService = inject(RickMortyService);
  private cd = inject(ChangeDetectorRef); 

  characters: Character[] = [];

  ngOnInit() {
    this.rickMortyService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
        this.cd.detectChanges(); 
        console.log('Lista Actualizada', this.characters);
      },
      error: (error) => console.error(error)
    });
  }
}