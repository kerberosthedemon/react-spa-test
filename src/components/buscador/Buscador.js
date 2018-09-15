import React, { Component } from 'react';

class Buscador extends Component{
    state = {
        textoBusqueda: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props.buscar(this.state.textoBusqueda);
        this.fetchPokemon(this.props.pokemonAPI_url + this.state.textoBusqueda);
    };

    fetchPokemon = (request) => {
        fetch(request)
            .then((resp) => resp.json())
            .then(response => {
                this.props.mostrarPokemon(response);
            });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="textbox"
                 value={this.state.textoBusqueda}
                 onChange={(event) => this.setState({textoBusqueda: event.target.value})} />

                <button type="submit">Buscar</button>
            </form>
        )
    }
}

export default Buscador;