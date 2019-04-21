import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppData {
  constructor(private http: HttpClient) {}

  getMe() {
    return this.http.get('/api/me');
  }
}
