class FichaPokemon{
    constructor(obj){
        this.id = obj.id;
        this.name = obj.name;
        this.sprite_default = obj.sprites ? obj.sprites.front_default : null;
    }

    valido(){
        if(this.id === null || this.id === undefined)
            return false;
        if(this.name === null || this.name === undefined)
            return false;
        if(this.sprite_default === null || this.sprite_default === undefined)
            return false;

        return true;
    }
}

export default FichaPokemon;