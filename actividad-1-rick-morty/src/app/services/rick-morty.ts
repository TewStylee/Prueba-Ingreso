import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse, Character, Episode } from '../interfaces/character';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/character`; 

  getCharacters(page: number = 1, name: string = '', status: string = '', species: string = ''): Observable<CharacterResponse> {
    let params = `?page=${page}&name=${name}`;
    if (status) params += `&status=${status}`;
    if (species) params += `&species=${species}`;
    
    return this.http.get<CharacterResponse>(`${this.apiUrl}/${params}`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

  getEpisodes(ids: string[]): Observable<Episode[] | Episode> {
    const episodeUrl = this.apiUrl.replace('/character', '/episode');
    return this.http.get<Episode[] | Episode>(`${episodeUrl}/${ids.join(',')}`);
  }
}