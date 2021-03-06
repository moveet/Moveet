import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Publicacion extends React.Component{
  render(){
    const { navigation } = this.props;
    return(
      <View style={styles.container}>
        <Text>Publicacion</Text>
        <Button title='Autor' onPress={ () => {navigation.navigate('Autor')}}/>
        <Button title='Comentarios' onPress={ () => {navigation.navigate('Comentarios')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
});

export default Publicacion;