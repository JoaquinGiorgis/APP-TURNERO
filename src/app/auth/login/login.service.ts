import { Injectable } from '@angular/core';
import { userModel } from './login.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  login(): any {
    return this.http.get(`${environment.apiUrl}/usuarios`)
  }
}
