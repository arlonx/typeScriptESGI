import Pokemon from "../main/pokemon";
import Attaque from "../main/attaque";
import {Combat} from "../main/combat";

describe('Test Pokemon.ts', () => {
    const pikachu: Pokemon = new Pokemon("pikachu", 5, 50, 30, 40, 40 ,20 ,20);
    const bulbizarre: Pokemon = new Pokemon("bulbizarre", 1, 50, 20, 40, 40 ,20 ,20);
    // nature 0 = physique, 1 = special
    const charge: Attaque = new Attaque("charge",40,"vol",0)
    const surf: Attaque = new Attaque("surf", 70, "feu", 1)
    test('premier à attaquer devrait être pikachu', () => {
        expect(Combat.combatVitesse(pikachu, bulbizarre)).toEqual([pikachu,bulbizarre]);
    })

    test('Pikachu inflige des dégat à Bulbizarre', () => {
        expect(Combat.combatDegat(pikachu, bulbizarre, charge)).toEqual(34);
    })
    test('combat doit être gagné par pikachu', async() => {
        expect(await Combat.combatSimulation(pikachu, bulbizarre, charge)).toEqual(pikachu);
    })
});