import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from './store/Servicios/Firebase';
import RutasAutenticadas from './componentes/Autenticados/RutasAutenticadas';
import RutasNoAutenticadas from './componentes/NoAutenticados/RutasNoAutenticadas';
import { actionEstablecerSession, actionCerrarSession } from './store/ACTIONS';

class Seleccion extends React.Component{
   componentDidMount(){ 
        this.props.autenticar();
   }
  render(){
    const { navigation } = this.props;
    return(
      <View style={styles.container}>
        {this.props.user ? <RutasAutenticadas/> : <RutasNoAutenticadas />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
      user: state.reducerSession
});

  const mapDispatchToProps = dispatch => ({
    autenticar: () => {
        autenticacion.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log(user);
              dispatch(actionEstablecerSession(user));
              // ...
            } else {
              // User is signed out.
              // ...
              console.log("No existe session!");
              dispatch(actionCerrarSession());
            }
          });
        },
  }); 

export default connect(mapStateToProps,mapDispatchToProps)(Seleccion);