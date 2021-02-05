import { Player } from './../../models/player';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enemy } from 'src/app/models/enemy';
import { BattleService } from 'src/app/services/battle/battle.service';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(private playerService: PlayerService, private router: Router, public battleService: BattleService) { }

  ngOnInit() {
    this.playerService.getPlayerObservable()
    .subscribe(item => {
      this.player = item;
    });

    this.enemyList = [
      new Enemy({ name: 'Rat', level: 1, maxHealth: 20, health: 20, attackPower: 5, deffencePower: 0, xpWhenDefeated: 10 }),
      new Enemy({ name: 'Bat', level: 2, maxHealth: 30, health: 300, attackPower: 10, deffencePower: 10, xpWhenDefeated: 20 }),
      new Enemy({ name: 'Slime', level: 3, maxHealth: 50, health: 50, attackPower: 15, deffencePower: 20, xpWhenDefeated: 30 }),
      new Enemy({ name: 'Worm', level: 4, maxHealth: 60, health: 600, attackPower: 25, deffencePower: 30, xpWhenDefeated: 40 }),
      new Enemy({ name: 'Small Worlf', level: 5, maxHealth: 200, health: 200, attackPower: 30, deffencePower: 40, xpWhenDefeated: 55 }),
    ];
  }

  player: Player;
  enemyList: Enemy[] = [];
  selectedEnemy: Enemy;

  repeatBattle = false;
  loopBattleInterval = null;

  battle() {
    if(this.player.energy >= 4) {
      this.battleService.battleLog = [];

      const winner = this.battleService.battle(this.player, this.selectedEnemy);

      if(winner == this.player) {
        this.player.experience += this.selectedEnemy.xpWhenDefeated;
      }

      this.player.energy -= 4;
      this.playerService.setPlayer(this.player);
    }
    else {
      alert('YOU ARE TIRED, WAIT!!!');
    }
  }

  loopBattle() {
    this.repeatBattle = true;
    this.loopBattleInterval = setInterval(() => {
      this.battle();
    }, 1000);
  }

  stopLoop() {
    this.repeatBattle = false;
    clearInterval(this.loopBattleInterval);
  }
}
