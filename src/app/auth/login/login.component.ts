import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from './login.model';
import { LoginService } from './login.service';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { usuarioLogeado } from 'src/app/store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: userModel = new userModel();
  error: boolean = false;

  constructor(
    private service: LoginService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  login() {
    this.service.login().subscribe((x: any) => {
      let validation = x.respuesta.find(
        (resp) =>
          resp.nombre == this.user.name.toLowerCase() &&
          resp.apellido == this.user.lastName.toLowerCase() &&
          resp.dni == this.user.dni
      );
      if (validation) {
        let user = {
          nombre: this.user.name,
          apellido: this.user.lastName,
          dni: this.user.dni,
        };
        this.store.dispatch(usuarioLogeado({ user }));
        this.router.navigate(['/turnero']);
      } else {
        this.error = true;
      }
    });
  }
}
