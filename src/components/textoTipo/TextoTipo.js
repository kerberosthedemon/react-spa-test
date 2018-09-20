import React from 'react';

const style = {
    normal: {
        background: '#A8A878',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#D8D8D0',
        borderBottomColor: '#705848',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    fuego: {
        background: '#F08030',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#F8D030',
        borderBottomColor: '#C03028',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    agua:{
        background: '#6890F0',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#98D8D8',
        borderBottomColor: '#807870',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    electrico:{
        background: '#F8D030',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#F8F878',
        borderBottomColor: '#B8A038',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    pasto:{
        background: '#78C850',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#C0F860',
        borderBottomColor: '#588040',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    volador:{
        background: '#A890F0',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#C8C0F8',
        borderBottomColor: '#705898',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    piedra:{
        background: '#B8A038',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#E0C068',
        borderBottomColor: '#886830',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    acero:{
        background: '#B8B8D0',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#D8D8C0',
        borderBottomColor: '#807870',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    tierra:{
        background: '#E0C068',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#F8F878',
        borderBottomColor: '#886830',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    insecto:{
        background: '#A8B820',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#D8E030',
        borderBottomColor: '#626C12',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    veneno:{
        background: '#A040A0',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#D880B8',
        borderBottomColor: '#483850',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    hielo:{
        background: '#98D8D8',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#D0F8E8',
        borderBottomColor: '#9090A0',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    lucha:{
        background: '#C03028',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#F08030',
        borderBottomColor: '#484038',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    psiquico:{
        background: '#F85888',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#F8C0B0',
        borderBottomColor: '#789010',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    oscuridad:{
        background: '#705848',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#A8A878',
        borderBottomColor: '#484038',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    fantasma:{
        background: '#705898',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#A890F0',
        borderBottomColor: '#483850',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    dragon:{
        background: '#7038F8',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#B8A0F8',
        borderBottomColor: '#483890',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },

    hada:{
        background: '#F0B6BC',
        borderStyle: 'solid none',
        borderWidth: '1px',
        borderTopColor: '#F5CAD1',
        borderBottomColor: '#905F63',
        borderRadius: '5px',
        padding: '0.15em',
        fontSize: '9pt',
        color: '#F8F8F8',
        textShadow: '0px 1px 1px #807870',
    },
};

const TextoTipo = (props) =>{
    return (<span style={traerEstilo(props.texto.toLowerCase())}>{props.texto}</span>)
}

const traerEstilo = (textoTipo) => {
    switch(textoTipo){
        case "normal":
            return style.normal;
        case "fire":
            return style.fuego;
        case "water":
            return style.agua;
        case "electric":
            return style.electrico;
        case "grass":
            return style.pasto;
        case "flying":
            return style.volador;
        case "rock":
            return style.piedra;
        case "steel":
            return style.acero;
        case "ground":
            return style.tierra;
        case "bug":
            return style.insecto;
        case "poison":
            return style.veneno;
        case "ice":
            return style.hielo;
        case "fighting":
            return style.lucha;
        case "psychic":
            return style.psiquico;
        case "dark":
            return style.oscuridad;
        case "ghost":
            return style.fantasma;
        case "dragon":
            return style.dragon;
        case "fairy":
            return style.hada;
        default:
            return style.normal;
    }
}

export default TextoTipo