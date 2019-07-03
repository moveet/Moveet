import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Search from './Search'
import Autor from './Profile'
import Publicacion from './Publicacion'
import Comentarios from './Comentarios'


const StackSearch = createStackNavigator({
  Search : {
    screen: Search ,
    navigationOptions : {
      //title : 'Home',
    }
  },
  Publicacion : {
    screen: Publicacion ,
    navigationOptions : {
      //title : '',
    }
  }, 
  Autor : {
    screen: Autor ,
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

export default createAppContainer(StackSearch);