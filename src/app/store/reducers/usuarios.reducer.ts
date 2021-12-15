import { createReducer, on } from '@ngrx/store';
import { mostrarUsuariosError, mostrarUsuarios, mostrarUsuariosSuccess } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
    users  : Usuario[],
    loaded : boolean,
    loading: boolean,
    error  : any
}

export const usuariosInitialState: UsuariosState = {
    users  : [],
    loaded : false,
    loading: false,
    error  : null
}

const _usuariosReducer = createReducer(usuariosInitialState,

    on( mostrarUsuarios, state => ({ ...state, loading: true })),
    
    
    on( mostrarUsuariosSuccess, (state, { usuarios }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: [ ...usuarios ] 
    })),

    on( mostrarUsuariosError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),




);

export function usuariosReducer(state, action) {
    return _usuariosReducer(state, action);
}