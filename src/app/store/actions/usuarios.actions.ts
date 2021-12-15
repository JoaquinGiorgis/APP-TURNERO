import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const mostrarUsuarios = createAction('[Usuarios] Mostrar Usuarios');

export const mostrarUsuariosSuccess = createAction(
    '[Usuarios] Mostrar Usuarios Success',
    props<{usuarios: Usuario[]}>()
    );


export const mostrarUsuariosError = createAction(
    '[Usuarios] Mostrar Usuarios Error',
    props<{payload: any}>()
    );
    