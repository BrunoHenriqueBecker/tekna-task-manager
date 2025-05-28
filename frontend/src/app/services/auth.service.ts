import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000/auth';
  constructor(private http: HttpClient, private router: Router) {}
  login(data: any) { return this.http.post(`${this.api}/login`, data); }
  register(data: any) { return this.http.post(`${this.api}/register`, data); }
  logout() { localStorage.removeItem('token'); this.router.navigate(['/']); }
  saveToken(token: string) { localStorage.setItem('token', token); }
  getToken() { return localStorage.getItem('token'); }
}
