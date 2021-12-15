import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private api = 'https://data-turnero.herokuapp.com/api'
  constructor(private http: HttpClient ) { }

  getUsuarios() {
    return this.http.get(`${this.api}/usuarios`).pipe(
      map(data=>  data['respuesta'])
    )
  }
}
