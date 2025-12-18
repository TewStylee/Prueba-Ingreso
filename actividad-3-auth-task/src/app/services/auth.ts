import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router'; 
import { of, throwError } from 'rxjs'; 
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'https://reqres.in/api';
  private tokenKey = 'auth_token';

  login(email: string, password: string) {
    if (email === 'jhonny@gmail.com' && password === 'jhonny123') {
      
      const fakeResponse = { token: 'AbC1dE2fG3hI4jKlM' };
      
      return of(fakeResponse).pipe(
        delay(1000), 
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token);
        })
      );

    } else {
      return throwError(() => ({ error: 'Credenciales inválidas' })).pipe(
        delay(500)
      );
    }
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}