import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Observable } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players$: Observable<any[]>;

  constructor(private playersService: PlayersService, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('The best players in the world');
    this.meta.addTag({ name: 'description', content: 'This is the list of the best players in the world' });
    this.players$ = this.playersService.findAll();
  }

}
