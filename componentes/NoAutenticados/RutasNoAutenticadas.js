import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';



const RutasNoAutenticadas = createStackNavigator({
  
  SignIn : {
    screen: SignIn ,
    navigationOptions : {
        //title : 'Sign In',
    }
  },
  SignUp : {
    screen: SignUp ,
    navigationOptions : {
      //title : 'Sign Up',
  }
  },
},{headerMode: 'none'},
{navigationOptions : {
  title : 'Moveet',
}}
);

export default createAppContainer(RutasNoAutenticadas);