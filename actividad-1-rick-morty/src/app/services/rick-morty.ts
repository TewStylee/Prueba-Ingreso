import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse, Character } from '../interfaces/character';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/character`; 

  getCharacters(page: number = 1): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.apiUrl}/?page=${page}`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}