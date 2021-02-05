import { Enemy } from './../../models/enemy';
import { Player } from './../../models/player';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BattleService } from './battle.service';

describe('Service: Battle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattleService]
    });
  });

  it('player sould win the battle', inject([BattleService], (service: BattleService) => {
    const player = new Player();
    player.name = 'Matheus';
    player.attackPower = 300;
    player.deffencePower = 500;
    player.health = 100;
    player.maxHealth = 100;
    player.level = 1;

    const enemy = new Enemy({});
    enemy.name = 'Bat';
    enemy.attackPower = 300;
    enemy.deffencePower = 10;
    enemy.health = 1000;
    enemy.maxHealth = 1000;
    enemy.level = 1;

    const winner = service.battle(player, enemy);
    console.log(service.battleLog);

    expect(winner).toEqual(player);
  }));

  it('player sould loose the battle', inject([BattleService], (service: BattleService) => {
    const player = new Player();
    player.name = 'Matheus';
    player.attackPower = 300;
    player.deffencePower = 500;
    player.health = 250;
    player.maxHealth = 250;
    player.level = 1;

    const enemy = new Enemy({});
    enemy.name = 'Lion';
    enemy.attackPower = 610;
    enemy.deffencePower = 350;
    enemy.health = 500;
    enemy.maxHealth = 500;
    enemy.level = 5;

    const winner = service.battle(player, enemy);
    console.log(service.battleLog);

    expect(winner).toEqual(enemy);
  }));

  it('sould be a tie', inject([BattleService], (service: BattleService) => {
    const player = new Player();
    player.name = 'Matheus';
    player.attackPower = 300;
    player.deffencePower = 500;
    player.health = 250;
    player.maxHealth = 250;
    player.level = 1;

    const enemy = new Enemy({});
    enemy.name = 'Reverse Matheus';
    enemy.attackPower = 300;
    enemy.deffencePower = 500;
    enemy.health = 250;
    enemy.maxHealth = 250;
    enemy.level = 1;

    const winner = service.battle(player, enemy);
    console.log(service.battleLog);

    expect(winner).toBeNull();
  }));

  it('player should loose the battle because its level is lower than enemy level', inject([BattleService], (service: BattleService) => {
    const player = new Player();
    player.name = 'Matheus';
    player.attackPower = 300;
    player.deffencePower = 500;
    player.health = 250;
    player.maxHealth = 250;
    player.level = 1;

    const enemy = new Enemy({});
    enemy.name = 'Reverse Matheus';
    enemy.attackPower = 300;
    enemy.deffencePower = 500;
    enemy.health = 250;
    enemy.maxHealth = 250;
    enemy.level = 50;

    const winner = service.battle(player, enemy);
    console.log(service.battleLog);

    expect(winner).toEqual(enemy);
  }));

  it('player should win the battle because its level is bigger than enemy level', inject([BattleService], (service: BattleService) => {
    const player = new Player();
    player.name = 'Matheus';
    player.attackPower = 300;
    player.deffencePower = 500;
    player.health = 250;
    player.maxHealth = 250;
    player.level = 125;

    const enemy = new Enemy({});
    enemy.name = 'Reverse Matheus';
    enemy.attackPower = 300;
    enemy.deffencePower = 500;
    enemy.health = 250;
    enemy.maxHealth = 250;
    enemy.level = 50;

    const winner = service.battle(player, enemy);
    console.log(service.battleLog);

    expect(winner).toEqual(player);
  }));
});
