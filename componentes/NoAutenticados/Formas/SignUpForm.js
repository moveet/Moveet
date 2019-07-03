import React from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { autenticacion } from '../../../store/Servicios/Firebase';

const NombrarField = (props) => {
    return(
        <View style={styles.TextInput}>
            <TextInput placeholder={props.ph} onChangeText={props.input.onChange} value={props.input.value}
            keyboardType={props.input.name==='correo'?'email-address':'default'} autoCapitalize='none' 
            secureTextEntry={!!(props.input.name==='password' || props.input.name==='confirmation')}
            onBlur={props.input.onBlur}/>
            <View style={styles.Separation} />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    )
};

const validate = (values)=>{
    const errors = {};

    if(!values.nombre){
        errors.nombre='* requerido'
    }else if(values.nombre.length < 5){
        errors.nombre='* deben ser al menos 5 caracteres'
    }else if(values.nombre.length > 10){
        errors.nombre='* deben ser menor de 10 caracteres'
    }

    if(!values.correo){
        errors.correo='*requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
        errors.correo='* correo invalido'
    }

    if(!values.password){
        errors.password='* requerido'
    }else if(values.password.length < 5){
        errors.password='* deben ser al menos 5 caracteres'
    }else if(values.password.length > 15){
        errors.password='* deben ser menor de 15 caracteres'
    }

    if(!values.confirmation){
        errors.confirmation='* requerido'
    }else if(values.password != values.confirmation){
        errors.confirmation='* debe coincidir los passwords'
    }
    return errors;
};
const SignUpForm = (props) => {
    console.log(props.error);
    return (
    <View>
        <Field name="nombre" component={NombrarField} ph='Name'/>
        <Field name="correo" component={NombrarField} ph='example@example.com'/>
        <Field name="password" component={NombrarField} ph='******'/>
        <Field name="confirmation" component={NombrarField} ph='******'/>
        <Button title="register" onPress ={props.handleSubmit(props.registro

       //(values)=>{console.log(values);
       // autenticacion.createUserWithEmailAndPassword(values.correo,values.password)
       // .then((succes)=> {console.log(succes)})
       // .catch((errors) => {
       //     var errorCode = error.code;
       //     var errorMessage = error.message;
       //     console.log(errorCode)
       //     console.log(errorMessage)
       //    })}
    )}/>
    </View>)
};

const styles = StyleSheet.create({
    TextInput: {
      marginBottom : 16,
    },
    Separation : {
        backgroundColor: '#DCDCDC',
        height: 2,
    },
    errors : {
        color : '#FF0000',
    }
  });
  
export default reduxForm({form:'SignUpForm',validate,})(SignUpForm);