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
  currentPage: number = 1; 

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.rickMortyService.getCharacters(this.currentPage).subscribe({
      next: (data) => {
        this.characters = data.results;
        this.cd.detectChanges(); 
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (error) => console.error('Error:', error)
    });
  }

  nextPage() {
    this.currentPage++;
    this.loadCharacters();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
}