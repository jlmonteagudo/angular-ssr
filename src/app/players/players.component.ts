import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players$: Observable<any[]>;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.players$ = this.playersService.findAll();
  }

}
