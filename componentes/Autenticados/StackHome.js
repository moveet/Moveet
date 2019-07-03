import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Home'
import Autor from './Profile'
import Publicacion from './Publicacion'
import Comentarios from './Comentarios'


const StackHome = createStackNavigator({
  Home : {
    screen: Home ,
    navigationOptions : {
      //title : 'Home',
    }
  },
  Autor : {
    screen: Autor ,
    navigationOptions : {
      //title : '',
    }
  }, 
  Publicacion : {
    screen: Publicacion ,
    navigationOptions : {
      //title : 'Sign Up',
    }
  },
  Comentarios : {
    screen: Comentarios ,
    navigationOptions : {
      //title : 'Sign Up',
    }
  },
},//{headerMode: 'none'}s
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default createAppContainer(StackHome);