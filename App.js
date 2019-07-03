import React from 'react';
import { StyleSheet, View } from 'react-native';
import RutasNoAutenticadas from './componentes/NoAutenticados/RutasNoAutenticadas';
import RutasAutenticadas from './componentes/Autenticados/RutasAutenticadas';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Seleccion from './Seleccion';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = { nombre: 'Moveet'};
  }
  render(){
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Seleccion/>
        </Provider>
      </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
