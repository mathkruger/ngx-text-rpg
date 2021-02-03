import { BattleService } from './../../services/battle/battle.service';
import { Enemy } from './../../models/enemy';
import { Player } from './../../models/player';
import { PlayerService } from './../../services/player/player.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private playerService: PlayerService, private router: Router, public battleService: BattleService) {

  }
  
  player: Player;

  ngOnInit(): void {
    this.playerService.getPlayerObservable()
    .subscribe(item => {
      this.player = item;
    });
  }

  battle() {
    if(this.player.energy >= 4) {
      const bat = new Enemy();
      bat.name = 'Bat';
      bat.attackPower = 5;
      bat.deffencePower = 0;
      bat.health = 20;
      bat.maxHealth = 20;
      bat.level = 1;
      bat.goldWhenDefeated = 20;
      bat.xpWhenDefeated = 20;
  
      const winner = this.battleService.battle(this.player, bat);

      if(winner == this.player) {
        this.player.experience += bat.xpWhenDefeated;
      }

      this.player.energy -= 4;
      this.playerService.setPlayer(this.player);
    }
    else {
      alert('YOU ARE TIRED, WAIT!!!');
    }
  }

  recover() {
    this.player.health = this.player.maxHealth;
    this.player.energy -= 100;
    
    if(this.player.energy < 0) {
      this.player.energy = 0;
    }

    this.playerService.setPlayer(this.player);
  }

}
