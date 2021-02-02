import { Router } from '@angular/router';
import { Player } from './../../models/player';
import { PlayerService } from './../../services/player/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  constructor(private playerService: PlayerService, private router: Router) { }

  model: Player;

  ngOnInit() {
    this.model = this.playerService.getplayer() || new Player();
  }

  save() {
    this.playerService.setPlayer(this.model);
    this.router.navigate(['']);
  }

}
