import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty';
import { Character } from '../../interfaces/character';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.scss'
})
export class CharacterListComponent implements OnInit {
  private rickMortyService = inject(RickMortyService);
  private cd = inject(ChangeDetectorRef);

  characters: Character[] = [];
  currentPage: number = 1;  
  currentSearch: string = '';
  currentStatus: string = '';
  currentSpecies: string = '';

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.rickMortyService.getCharacters(this.currentPage, this.currentSearch, this.currentStatus, this.currentSpecies)
      .subscribe({
        next: (data) => {
          this.characters = data.results;
          this.cd.detectChanges();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        error: (error) => {
          console.error('Sin resultados:', error);
          this.characters = []; 
          this.cd.detectChanges();
        }
      });
  }

  filter() {
    this.currentPage = 1; 
    this.loadCharacters();
  }

  search(searchTerm: string) {
    this.currentSearch = searchTerm; 
    this.currentPage = 1;
    this.loadCharacters();
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