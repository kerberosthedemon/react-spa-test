import React, { Component } from 'react';
import Buscador from '../buscador/Buscador';
import Carta from '../carta/Carta';
import FichaPokemon from '../model/FichaPokemon';
import { Card, CardContent } from '@material-ui/core';
import HeaderMenu from './../headerMenu/HeaderMenu';

const style = {
  Title:{
    color: 'white',
  },
  Card:{
    margin: '8px',
    height: '100%',
    borderRadius: '0',
  }
};
export default class App extends Component{

  pokemonAPI_url = "http://pokeapi.salestock.net/api/v2/pokemon/";

  state = { pokemonSeleccionado: new FichaPokemon({}) };

  buscarPokemon = (textoBusqueda) => {
    fetch(this.pokemonAPI_url + textoBusqueda.toLowerCase() + "/")
     .then((resp) => resp.json())
      .then((data) => { this.setearFichaPokemon(new FichaPokemon(data)); });
  };

  setearFichaPokemon = (fichaPokemon) => {
    this.setState({ pokemonSeleccionado: fichaPokemon });
  };

  render(){
    return(
      <React.Fragment> 
        <HeaderMenu/>    
        <Card style={style.Card}>
          <CardContent>
            <Buscador manejarSubmit={this.buscarPokemon}/>
          </CardContent>
          <Carta pokemonSeleccionado={this.state.pokemonSeleccionado}/>
        </Card>
        
      </React.Fragment>
    );
  };
}