import React from 'react';

class EstiloTipo{
    constructor(background, borderTopColor, borderBottomColor){
        this.background = background;
        this.borderStyle = 'solid none';
        this.borderWidth = '1px';
        this.borderTopColor = borderTopColor;
        this.borderBottomColor = borderBottomColor;
        this.borderRadius = '5px';
        this.padding = '0.15em';
        this.fontSize = '9pt';
        this.color = '#F8F8F8';
        this.textShadow = '0px 1px 1px #807870';
        this.marginRight = '2px'
    }
}

const style = {
    normal: new EstiloTipo('#A8A878', '#D8D8D0', '#705848'),
    fuego: new EstiloTipo('#F08030','#F8D030', '#C03028'),
    agua: new EstiloTipo('#6890F0','#98D8D8', '#807870'),
    electrico: new EstiloTipo('#F8D030','#F8F878', '#B8A038'),
    pasto: new EstiloTipo('#78C850','#C0F860', '#588040'),
    volador: new EstiloTipo('#A890F0','#C8C0F8', '#705898'),
    piedra: new EstiloTipo('#B8A038','#E0C068', '#886830'),
    acero: new EstiloTipo('#B8B8D0','#D8D8C0', '#807870'),
    tierra: new EstiloTipo('#E0C068','#F8F878', '#886830'),
    insecto: new EstiloTipo('#A8B820','#D8E030', '#626C12'),
    veneno: new EstiloTipo('#A040A0','#D880B8', '#483850'),
    hielo: new EstiloTipo('#98D8D8','#D0F8E8', '#9090A0'),
    lucha: new EstiloTipo('#C03028','#F08030', '#484038'),
    psiquico: new EstiloTipo('#F85888','#F8C0B0', '#789010'),
    oscuridad: new EstiloTipo('#705848','#A8A878', '#484038'),
    fantasma: new EstiloTipo('#705898','#A890F0', '#483850'),
    dragon: new EstiloTipo('#7038F8','#B8A0F8', '#483890'),
    hada: new EstiloTipo('#F0B6BC','#F5CAD1', '#905F63'),
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