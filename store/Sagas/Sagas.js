import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import { takeEvery, call} from 'redux-saga/effects';
import { autenticacion, dataBase } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';

const registroFirebase = values =>
    autenticacion.createUserWithEmailAndPassword(values.correo,values.password)
    .then(success => JSON.stringify(success));
    
const registroEnBBDD = ({uid, email, nombre}) =>  dataBase.ref('usuarios/'+uid).set({
    nombre, email
})

function* sagaRegistro(values){
    try {
        const registro = yield call(registroFirebase, values.datos);
        //uid, email, name
        const parseRegistro = JSON.parse(registro);
        const {email, uid} = parseRegistro.user;
        const {datos:{ nombre} } = values;
        yield call(registroEnBBDD,{ uid, email, nombre });
        
    } catch (error) {
        console.log(error.code);
        switch (error.code) {
            case "auth/email-already-in-use":
                    Alert.alert(
                        "Email",
                        "Correo en uso!",
                        [
                          { text: "OK",}
                        ],
                      );
                break;
            default:
                    Alert.alert(
                        "Error",
                        "Error durante el registro, vuelva a intentarlo!",
                        [
                          { text: "OK",}
                        ],
                      );
                break;
        }
        
    }
};

const loginFirebase= ({correo, password}) =>
    autenticacion.signInWithEmailAndPassword(correo, password)
    .then((success) => JSON.stringify(success));

function* sagaLogin(values){
    try {
        const {correo, password} = values.datos;
        const resultado = yield call(loginFirebase, {correo, password});
        //console.log(resultado);
        //JSON.parse(resultado);
    } catch (error) {
        console.log(error);
        //Alert.alert("Usuario o contraseña incorrectos!");
        Alert.alert(
            "Datos Incorrectos",
            "Usuario o contraseña incorrectos!",
            [
              { text: "OK",}
            ],
          );
        };
    }
   


export default function* funcion(){
    yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
    yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
    console.log("funciongener");
}