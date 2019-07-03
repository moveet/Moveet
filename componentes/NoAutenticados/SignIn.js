import React from 'react';
import { StyleSheet, Text, View,Button, requireNativeComponent } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';
import { actionLogin }from '../../store/ACTIONS';

class SignIn extends React.Component{
  siginDeUsuario = (values) => {
    this.props.login(values);
    };
  render(){
    const { navigation } = this.props;
    console.log(this.props.login);
    return(
      <View style={styles.container}>
        <SignInForm login={this.siginDeUsuario}/>
        <Button title='SignUp' onPress={ () => {navigation.navigate('SignUp')}}/>
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
const mapDispatchToProps = dispatch => ({
  login: (datos) => {
          dispatch(actionLogin(datos));
          
      },
}); 

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
/*const SignIn = (props) => {
    console.log(props);
    const {navigation} = props;
    return( 
      <View style={{flex : 1, justifyContent: 'center'}}>
        <Text>Sign In</Text>
        <Button title='SingUp' onPress={() => navigation.navigate('SignUp')}/>
      </View>)
  };*/

  