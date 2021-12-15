import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';




@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private router: Router, private store: Store<AppState>) { }
  canActivate() {
    let isLogged: boolean;

    this.store.select('usuario').subscribe(res => {
      if (res.user) {
        isLogged = true
      }
      else {
        isLogged = false
        this.router.navigate(['/login'])
      }
    })
    return isLogged
  };
}



