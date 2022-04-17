import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBetsComponent } from './list-bets/list-bets.component';
import { ViewBetComponent } from './view-bet/view-bet.component';


@NgModule({
  declarations: [
    ListBetsComponent,
    ViewBetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListBetsComponent
  ]
})
export class OdersModule { }
