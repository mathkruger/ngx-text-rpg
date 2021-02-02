import { Creature } from "./interfaces/creature";

export class Enemy extends Creature {
    type: string;
    goldWhenDefeated: number;
    xpWhenDefeated: number
}