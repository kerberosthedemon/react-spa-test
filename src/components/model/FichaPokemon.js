class FichaPokemon{
    constructor(obj){
        this.id = obj.id;
        this.name = this.capitalizarPrimerLetra(obj.name);
        this.sprites = obj.sprites;
        this.types = this.obtenerTipos(obj.types);
    }

    capitalizarPrimerLetra(text){
        if(text !== null && text !== undefined && text !== ""){
            return text = text.charAt(0).toUpperCase() + text.slice(1);
        }
        return text;
    }

    obtenerTipos(types){
        if(types !== undefined && types !== null)
            return types.map(element => this.capitalizarPrimerLetra(element.type.name));

        return null;
    }

    valido(){
        if(this.id === null || this.id === undefined)
            return false;
        if(this.name === null || this.name === undefined)
            return false;
        if(this.sprites === null || this.sprites === undefined)
            return false;

        return true;
    }
}

export default FichaPokemon;