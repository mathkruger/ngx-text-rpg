import { Router } from '@angular/router';
import { PlayerService } from './services/player/player.service';
import { Player } from './models/player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private playerService: PlayerService, private router: Router) {

  }

  player: Player;

  ngOnInit(): void {
    this.player = this.playerService.getplayer();

    if(this.player == null) {
      this.router.navigate(['/create-player']);
    }
    else {
      this.playerService.setPlayer(this.player);
    }

    this.playerService.getPlayerObservable()
    .subscribe(item => {
      this.player = item;
    });

    setInterval(() => {
      if(this.player.energy < this.player.maxEnergy) {
        this.player.energy += 1;
        this.playerService.setPlayer(this.player);
      }
    }, 1000);
  }
  
}
