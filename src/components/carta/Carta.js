import React from 'react';

const Carta = (props) => {
    if(!props.pokemonSeleccionado.valido()) return(<div></div>);

    return(
        <div>
            <span>#{props.pokemonSeleccionado.id} - {props.pokemonSeleccionado.name}</span>
            <img alt='' src={props.pokemonSeleccionado.sprite_default} />
        </div>
    );
}

export default Carta;