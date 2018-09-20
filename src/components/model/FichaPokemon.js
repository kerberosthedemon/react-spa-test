class FichaPokemon{
    constructor(obj){
        this.id = obj.id;
        this.name = this.toUpper(obj.name);
        this.sprites = obj.sprites;
    }

    toUpper(text){
        if(text !== null && text !== undefined && text !== ""){
            return text = text.charAt(0).toUpperCase() + text.slice(1);
        }
        return text;
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