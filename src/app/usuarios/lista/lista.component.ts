import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { mostrarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('usuarios').subscribe(({users}) => {
     console.log(this.usuarios = users)
    })

    this.store.dispatch(mostrarUsuarios())
    // this.usuarioService.getUsuarios()
    // .subscribe(usuarios=>{
    //   console.log(usuarios)
    // })
  }

}
