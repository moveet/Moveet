import React from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro }from '../../store/ACTIONS';

class SignUp extends React.Component{
  registroDeUsuario = (values)=>{
    this.props.registro(values);
  };
  render(){
    const { navigation } = this.props;
    console.log(this.props.registro.toString());
    return(
      <View style={styles.container}>
            <SignUpForm registro={this.registroDeUsuario}/>
            <Button title='Signin' onPress={ () => {navigation.goBack();}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal : 16,
  },
});

const mapStateToProps = (state) => {
    return{
        numero: state.reducerPrueba
        
    };
}
const mapDispatchToProps = (dispatch) => ({
    registro: (values) => {
            dispatch(actionRegistro(values));
        },
}); 

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
/*const SignUp= (props) => {
    const {navigation} = props;
    return( 
      <View style={{flex : 1, justifyContent: 'center'}}>
        <Text>Sign Up</Text>
        <Button title='SingIn' onPress={() => navigation.goBack()}/>
      </View>)
  };*/