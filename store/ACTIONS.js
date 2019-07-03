import CONSTANTES from './CONSTANTES';
export const actionRegistro = values => 
({type: CONSTANTES.REGISTRO, datos : values,});

export const actionLogin = datos => 
({type: CONSTANTES.LOGIN, datos,});

export const actionEstablecerSession = (user)=> 
({type : CONSTANTES.ESTABLECER_SESSION,user,});

export const actionCerrarSession = ()=> 
({type : CONSTANTES.CERRAR_SESSION, });