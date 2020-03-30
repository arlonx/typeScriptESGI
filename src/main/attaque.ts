class Attaque {
    constructor(public name:string,public puissance:number, public type:string, public nature:number) {
        this.name = name;
        this.puissance = puissance;
        this.type = type;
        this.nature = nature;
    }
}

export default Attaque;