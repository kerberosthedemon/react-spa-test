import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
class Buscador extends Component{
    
    state = { textoBusqueda: '' };

    manejarSubmit = (event) => {
        event.preventDefault();
        this.props.manejarSubmit(this.state.textoBusqueda);
    };

    render(){
        return (
            <form onSubmit={this.manejarSubmit}>
                <TextField required label="Nombre o Numero" value={this.state.textoBusqueda} 
                    onChange={(event) => this.setState({textoBusqueda: event.target.value})} />

                <Button color="primary" type="submit">Buscar</Button>
            </form>
        )
    }
}

export default Buscador;