import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public nombreCompleto: String = '';

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('usuario').subscribe((usuario) => {
      this.nombreCompleto = `Bienvenido ${usuario.user.nombre}!`;
      console.log('usuario', usuario);
    });
  }
}
