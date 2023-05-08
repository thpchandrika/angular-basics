import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{

  players: any;
  searchName: string="";

  constructor(private playerService : PlayerServiceService) {  
    
  }

  ngOnInit(): void {
    this.playerService.getPlayers()
                       .subscribe((data) => this.players = data)
  }
  

}
