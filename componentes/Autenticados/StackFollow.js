import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Autor from './Profile'
import TabFollow from './TabFollow'
import Publicacion from './Publicacion'
import Comentarios from './Comentarios'
const StackHome = createStackNavigator({
    TabFollow : {
        screen: TabFollow ,
        navigationOptions : {
            header: null,
        }
    },
    Autor :{
        screen : Autor,
    },
    Publicacion : {
        screen: Publicacion ,
    },
    Comentarios : {
        screen: Comentarios ,
    },
    });

  export default createAppContainer(TabFollow);
  