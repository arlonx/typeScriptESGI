import Pokemon from "./pokemon";
import Attaque from "./attaque";

export class Combat {

  // @ts-ignore
  static intervalId: NodeJS.Timeout

  static combatVitesse = (pokemon1: Pokemon, pokemon2: Pokemon) => {
    if (pokemon1.vitesse > pokemon2.vitesse) {
      return [pokemon1,pokemon2];
    } else if (pokemon2.vitesse > pokemon1.vitesse) {
      return [pokemon2,pokemon1];
    } else {
      if ((Math.floor(Math.random() * 2) + 1) == 1)
        return [pokemon1,pokemon2];
      else
        return [pokemon2,pokemon1];
    }
  };

  static combatDegat = (pokemonD: Pokemon, pokemonA: Pokemon, attaqueU: Attaque) => {
    if(attaqueU.type == "physique")
    {
      return pokemonD.hp -= Math.floor(Math.floor(Math.floor(2 * pokemonA.level / 5 + 2) * attaqueU.puissance * pokemonA.attaqueP / pokemonD.defenseP) / 50) + 2;
    }
    else
    {
      return pokemonD.hp -= Math.floor(Math.floor(Math.floor(2 * pokemonA.level / 5 + 2) * attaqueU.puissance * pokemonA.attaqueP / pokemonD.defenseS) / 50) + 2;
    }
  };

  static combatSimulation (pokemon1: Pokemon, pokemon2: Pokemon, attaque:Attaque): Promise<Pokemon> {
    return new Promise((resolve, reject) => {
      Combat.intervalId = setInterval(() => {
        console.log("Nouveau tour commence");
        const roundOrder = Combat.combatVitesse(pokemon1, pokemon2);
        Combat.combatDegat(roundOrder[1], roundOrder[0], attaque);
        console.log(roundOrder[1].name + " attaque et il reste " + roundOrder[0].hp + " à " + roundOrder[0].name);
        if (roundOrder[1].hp <= 0){
          resolve(roundOrder[0]);
          clearInterval(Combat.intervalId);
          return;
        }
        Combat.combatDegat(roundOrder[0], roundOrder[1], attaque);
        console.log(roundOrder[0].name + " attaque et il reste " + roundOrder[1].hp + " à " + roundOrder[1].name);
        if (roundOrder[0].hp <= 0){
          resolve(roundOrder[1]);
          clearInterval(Combat.intervalId);
          return;
        }
      }, 1 ,pokemon1, pokemon2);
    })
  }
}