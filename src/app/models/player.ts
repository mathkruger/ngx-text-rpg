import { Creature } from "./interfaces/creature";

export class Player extends Creature {
    constructor() {
        super();

        this.experience = 100;
        this.level = this.experience / 100;
        this.attackPower = 10;
        this.deffencePower = 10;
        this.maxEnergy = 400;
        this.energy = 400;
        this.maxHealth = 100;
        this.health = 100;
    }

    email: string;
    experience: number;
    energy: number;
    maxEnergy: number;
}