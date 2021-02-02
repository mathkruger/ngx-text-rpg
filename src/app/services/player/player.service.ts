import { Player } from './../../models/player';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  playerStorageKey = 'savedPlayer'

  getplayer(): Player {
    return JSON.parse(window.localStorage.getItem(this.playerStorageKey)) as Player;
  }

  setPlayer(player: Player) {
    player.level = Math.floor(player.experience / 100);
    window.localStorage.setItem(this.playerStorageKey, JSON.stringify(player));
  }

}
