import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Creature } from 'src/app/models/interfaces/creature';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() { }

  battleLog: string[] = [];

  battle(a: Creature, b: Creature): Creature {
    if(a.attackPower == b.attackPower && a.deffencePower == b.deffencePower && a.health == b.health) {
      if(a.level > b.level) {
        this.battleLog.push(`${a.name} won!`);
        return a;
      }

      if(b.level > a.level) {
        this.battleLog.push(`${b.name} won!`);
        return b;
      }

      this.battleLog.push(`It's a tie!`);
      return null;
    }

    const damage = Math.max(0, a.attackPower - b.deffencePower);
    b.health -= damage;
    this.battleLog.push(`${a.name} dealt ${damage} damage to ${b.name}!`);

    
    if(b.health <= 0) {
      this.battleLog.push(`${a.name} won!`);
      return a;
    }

    if(a.health <= 0) {
      this.battleLog.push(`${b.name} won!`);
      return b;
    }

    return this.battle(b, a);
  }
}
