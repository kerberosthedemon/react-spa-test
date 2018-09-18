import React, { Component } from 'react';
import './App.css';
import Buscador from '../buscador/Buscador';
import Carta from '../carta/Carta';
import FichaPokemon from '../model/FichaPokemon';
class App extends Component{

  pokemonAPI_url = "https://pokeapi.co/api/v2/pokemon/";

  state = { pokemonSeleccionado: new FichaPokemon({}) };

  buscarPokemon = (textoBusqueda) => {
    fetch(this.pokemonAPI_url + textoBusqueda + "/")
     .then((resp) => resp.json())
      .then((data) => { this.setearFichaPokemon(new FichaPokemon(data)); });
  };

  setearFichaPokemon = (fichaPokemon) => {
    this.setState({ pokemonSeleccionado: fichaPokemon });
  };

  render(){
    return(
      <div>
        <Buscador manejarSubmit={this.buscarPokemon}/>
        <Carta pokemonSeleccionado={this.state.pokemonSeleccionado}/>
      </div>
    );
  };
}

export default App;
