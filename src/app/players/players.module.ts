import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';

const routes: Routes = [
  { path: '', component: PlayersComponent }
];

@NgModule({
  declarations: [PlayersComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayersModule { }
