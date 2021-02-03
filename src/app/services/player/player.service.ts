import { BehaviorSubject } from 'rxjs';
import { Player } from './../../models/player';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  playerStorageKey = 'savedPlayer'

  playerSubject = new BehaviorSubject<Player>(null);

  getplayer(): Player {
    return JSON.parse(window.localStorage.getItem(this.playerStorageKey)) as Player;
  }

  getPlayerObservable() {
    return this.playerSubject.asObservable();
  }

  setPlayer(player: Player) {
    player.level = Math.floor(player.experience / 100);
    window.localStorage.setItem(this.playerStorageKey, JSON.stringify(player));
    this.playerSubject.next(player);
  }

}
