import React, { Component } from 'react';
import Buscador from '../buscador/Buscador';
import Carta from '../carta/Carta';
import FichaPokemon from '../model/FichaPokemon';
import { Card, CardContent, Collapse, Grow, Zoom } from '@material-ui/core';
import HeaderMenu from './../headerMenu/HeaderMenu';
import Fade from '@material-ui/core/Fade';

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

  state = { 
    pokemonSeleccionado: new FichaPokemon({}),
    mostrar:false,
  };

  buscarPokemon = (textoBusqueda) => {
    fetch(this.pokemonAPI_url + textoBusqueda.toLowerCase() + "/")
     .then((resp) => resp.json())
      .then((data) => { this.setearFichaPokemon(new FichaPokemon(data)); });
  };

  setearFichaPokemon = (fichaPokemon) => {
    this.setState((prevState) => {return { 
      pokemonSeleccionado: fichaPokemon.valido() ? fichaPokemon : prevState.pokemonSeleccionado,
      mostrar: fichaPokemon.valido(),
     };});
  };

  render(){
    return(
      <React.Fragment> 
        <HeaderMenu/>    
        <Card style={style.Card}>
          <CardContent>
            <Buscador manejarSubmit={this.buscarPokemon}/>
          </CardContent>
          <Collapse in={this.state.mostrar}>
            <Zoom in={this.state.mostrar}>
              <Carta pokemonSeleccionado={this.state.pokemonSeleccionado}/>
            </Zoom>
          </Collapse>
        </Card>
        
      </React.Fragment>
    );
  };
}