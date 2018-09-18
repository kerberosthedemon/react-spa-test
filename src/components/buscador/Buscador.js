import React, { Component } from 'react';

class Buscador extends Component{
    
    state = { textoBusqueda: '' };

    manejarSubmit = (event) => {
        event.preventDefault();
        this.props.manejarSubmit(this.state.textoBusqueda);
    };

    render(){
        return (
            <form onSubmit={this.manejarSubmit}>
                <input type="textbox"
                 placeholder="ingrese un nombre o numero"
                 value={this.state.textoBusqueda}
                 onChange={(event) => this.setState({textoBusqueda: event.target.value})} />

                <button type="submit">Buscar</button>
            </form>
        )
    }
}

export default Buscador;