import React from 'react';

const Carta = (props) => {
    if(props === {}) return(<div></div>);

    return(
        <div>
            <span>#{props.id} - {props.name}</span>
            <img alt='' src={props.sprites.front_default} />
        </div>
    );
}

export default Carta;