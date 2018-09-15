import React, { Component } from 'react';
import './App.css';
import Buscador from '../buscador/Buscador';
import Carta from '../carta/Carta';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>        
//       </div>
//     );
//   }
// }

class App extends Component{
  state = {
    pokemonAPI_url: "http://pokeapi.salestock.net/api/v2/pokemon/",
    pokemonSeleccionado : {
      id: "1",
      name: "Bulbasaur",
      sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      }
    }
  }

  mostrarPokemon = (pokemonObj) => {
    this.setState(prevState => ({
      pokemonAPI_url: prevState.pokemonAPI_url,
      pokemonSeleccionado: {
        id: pokemonObj.id,
        name: pokemonObj.name,
        sprites: pokemonObj.sprites
      }
    }));
  }

  render(){
    return(
      <div>
        <Buscador mostrarPokemon={this.mostrarPokemon} pokemonAPI_url={this.state.pokemonAPI_url}/>
        <Carta {...this.state.pokemonSeleccionado}/>
      </div>
    );
  }
}

export default App;
