import { Creature } from "./interfaces/creature";

export class Enemy extends Creature {

    constructor({ type = null, goldWhenDefeated = null, xpWhenDefeated = null, name = null, level = null, health = null, maxHealth = null, attackPower = null, deffencePower = null  }:
    { type?: string; goldWhenDefeated?: number; xpWhenDefeated?: number; name?: string; level?: number; health?: number; maxHealth?: number; attackPower?: number; deffencePower?: number; }) {
        super();
        this.type = type;
        this.goldWhenDefeated = goldWhenDefeated;
        this.xpWhenDefeated = xpWhenDefeated;
        this.name = name;
        this.level = level;
        this.health = health;
        this.maxHealth = maxHealth;
        this.attackPower = attackPower;
        this.deffencePower = deffencePower;
    }

    type: string;
    goldWhenDefeated: number;
    xpWhenDefeated: number
}