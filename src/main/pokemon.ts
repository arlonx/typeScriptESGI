class Pokemon {
    constructor(public name:string,public vitesse:number, public hp:number, public attaqueP:number, public level:number, public attaqueS:number,
                public defenseP:number, public defenseS:number) {
        this.name = name;
        this.vitesse = vitesse;
        this.hp = hp;
        this.attaqueP = attaqueP;
        this.attaqueS = attaqueS;
        this.defenseP = defenseP;
        this.defenseS = defenseS;
        this.level = level;
    }
}

export default Pokemon;
