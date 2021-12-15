import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

    export const usuarioLogeado = createAction('[Usuario] Mostrar Usuario', props<{user:Usuario}>());

    export const usuarioLogeadoSuccess = createAction(
        '[Usuario] Mostrar Usuario Success',
        props<{usuario: Usuario}>()
        );
    
    
    export const usuarioLogeadoError = createAction(
        '[Usuario] Mostrar Usuario Error',
        props<{payload: any}>()
        );