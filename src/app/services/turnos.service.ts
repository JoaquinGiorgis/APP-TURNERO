import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Turno } from '../models/turno.model';

export interface Turnos {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class TurnosService {
  constructor(private http: HttpClient) {}

  postTurnos(turno: Turno){
    return this.http
    .post(`${environment.apiUrl}/turno`,turno)
    .pipe(map((data) => data['respuesta']));
  }

  getTurnos() {
    return this.http
      .get(`${environment.apiUrl}/turnos`)
      .pipe(map((data) => data['respuesta']));
  }
}
